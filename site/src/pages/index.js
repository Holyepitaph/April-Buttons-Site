import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Header} from 'src/pages/api/HeaderFooter.js'
import {SectionA} from 'src/pages/api/Section1.js'
import {SectionB} from 'src/pages/api/Section2.js'
import {SectionC} from 'src/pages/api/Section3.js'
import {SectionD} from 'src/pages/api/Section4.js'
import {SectionE} from 'src/pages/api/Section5.js'
import {SectionF} from 'src/pages/api/Section6.js'
import {SectionG} from 'src/pages/api/Section7.js'
import {SectionH} from 'src/pages/api/Section8.js'
import {SectionI} from 'src/pages/api/Section9.js'
import {SectionJ} from 'src/pages/api/Section10.js'
import {Footer} from 'src/pages/api/HeaderFooter.js'
import {Test} from 'src/pages/api/Test.js'



const inter = Inter({ subsets: ['latin'] })

function TemplateButtonaaaaaa({children}){
  return(
      <div>
        <button class=" border-4 border-red-500 hover:border-red-950 rounded-xl 
        w-48 hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
      </div>
  )
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* 
      {Test}      
*/}
      <Header/>
      <SectionA/>
      <SectionB/>
      <SectionC/>
      <SectionD/>
      <SectionE/>
      <SectionF/>
      <SectionG/>
      <SectionH/>
      <SectionI/>
      <SectionJ/>
      <Footer/>


    </main>
  )
}
