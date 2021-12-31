import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";

const Posts = () => {
  const [realTimePost, loading, error] = useCollection(
    collection(db, "posts"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
      orderBy: ["timestamp", "desc"],
    }
  );

  return (
    <div>
      <p className="scrollbar-hide">
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {realTimePost &&
          realTimePost.docs.map((post) => (
            <Post key={post.id} name={post.data().name}
            message={post.data().message}
            email={post.data().email}
            timestamp={post.data().timestamp}
            image = {post.data().image}
            postImg = {post.data().post_img}
             />
          ))}
      </p>
    </div>
  );
};

export default Posts;
