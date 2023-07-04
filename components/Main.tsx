"use client";

import React from "react";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

type MainProps = {
  children: React.ReactNode;
};
const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <Provider>
      <main className="app">
        <Nav />
        {children}
      </main>
    </Provider>
  );
};

export default Main;
