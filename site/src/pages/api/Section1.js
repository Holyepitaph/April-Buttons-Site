function ParagraphSectionOne(){
    return(
        <div class="flex flex-col items-center w-full">
        <h1 class="text-xl font-bold">Take the hassle out of icons in your website.</h1>
        <h2 class="text-md">Font Awesome is the Internet's icon library and toolkit,
         used by millions of designers, developers, and content creators.</h2>
    </div>
    ) 
}

function ButtonSectionOneFirst({children}){
    return(
        <div>
        <button class=" border-4 border-red-500 hover:border-red-950 rounded-xl 
        w-48 hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-red-700 ">{children}</button>
    </div>
    )
}

function ButtonSectionOneSecond({children}){
    return(
        <div>
        <button class=" border-4 border-red-500 hover:border-red-950 rounded-xl 
        w-48 hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
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
            <div class="flex flex-row w-full justify-between my-3.5">
                <ButtonSectionOneFirst>Start for Free</ButtonSectionOneFirst>
                <ButtonSectionOneSecond>Get More with Pro</ButtonSectionOneSecond>
            </div>
            <VideoSectionOne/>
        </div>
    );
}

