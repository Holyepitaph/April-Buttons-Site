function ImageSectionTen(){
    return(
        <div>
            <div class="w-full md:w-auto border-4 border-emerald-500 bg-emerald-100">
                <img src="/outdoor.jpg" height="500" width="500" alt="Picture of Something Cool"/>
            </div>
        </div>
    )
}

function ParagraphOneSectionTen(){
    return(
        <div class="text-sm">
            <h2 class="text-purple-800 font-bold my-3.5">ICON COMMISSIONS</h2>
            <h1 class="text-2xl font-bold my-3.5">Any Icon You Can Imagine.</h1>
            <p>Can't find the exact icon you need? Think of Font Awesome as your very own in-house
             icon magician. We'll design it for you — alakazam! — and add it to Font Awesome 6.</p>
        </div>
    )
}

function ButtonOneSectionTen({children}){
    return(
        <div class="w-full h-44 my-3.5 md:h-96">
          <button class="flex flex-col items-center justify-center border-4 border-red-500 hover:border-red-950 rounded-xl 
          w-full h-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
        </div>
    )
  }

  function ParagraphTwoSectionTen(){
    return(
        <div class="text-sm">
            <h2 class="my-3.5 font-bold">UPGRADE TO FONT AWESOME PRO</h2>
            <p>Font Awesome Pro gives you 26,107 icons in 68 categories across six styles + brands.
             Plus, Actual Human™ tech support, hosted Pro Kits, Pro npm, and more!</p>
        </div>
    )
}

function ButtonTwoSectionTen({children}){
    return(
        <div class="w-full h-12 my-3.5 ">
          <button class="font-bold text-sm my-3.5 border hover:border-slate-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#000000] active:shadow-[0_3px_#000000]
          active:translate-y-0.5 active:border-slate-400">{children}</button>
        </div>
    )
  }

export function SectionJ(){
    return(
        <div>
            <div class="md:grid md:grid-cols-2 md:gap-4">
                <ImageSectionTen/>
                <ParagraphOneSectionTen/>
            </div>
            <div class="md:grid md:grid-cols-4 md:gap-4">
                <ButtonOneSectionTen><p><b>1 Icon $300</b></p><p>Add that single icon you’ve always wanted in all of Font Awesome’s styles.</p></ButtonOneSectionTen>
                <ButtonOneSectionTen><b>6 Icons $1,500</b>Just say the magic word, and six icons of your choice will appear in all of our stylers.</ButtonOneSectionTen>
                <ButtonOneSectionTen><b>24 Icons $4,800</b>Your wish is our command -- add twenty-four icons of your choice in all of our styles.</ButtonOneSectionTen>
                <ButtonOneSectionTen><b>Your Logo $3,00</b>Make your brand’s existing logo known and accessible to millions of users by adding it to Font Awesome Free.</ButtonOneSectionTen>
            </div>
            <ParagraphTwoSectionTen/>
            <ButtonTwoSectionTen>Get Font Awesome Pro</ButtonTwoSectionTen>
        </div>
    );
}