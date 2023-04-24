function ImageSectionThree(){
    return(
        <div>
            <div class="w-full border-4 border-emerald-500 bg-emerald-100">
                <img src="" height="500" width="500" alt="Picture of Something Cool"/>
            </div>
        </div>
    )

}

function ParagraphSectionThree(){
    return(
        <div class="my-3.5 text-sm">
            <h2 class="text-emerald-500 font-bold">PROUDLY OPEN SOURCE</h2>
            <h1 class="text-2xl font-bold my-3.5">Everyone gets more awesome.</h1>
            <p>We know the pain of wrangling icons on the internet.
             That's why in 2012, we created the first version of our open-source icons and toolkit.
              And with the help of our subscription plan Font Awesome Pro, we've built a lean icon-obsessed
               team who keep cranking out more icons, more styles, and more services for everyone.</p>
        </div>
    )
}

function ButtonSectionThreeFirst({children}){
    return(
        <div class="text-sm font-bold h-11">
            <button class=" border bg-emerald-300 border-slate-600 hover:border-emerald-800 rounded-xl 
            w-full h-full hover:bg-emerald-500 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
            active:translate-y-0.5 active:bg-emerald-600 active:border-emerald-700">{children}</button>
        </div>
    )
}

export function SectionC(){
    return(
        <div class="my-3.5">
            <ImageSectionThree/>
            <ParagraphSectionThree/>
            <ButtonSectionThreeFirst>Explore Font Awesome Free</ButtonSectionThreeFirst>
        </div>
    );
}