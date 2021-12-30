import { useSession, signIn, signOut } from "next-auth/react"
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'

export default function Home() {
  const { data: session } = useSession()
  if (!session) return <Login></Login>
  return (
    <div >
      <Head>
        <title>Facebook</title>
      </Head>
      <h1>Signed in as {session.user.email}</h1>
      <Header/>
      <main>
        {/* Sidebar */}
         {/* feed */}
         {/* widgets */}
      </main>
    </div>
  )
}