import React from "react";
import PostCard from "./PostCard";
import { useQuery } from "react-query";
import { PostProps } from "../types/types";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   if (!res.ok) {
  //     throw new Error('Failed to fetch')
  //   }
  return res.json();
}

const PostList = () => {
  const { data, status, isLoading } = useQuery("data", getData);
  return (
    <div>
      {isLoading ? (
        ""
      ) : (
        <>
          {data.map((post: PostProps) => (
            <PostCard key={post.id} {...post} />
          ))}
        </>
      )}
    </div>
  );
};

export default PostList;
