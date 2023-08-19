import React, { useState } from "react";
import { PostProps } from "../types/types";

type UserType = {
  sessionId: number;
  name: string;
};

const PostCard = ({ title, body }: PostProps) => {
  const [username, setUsername] = useState("");
  //   Allows for type or null
  const [user, setUser] = useState<UserType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      {user?.name}
    </div>
  );
};

export default PostCard;
