"use client";

import React, { useEffect, useState } from "react";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import {useRouter} from "next/navigation";
import {Post} from "@type/types";

const MyProfile = () => {
  const { data: session } = useSession();
  const router = useRouter()

  const [posts, setPosts] = useState([]);

  const handleEdit = (post: Post) => {
    router.push(`update-prompt?id=${post._id}`)
  };

  const handleDelete = async (post: Post) => {

  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    if (session?.user.id) fetchPost();
  }, []);

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
