export {ButtonSectionOneFirst, ButtonSectionOneSecond, 
    ButtonSectionTwoFirst, ButtonSectionTwoSecond, ButtonSectionThreeFirst,
     ButtonSectionFive, ButtonFirstSectionSix, ButtonSecondSectionSix, ButtonThirdSectionSix,
      ButtonFourthSectionSix, ButtonFifthSectionSix, ButtonOneSectionSeven,
       ButtonTwoSectionSeven, ButtonOneSectionNine, ButtonTwoSectionNine, ButtonOneSectionTen,
        ButtonTwoSectionTen};

function ButtonSectionOneFirst({children}){
    return(
        <div class="w-full h-11 my-2">
        <button class="text-sm border font-bold border-slate-500 hover:border-red-950 rounded-xl 
        w-full h-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-slate-700 ">{children}</button>
    </div>
    )
}

function ButtonSectionOneSecond({children}){
    return(
        <div class="w-full h-11 my-2">
        <button class="text-sm border font-bold bg-amber-400 border-slate-500 hover:border-amber-950 rounded-xl 
        w-full h-full hover:bg-amber-500 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-amber-500 active:border-amber-700">{children}</button>
    </div>
    )
}

function ButtonSectionTwoFirst({children}){
    return(
        <div class="md:order-1 md:row-span-1">
            <button class=" border-4 border-red-500 hover:border-red-950 rounded-xl 
            w-full h-48 hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
            active:translate-y-0.5 active:bg-slate-300 active:border-red-700 ">{children}</button>
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

function ButtonSectionThreeFirst({children}){
    return(
        <div class="text-sm font-bold h-11 md:order-2 md:row-span-1">
            <button class=" border bg-emerald-300 border-slate-600 hover:border-emerald-800 rounded-xl 
            w-full h-full hover:bg-emerald-500 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
            active:translate-y-0.5 active:bg-emerald-600 active:border-emerald-700">{children}</button>
        </div>
    )
}

function ButtonSectionFive({children}){
    return(
        <div class="md:order-3">
        <button class=" border bg-sky-400 border-slate-700 hover:border-sky-800 rounded-xl h-12 
        w-full hover:bg-sky-700 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-sky-300 active:border-sky-800 my-3.5">{children}</button>
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

function ButtonOneSectionSeven({children}){
    return(
        <div class="w-full h-11 my-3.5 md:order-2">
          <button class=" border border-slate-500 hover:border-red-950 rounded-xl 
          w-full h-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700 font-bold">{children}</button>
        </div>
    )
  }

function ButtonTwoSectionSeven({children}){
  return(
      <div class="w-full h-11 my-3.5 text-sm font-bold md:order-3">
        <button class=" border bg-amber-300 border-slate-500 hover:border-amber-800 rounded-xl 
        w-full h-full hover:bg-amber-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-amber-500 active:border-amber-600">{children}</button>
      </div>
  )
}

function ButtonOneSectionNine({children}){
    return(
        <div class="my-3.5 h-11 md:order-2 md:row-span-1">
          <button class="text-sm font-bold border bg-emerald-300 border-slate-500 hover:border-emerald-950 rounded-xl 
          w-full h-full hover:bg-emerald-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-emerald-600 active:border-emerald-700">{children}</button>
        </div>
    )
  }

function ButtonTwoSectionNine({children}){
  return(
      <div class="my-3.5 h-44  md:h-96">
        <button class="flex flex-col justify-center items-center border-4 border-red-500 hover:border-red-950 rounded-xl 
        w-full h-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
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

  

function ButtonTwoSectionTen({children}){
    return(
        <div class="w-full h-12 my-3.5 ">
          <button class="font-bold text-sm my-3.5 border hover:border-slate-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#000000] active:shadow-[0_3px_#000000]
          active:translate-y-0.5 active:border-slate-400">{children}</button>
        </div>
  )
}