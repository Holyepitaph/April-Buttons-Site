import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Header} from 'src/pages/api/HeaderFooter.js'
import {TestA} from 'src/pages/api/Section1.js'
import {TestB} from 'src/pages/api/Section2.js'
import {TestC} from 'src/pages/api/Section3.js'
import {TestD} from 'src/pages/api/Section4.js'
import {TestE} from 'src/pages/api/Section5.js'
import {TestF} from 'src/pages/api/Section6.js'
import {TestG} from 'src/pages/api/Section7.js'
import {TestH} from 'src/pages/api/Section8.js'
import {TestI} from 'src/pages/api/Section9.js'
import {TestJ} from 'src/pages/api/Section10.js'
import {Footer} from 'src/pages/api/HeaderFooter.js'



const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>

  {/* 
      <TestA/>
      <TestB/>
      <TestC/>
      <TestD/>
      <TestE/>
      <TestF/>
      <TestG/>
      <TestH/>
      <TestI/>
      <TestJ/>
      <Footer/>*/}
    </main>
  )
}
