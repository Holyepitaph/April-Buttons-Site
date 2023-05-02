{/**Needs Responsive Update */}
function ParagraphSection6(){
    return(
        <div class="text-sm">
            <h2 class="text-purple-700 font-bold">ICON DISCOVERY</h2>
            <h1 class="text-2xl font-bold my-3.5">These ARE the icons you&apos;re looking for.</h1>
            <p class="mb-3.5">Have you ever squandered hours scanning the dank, skeezy corners of the internet
             scrounging up the icons you need? Us too. That&apos;s why we re-engineered our icon search
              from the ground up with ease of icon findability in mind, so you can match your brand with
               the perfect look and feel.</p>
        </div>
    )
}

function ButtonFirstSectionSix({children}){
    return(
        <div class="h-11 w-full my-3.5">
        <button class=" border border-slate-500 hover:border-red-950 rounded-full 
        w-full h-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
      </div>
    )
}

function ButtonSecondSectionSix({children}){
    return(
        <div class="w-full h-24">
        <button class=" border-4 border-red-500 hover:border-red-950 rounded-xl 
        w-full h-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
      </div>
    )
}

function ButtonThirdSectionSix({children}){
    return(
        <div class="w-full h-72 col-span-2 md:col-span-1">
        <button class="flex flex-col items-center justify-center border-4 border-red-500 hover:border-red-950 rounded-xl 
        w-full h-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
      </div>
    )
}

function ButtonFourthSectionSix({children}){
    return(
        <div class="w-full h-72 col-span-3 md:col-span-1">
        <button class="flex flex-col items-center justify-center border-4 border-red-500 hover:border-red-950 rounded-xl 
        w-full h-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
      </div>
    )
}

function ButtonFifthSectionSix({children}){
    return(
        <div class="w-full h-56">
        <button class="flex flex-col items-center justify-center border-4 border-red-500 hover:border-red-950 rounded-xl 
        w-full h-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
      </div>
    )
}

export function SectionF(){
    return(
        <div class="my-3.5">
            <ParagraphSection6/>
            <ButtonFirstSectionSix>Search Bar</ButtonFirstSectionSix>
                <div class="grid grid-cols-3 gap-4 my-3.5 md:grid-cols-6">
                    <ButtonSecondSectionSix>Emoji</ButtonSecondSectionSix>
                    <ButtonSecondSectionSix>Fruits + Vegetables</ButtonSecondSectionSix>
                    <ButtonSecondSectionSix>Alphabet</ButtonSecondSectionSix>
                    <ButtonSecondSectionSix>Maritime</ButtonSecondSectionSix>
                    <ButtonSecondSectionSix>Science Fiction</ButtonSecondSectionSix>
                    <ButtonSecondSectionSix>All Categories</ButtonSecondSectionSix>
                </div>
                <div class="grid grid-cols-6 gap-4 my-3.5 md:grid-cols-5">
                    <ButtonThirdSectionSix><b>Solid</b>Great for Small sizes and bringing contrast to text.</ButtonThirdSectionSix>
                    <ButtonThirdSectionSix><b>Regular</b>East, readable icons that blend in with regular text.</ButtonThirdSectionSix>
                    <ButtonThirdSectionSix><b>Light</b>When a lighter touch is needed.</ButtonThirdSectionSix>
                    <ButtonFourthSectionSix><b>THIN</b>Fits in with the latest super-light designs.</ButtonFourthSectionSix>
                    <ButtonFourthSectionSix><b>DUOTONE</b>Great for an illustrated feel & grabbing attention.</ButtonFourthSectionSix>
                </div>
                <div class="grid grid-cols-2 gap-4 my-3.5 md:grid-cols-4">
                    <ButtonFifthSectionSix><i><b>SHARP</b></i><b>SOLID</b>A dash of class for a bold, sharp look.</ButtonFifthSectionSix>
                    <ButtonFifthSectionSix><i><b>SHARP</b></i><b>REGULAR</b>Sharpen your designs with straightforward icons.</ButtonFifthSectionSix>
                    <ButtonFifthSectionSix><i><b>SHARP</b></i><b>LIGHT</b>Add a breezy, light touch of modern elegance.</ButtonFifthSectionSix>
                    <ButtonFifthSectionSix><b>BRANDS</b>The easiest way to add social logos to your site.</ButtonFifthSectionSix>
                </div>
        </div>
    );
}