import { useState } from 'react';
import Image from 'next/image'

function NavIn(){
    return(
    <ul id="nav" class="font-bold z-50 bg-white flex flex-col absolute top-10 left-0 justify-between items-center h-1/2 w-full animate-transIn" >
        <li class="border-t-4 w-full center text-center">Start</li>
        <li class="border-t-4 w-full center text-center">Search</li>
        <li class="border-t-4 w-full center text-center">Icons</li>
        <li class="border-t-4 w-full center text-center">Docs</li>
        <li class="border-t-4 w-full center text-center">Plans</li>
        <li class="border-t-4 w-full center text-center">Support</li>
        <li class="border-t-4 border-b-4 w-full center text-center">Blog</li>
    </ul>
    )
}

function NavOut(){
    return(
    <ul id="nav" class="font-bold z-50 bg-white flex flex-col absolute top-10 left-0 justify-between items-center h-1/2 w-full animate-transOut" >
        <li class="border-t-4 w-full center text-center">Start</li>
        <li class="border-t-4 w-full center text-center">Search</li>
        <li class="border-t-4 w-full center text-center">Icons</li>
        <li class="border-t-4 w-full center text-center">Docs</li>
        <li class="border-t-4 w-full center text-center">Plans</li>
        <li class="border-t-4 w-full center text-center">Support</li>
        <li class="border-t-4 border-b-4 w-full center text-center">Blog</li>
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
            <button class="flex flex-row absolute font-bold text-lg
              top-0 left-0 justify-evenly w-full border-4 border-slate-500 hover:border-slate-950 rounded-xl 
         hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-slate-700" onClick={click}>Menu</button>
            {isChanged ? <NavIn/> : <NavOut/>}
        </div>
    );
}

function ParagraphFooter(){
    return(
        <div class="text-sm">
            <Image
              src="/cheese.jpg"
              alt="Queso"
              width={100}
              height={100}
              class="border-4 border-slate-200 my-3.5"
              priority
            />
            <h2 class="my-3.5 font-bold">Go Make Something Awesome</h2>
            <p class="my-3.5">Font Awesome is the internet&apos;s icon library and toolkit used by millions
             of designers, developers, and content creators.</p>
            <p class="my-3.5">Made with and in Bentonville, Boston, Chicago, Grand Rapids, Joplin, Kansas City, Seattle,
             Tampa, and Vergennes.</p>        
        </div>
    )
}

function ListFooter(){
    return(
        <div class="flex flex-row justify-between my-3.5 text-sm">
            <ul>
                <li class="font-bold">Project</li>
                <li>Download</li>
                <li>Changelog</li>
                <li>Commission Icons</li>
                <li>All Versions</li>
            </ul>
            <ul>
                <li class="font-bold">Community</li>
                <li>GitHub</li>
                <li>Icon Requests</li>
                <li>Twitter</li>
                <li>Shirts + Stuff</li>
            </ul>
            <ul>
                <li class="font-bold">Help</li>
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