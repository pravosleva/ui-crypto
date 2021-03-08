import Head from 'next/head'
import Sidebar from '~/common/components/sidebar'
import Header from "~/common/components/Header"
import Container from '~/common/components/Container'


export default function Home() {
  return (
    <div>
      <div className="flex w-screen h-screen" >
        <Sidebar />
        <div className="w-screen ">
          <Header />
          <Container />
        </div>
      </div>

    </div>
  )
}
