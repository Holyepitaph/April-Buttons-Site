function ImageSectionEight(){
    return(
        <div class="border-4 border-slate-400 w-full h-[500px] my-3.5">
            <img src="" height="" width="" alt="Pic thats supposed to have mouseOver"/>
        </div>
    )
}

function ParagraphSectionEight(){
    return(
        <div class="my-3.5">
            <h2 class="text-lg my-3.5">THE RIGHT TOOL FOR THE JOB</h2>
            <h1 class="text-xl font-bold my-3.5">No need to reinvent the wheel.</h1>
            <p>Whether you're working on a website, app, or project, we've got a set of tools
             that work how and where you do. So there's no need to hack your way through your next build.</p>
        </div>
    )
}

function SheetOneSectionEight(){
    return(
        <div>
            <img src="" height="100" width="100" alt="Icon" class="border-4 border-slate-200 my-3.5"/>
            <h2 class="text-lg font-bold my-3.5">Great for Developers</h2>
            <p>We've got frameworks and toolkits for the most popular plugins and packages that already
             work the way you expect.</p>
            <button class="my-3.5 border-4 border-red-500 hover:border-red-950 rounded-xl 
          w-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700">JS Frameworks</button>
            <button class="my-3.5 border-4 border-red-500 hover:border-red-950 rounded-xl 
          w-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700">Webfont & SVG Toolkits</button>
            <button class="my-3.5 border-4 border-red-500 hover:border-red-950 rounded-xl 
          w-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700">Official APIs</button>
        </div>
    )
}

function SheetSecondSectionEight(){
    return(
        <div>
            <img src="" height="100" width="100" alt="Icon" class="border-4 border-slate-200 my-3.5"/>
            <h2 class="my-3.5 text-lg font-bold">Great for Designers</h2>
            <p>Use your own designs alongside thousands of matching Font Awesome icons in each of six unique styles.</p>
            <button class="my-3.5 border-4 border-red-500 hover:border-red-950 rounded-xl 
          w-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700">Text-to-Icon Ligatures</button>
            <button class="my-3.5 border-4 border-red-500 hover:border-red-950 rounded-xl 
          w-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700">Custom Icon Upload</button>
            <button class="my-3.5 border-4 border-red-500 hover:border-red-950 rounded-xl 
          w-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700">Pixel-Perfect Icons</button>
        </div>
    )
}

function SheetThreeSectionEight(){
    return(
        <div>
            <img src="" height="100" width="100" alt="Icon" class="border-4 border-slate-200 my-3.5"/>
            <h2 class="my-3.5 text-lg font-bold">Great for Content Creators</h2>
            <p>With oodles of free icons — including brands + social icons — our syntax is easy to use
             in authoring tools like WordPress and more.</p>
            <button class="my-3.5 border-4 border-red-500 hover:border-red-950 rounded-xl 
          w-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700">Thousands of Unique Icons</button>
            <button class="my-3.5 border-4 border-red-500 hover:border-red-950 rounded-xl 
          w-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700">Brand + Social Icons</button>
            <button class="my-3.5 border-4 border-red-500 hover:border-red-950 rounded-xl 
          w-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700">Wordpress Shortcodes</button>
        </div>
    )
}

export function SectionH(){
    return(
        <div>
            <ImageSectionEight/>
            <ParagraphSectionEight/>
            <SheetOneSectionEight/>
            <SheetSecondSectionEight/>
            <SheetThreeSectionEight/>
        </div>
    );
}