// @ts-ignore
import { Post } from "@type/types";
import PromptCard from "@components/PromptCard";
import React, { Key } from "react";

type PromptCardListType = {
  data: Post[];
  handleTagClick: (tag: Post['tag']) => void;
};

const PromptCardList: React.FC<PromptCardListType> = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => {
        if (post) {
          return (
            <PromptCard
              key={post._id as Key}
              post={post}
              handleTagClick={handleTagClick}
              handleDelete={() => {}}
            />
          );
        }
      })}
    </div>
  );
};

export default PromptCardList;
