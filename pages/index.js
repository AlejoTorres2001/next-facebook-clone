import { useSession, signIn, signOut,getSession } from "next-auth/react"
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import SideBar from "../components/SideBar"

export default function Home({session}) {
  if (!session) return <Login></Login>
  return (
    <div >
      <Head>
        <title>Facebook</title>
      </Head>
      <Header/>
      <main className="flex">
        <SideBar/>
         {/* feed */}
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