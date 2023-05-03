import { useState } from 'react';
import Image from 'next/image'

function NavIn(){
    return(
    <ul id="nav" className="font-bold z-50 bg-white flex flex-col absolute top-10 left-0 justify-between items-center h-1/2 w-full animate-transIn" >
        <li className="border-t-4 w-full center text-center">Start</li>
        <li className="border-t-4 w-full center text-center">Search</li>
        <li className="border-t-4 w-full center text-center">Icons</li>
        <li className="border-t-4 w-full center text-center">Docs</li>
        <li className="border-t-4 w-full center text-center">Plans</li>
        <li className="border-t-4 w-full center text-center">Support</li>
        <li className="border-t-4 border-b-4 w-full center text-center">Blog</li>
    </ul>
    )
}

function NavOut(){
    return(
    <ul id="nav" className="font-bold z-50 bg-white flex flex-col absolute top-10 left-0 justify-between items-center h-1/2 w-full animate-transOut" >
        <li className="border-t-4 w-full center text-center">Start</li>
        <li className="border-t-4 w-full center text-center">Search</li>
        <li className="border-t-4 w-full center text-center">Icons</li>
        <li className="border-t-4 w-full center text-center">Docs</li>
        <li className="border-t-4 w-full center text-center">Plans</li>
        <li className="border-t-4 w-full center text-center">Support</li>
        <li className="border-t-4 border-b-4 w-full center text-center">Blog</li>
    </ul>
    )
}

export function Header(){
    const [isChanged, setIsChanged] = useState(false);
    function click(){
        setIsChanged(!isChanged)
    }
    return(
        <div>
            <button className="flex flex-row absolute font-bold text-lg
              top-0 left-0 justify-evenly w-full border-4 border-slate-500 hover:border-slate-950 rounded-xl 
         hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-slate-700" onClick={click}>Menu</button>
            {isChanged ? <NavIn/> : <NavOut/>}
        </div>
    );
}

function ParagraphFooter(){
    return(
        <div className="text-sm">
            <Image
              src="/cheese.jpg"
              alt="Queso"
              width={100}
              height={100}
              className="border-4 border-slate-200 my-3.5"
              priority
            />
            <h2 className="my-3.5 font-bold">Innovating the future, today</h2>
            <p className="my-3.5">We strive to achieve the highest level of quality and
             performance in everything we do, while also prioritizing sustainability and social responsibility.</p>
            <p className="my-3.5">Our goal is to inspire and empower our customers to achieve 
            their full potential, while also contributing to the betterment of society and the planet as a whole.</p>        
        </div>
    )
}

function ListFooter(){
    return(
        <div className="flex flex-row justify-between my-3.5 text-sm">
            <ul>
                <li className="font-bold">Products</li>
                <li>Computers</li>
                <li>Smartphones</li>
                <li>Smart Home</li>
                <li>Virtual Reality</li>
            </ul>
            <ul>
                <li className="font-bold">Software</li>
                <li>Nebula SafeGuard Pro</li>
                <li>NebulaCapture</li>
                <li>Nebula Fitness</li>
                <li>Nebula Music</li>
            </ul>
            <ul>
                <li className="font-bold">Help</li>
                <li>Support</li>
                <li>Troubleshooting</li>
                <li>Contact Us</li>
                <li>Status</li>
            </ul>
        </div>
    )
}

export function Footer(){
    return(
        <div>
            <ParagraphFooter/>
            <ListFooter/>
        </div>
    );
}