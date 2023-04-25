function ParagraphSectionOne(){
    return(
    <div class="flex flex-col items-center w-full my-3.5">
        <h1 class="text-4xl font-bold">Take the hassle out of icons in your <span class="text-amber-500">website.</span></h1>
        <h2 class="text-md my-3.5"><b>Font Awesome</b> is the Internet's icon library and toolkit,
         used by millions of designers, developers, and content creators.</h2>
    </div>
    ) 
}

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

function VideoSectionOne(){
    return(
        <div>
            <video class="w-full" width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4"/>
  <source src="movie.ogg" type="video/ogg"/>
Your browser does not support the video tag.
            </video>
        </div>
    )
}


export function SectionA(){
    return(
        <div class="my-3.5">
            <ParagraphSectionOne/>    
            <div class="flex flex-col md:flex-row w-full justify-between my-3.5 md:gap-4">
                <ButtonSectionOneFirst>Start for Free</ButtonSectionOneFirst>
                <ButtonSectionOneSecond>Get More with Pro</ButtonSectionOneSecond>
            </div>
            <VideoSectionOne/>
        </div>
    );
}

