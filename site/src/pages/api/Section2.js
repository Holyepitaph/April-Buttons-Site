function ParagraphB(){
    return(
        <div class="flex flex-col items-center flex-wrap">
            <h1 class="text-xl font-bold">LATEST UPDATES</h1>
            <h2>Discover what's new in Font Awesome.</h2>
            <h1 class="text-xl font-bold">NEW Introducing Font Awesome Sharp Light!</h1>
            <h2>Font Awesome Sharp Light has arrived! It's perfect for when you need to add a breezy,
             light touch of modern elegance. Read the announcement and see what's new in the 6.4.0 release.</h2>
            <h1 class="text-xl font-bold">BETA Explore the Icon Wizard!</h1>
            <h2>With our new Icon Wizard, you can magically add a modifier – like circle-plus, slash,
             or even poop – to almost any Font Awesome icon. Available now to Font Awesome Pro subscribers.</h2>
            <h1 class="text-xl font-bold">More Plugins + Packages</h1>
            <h2>Font Awesome 6 makes it even easier to use icons where you want to.
             More plugins and packages to match your stack. Less time wrestling browser rendering.</h2>
        </div>
    )
}

function Links(){
    return(
        <div class="grid grid-cols-2 gap-2 ml-11 my-3.5">
            <div>Version 6.4.0</div>
            <div>68 Categories</div>
            <div>26,107 Pro Icons</div>
            <div>2,020 Free Icons</div>
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
            w-11/12 h-48 hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
            active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
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
            <ButtonSectionTwoFirst>Testing</ButtonSectionTwoFirst>
            <div class="grid grid-cols-2 place-content-evenly w-full ml-1">
                <ButtonSectionTwoSecond>First</ButtonSectionTwoSecond>
                <ButtonSectionTwoSecond>Second</ButtonSectionTwoSecond>
                <ButtonSectionTwoSecond>Third</ButtonSectionTwoSecond>
                <ButtonSectionTwoSecond>Fourth</ButtonSectionTwoSecond>
            </div>
            <ParagraphSectionTwo/>
        </div>
    );
}