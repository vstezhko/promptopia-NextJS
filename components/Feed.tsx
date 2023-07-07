"use client";

import React, { Key } from "react";
import { useState, useEffect } from "react";
import PromptCardList from "@components/PromptCardList"
import PromptCard from "./PromptCard";
// @ts-ignore
import { Post } from "@type/types";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = () => {};

  const handleTagClick = (tag: Post["tag"]) => {
    console.log(tag);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };

    fetchPost();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        {/*<input*/}
        {/*  type="text"*/}
        {/*  placeholder="Search for a tag or a username"*/}
        {/*  value={searchText}*/}
        {/*  onChange={handleSearchChange}*/}
        {/*  required*/}
        {/*  className="search_input peer"*/}
        {/*/>*/}
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;
