import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDB } from "@utils/database";

// todo types

type Profile = {
    id: Number,
    email: String,
    name: String,
    picture: String
}

type Session = {
    user: Profile
}


//todo enums
const googleClientId = process.env.GOOGLE_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!googleClientId || !googleClientSecret) {
    throw new Error("Google credentials are not provided.");
}

const googleProvider = GoogleProvider({
  clientId: googleClientId,
  clientSecret: googleClientSecret,
});



const handler = NextAuth({
  providers: [googleProvider],

  // todo type session
  async session({ session }:{ session: Session }) {
    const sessionUser = await User.findOne({
      email: session.user.email,
    });

    session.user.id = sessionUser._id.toString();
    return session;
  },
  async signIn({ profile }:{ profile: Profile }) {
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
  },
});

export { handler as GET, handler as POST };
