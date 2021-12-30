import { useSession, signIn, signOut,getSession } from "next-auth/react"
import Head from 'next/head'
import Feed from "../components/Feed"
import Header from '../components/Header'
import Login from '../components/Login'
import SideBar from "../components/SideBar"

export default function Home({session}) {
  if (!session) return <Login></Login>
  return (
    <div className=" bg-gray-50">
      <Head>
        <title>Facebook</title>
      </Head>
      <Header/>
      <main className="flex">
        <SideBar/>
         <Feed/>
         {/* widgets */}
      </main>
    </div>
  )
  
}
export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: { session }
  }
}