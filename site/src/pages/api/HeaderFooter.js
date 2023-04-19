import { useState } from 'react';

function NavIn(){
    return(
    <ul id="nav" class="flex flex-col absolute top-10 left-0 justify-between items-center h-1/2 w-full animate-transIn" >
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
    <ul id="nav" class="flex flex-col absolute top-10 left-0 justify-between items-center h-1/2 w-full animate-transOut" >
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
            <ul class="flex flex-row absolute top-0 left-0 justify-between w-full">
                <li onClick={click}>Activation</li>
                <li>PlaceHolder</li>
                <li>PlaceHolder</li>
            </ul>
            {isChanged ? <NavIn/> : <NavOut/>}
        </div>
    );
}

export function Footer(){
    return(
        <div>Footer Test</div>
    );
}