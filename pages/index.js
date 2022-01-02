import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import SideBar from "../components/SideBar";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) return <Login></Login>;
  return (
    <div className=" bg-gray-50">
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />
      <main className="flex">
        <SideBar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
  const snapshot = await getDocs(q);
  const docs = snapshot.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: { session, posts: docs },
  };
}
