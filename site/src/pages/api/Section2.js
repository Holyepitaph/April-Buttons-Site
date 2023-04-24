function ParagraphB(){
    return(
        <div class="flex flex-col items-start flex-wrap text-sm">
            <h1 class="font-bold text-blue-700 my-3.5">LATEST UPDATES</h1>
            <h2 class="text-2xl font-bold my-3.5">Discover what's new in Font Awesome.</h2>
            <h1 class="font-bold my-3.5">NEW Introducing Font Awesome Sharp Light!</h1>
            <h2 class="my-1">Font Awesome Sharp Light has arrived! It's perfect for when you need to add a breezy,
             light touch of modern elegance. Read the announcement and see what's new in the 6.4.0 release.</h2>
            <h1 class="font-bold my-3.5">BETA Explore the Icon Wizard!</h1>
            <h2 class="my-1">With our new Icon Wizard, you can magically add a modifier – like circle-plus, slash,
             or even poop – to almost any Font Awesome icon. Available now to Font Awesome Pro subscribers.</h2>
            <h1 class="font-bold my-3.5">More Plugins + Packages</h1>
            <h2 class="my-1">Font Awesome 6 makes it even easier to use icons where you want to.
             More plugins and packages to match your stack. Less time wrestling browser rendering.</h2>
        </div>
    )
}

function Links(){
    return(
        <div class="grid grid-cols-2 gap-2 ml-11 font-bold text-sm my-3.5 underline">
            <a href="">Version 6.4.0</a>
            <a href="">68 Categories</a>
            <a href="">26,107 Pro Icons</a>
            <a href="">2,020 Free Icons</a>
        </div>
    )
}

function ButtonSectionTwoFirst({children}){
    return(
        <div>
            <button class=" border-4 border-red-500 hover:border-red-950 rounded-xl 
            w-full h-48 hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
            active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
        </div>
    )
}

function ButtonSectionTwoSecond({children}){
    return(
        <div>
            <button class=" border-4 border-red-500 hover:border-red-950 rounded-xl 
            w-11/12 h-36 hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
            active:translate-y-0.5 active:bg-slate-300 active:border-red-700 my-3.5">{children}</button>
        </div>
    )
}

function ParagraphSectionTwo(){
    return(
        <div>

        </div>
    )
}

export function SectionB(){
    return(
        <div class="my-3.5">
            <ParagraphB/>
            <Links/>
            <ButtonSectionTwoFirst>Introducing Font Awesome Sharp Light!</ButtonSectionTwoFirst>
            <div class="grid grid-cols-2 place-content-evenly w-full ml-1 my-3.5">
                <ButtonSectionTwoSecond>New Thin Style</ButtonSectionTwoSecond>
                <ButtonSectionTwoSecond>Beta Icon Wizard</ButtonSectionTwoSecond>
                <ButtonSectionTwoSecond>Humanitarian Icons</ButtonSectionTwoSecond>
                <ButtonSectionTwoSecond>New Animations</ButtonSectionTwoSecond>
            </div>
            <ParagraphSectionTwo/>
        </div>
    );
}