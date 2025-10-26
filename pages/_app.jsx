
import '../styles/globals.css'
import Link from 'next/link'
export default function App({ Component, pageProps }){
  return (
    <>
      <header style={{maxWidth:1100, margin:'0 auto', padding:24, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h1 style={{fontWeight:700}}>🏠 HouseHive.ai</h1>
        <nav style={{display:'flex', gap:12}}>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/tasks">Maintenance</Link>
          <Link href="/messages">Messages</Link>
          <Link href="/billing">Billing</Link>
          <a href="/">Logout</a>
        </nav>
      </header>
      <main><Component {...pageProps}/></main>
    </>
  )
}
