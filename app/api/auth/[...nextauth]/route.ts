import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { connectToDB } from "@utils/database";


//todo enums
const googleClientId = process.env.GOOGLE_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const nextSecret = process.env.NEXT_SECRET;

if (!googleClientId || !googleClientSecret) {
    throw new Error("Google credentials are not provided.");
}

const googleProvider = GoogleProvider({
  clientId: googleClientId,
  clientSecret: googleClientSecret,
});


const handler = NextAuth({
  providers: [googleProvider],
  secret: nextSecret,
  callbacks: {
    async session({ session }) {
      console.log('SESSION !!!', session)

      if (!session.user?.email) {
        throw new Error("session user email are not provided.");
      }
      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      console.log('SESSION ильязубович', User.exists({
        username: "ильязубович",
      }))

      session.user.id = sessionUser._id.toString();
      console.log('session', session)
      return session;
    },
    async signIn({ profile }) {
      console.log('profile sign in', profile)

      if (!profile?.email || !profile?.name || profile?.image) {
        throw new Error("profile data are not provided.");
      }
      try {
        await connectToDB();

        //check if a user already exists
        const userExists = await User.findOne({
          email: profile.email,
        });

        //if not, create a user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;

      } catch (error) {
        console.log(error);
      }
      return false;
    },
  }

});

export { handler as GET, handler as POST };
