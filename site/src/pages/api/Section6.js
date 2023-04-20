function ParagraphSection6(){
    return(
        <div>
            <h2>ICON DISCOVERY</h2>
            <h1>These ARE the icons you're looking for.</h1>
            <p>Have you ever squandered hours scanning the dank, skeezy corners of the internet
             scrounging up the icons you need? Us too. That's why we re-engineered our icon search
              from the ground up with ease of icon findability in mind, so you can match your brand with
               the perfect look and feel.</p>
        </div>
    )
}

function ButtonFirstSectionSix({children}){
    return(
        <div>
        <button class=" border-4 border-red-500 hover:border-red-950 rounded-xl 
        w-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
      </div>
    )
}

function ButtonSecondSectionSix({children}){
    return(
        <div class="w-2/6">
        <button class=" border-4 border-red-500 hover:border-red-950 rounded-xl 
        w-full h-16 hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
      </div>
    )
}

function ButtonThirdSectionSix({children}){
    return(
        <div class="w-1/3 h-56">
        <button class="flex flex-col items-center justify-center border-4 border-red-500 hover:border-red-950 rounded-xl 
        w-full h-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
      </div>
    )
}

function ButtonFourthSectionSix({children}){
    return(
        <div class="w-[49.5%] h-56">
        <button class="flex flex-col items-center justify-center border-4 border-red-500 hover:border-red-950 rounded-xl 
        w-full h-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
      </div>
    )
}

function ButtonFifthSectionSix({children}){
    return(
        <div class="w-[49.5%] h-56">
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
            <div class="flex flex-row justify-center my-3.5  gap-2">
                <ButtonSecondSectionSix>Emoji</ButtonSecondSectionSix>
                <ButtonSecondSectionSix>Fruits + Vegetables</ButtonSecondSectionSix>
                <ButtonSecondSectionSix>Alphabet</ButtonSecondSectionSix>
            </div>    
            <div class="flex flex-row justify-center my-3.5  gap-2">
                <ButtonSecondSectionSix>Maritime</ButtonSecondSectionSix>
                <ButtonSecondSectionSix>Science Fiction</ButtonSecondSectionSix>
                <ButtonSecondSectionSix>All Categories</ButtonSecondSectionSix>
            </div>
            <div class="flex flex-row justify-center my-3.5  gap-2">
                <ButtonThirdSectionSix><b>Solid</b>Great for Small sizes and bringing contrast to text.</ButtonThirdSectionSix>
                <ButtonThirdSectionSix><b>Regular</b>East, readable icons that blend in with regular text.</ButtonThirdSectionSix>
                <ButtonThirdSectionSix><b>Light</b>When a lighter touch is needed.</ButtonThirdSectionSix>
            </div>
            <div class="flex flex-row my-3.5 gap-2 flex-wrap">
                <ButtonFourthSectionSix><b>THIN</b>Fits in with the latest super-light designs.</ButtonFourthSectionSix>
                <ButtonFourthSectionSix><b>DUOTONE</b>Great for an illustrated feel & grabbing attention.</ButtonFourthSectionSix>
                <ButtonFifthSectionSix><i><b>SHARP</b></i><b>SOLID</b>A dash of class for a bold, sharp look.</ButtonFifthSectionSix>
                <ButtonFifthSectionSix><i><b>SHARP</b></i><b>REGULAR</b>Sharpen your designs with straightforward icons.</ButtonFifthSectionSix>
                <ButtonFifthSectionSix><i><b>SHARP</b></i><b>LIGHT</b>Add a breezy, light touch of modern elegance.</ButtonFifthSectionSix>
                <ButtonFifthSectionSix><b>BRANDS</b>The easiest way to add social logos to your site.</ButtonFifthSectionSix>
            </div>
        </div>
    );
}