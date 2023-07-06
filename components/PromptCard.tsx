"use client";
import React, {useState} from "react";
import Image from "next/image";
// @ts-ignore
import {Post} from "@types/types";

type PromptCardType = {
    post: Post;
    handleTagClick: (tag: Post['tag']) => void;
    // handleEdit: () => void;
    handleDelete: () => void;
};

const PromptCard: React.FC<PromptCardType> = ({
                                              post,
                                              handleTagClick,
                                              // handleEdit,
                                              handleDelete,
                                          }) => {
    const [copied, setCopy] = useState<Post["prompt"]>("");

    if (!post.prompt || !post.creator ) {
        throw new Error("post is undefined");
    }

    const handleCopy = () => {
        setCopy(post.prompt);

        post.prompt && navigator.clipboard.writeText(post.prompt.toString());
        setTimeout(() => setCopy(""), 3000);
    };

    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                    <Image
                        src={post.creator.image || "/assets/images/logo.svg"}
                        alt="user_image"
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                    />

                    <div className="flex flex-col">
                        <h3 className="font-satoshi font-semibold text-gray-900">
                            {post.creator.username}
                        </h3>
                        <p className="font-inter text-sm text-gray-500">
                            {post.creator.email}
                        </p>
                    </div>
                </div>

                <div className="copy_btn" onClick={handleCopy}>
                    <Image
                        src={
                            copied === post.prompt
                                ? "/assets/icons/tick.svg"
                                : "/assets/icons/copy.svg"
                        }
                        alt="copied"
                        width={12}
                        height={12}
                    />
                </div>
            </div>

            <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
            <p
                className="font-inter text-sm blue_gradient cursor-pointer"
                onClick={() => handleTagClick && post.tag && handleTagClick(post.tag)}
            >
                #{post.tag}
            </p>
        </div>
    );
};

export default PromptCard;
