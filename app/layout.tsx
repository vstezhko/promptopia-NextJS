import "@styles/globals.css";
import React from "react";
import Main from "@components/Main";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <Main>
            {children}
          </Main>
      </body>
    </html>
  );
};

export default RootLayout;
