function ImageSectionEight(){
    return(
        <div class="border-4 border-slate-400 w-full h-[500px] my-3.5">
            <img src="" height="" width="" alt="Pic thats supposed to have mouseOver"/>
        </div>
    )
}

function ParagraphSectionEight(){
    return(
        <div class="my-3.5 text-sm">
            <h2 class="text-blue-800 my-3.5 font-bold">THE RIGHT TOOL FOR THE JOB</h2>
            <h1 class="text-2xl font-bold my-3.5">No need to reinvent the wheel.</h1>
            <p>Whether you're working on a website, app, or project, we've got a set of tools
             that work how and where you do. So there's no need to hack your way through your next build.</p>
        </div>
    )
}

function SheetOneSectionEight(){
    return(
        <div class="text-sm">
            <img src="" height="100" width="100" alt="Icon" class="border-4 border-slate-200 my-3.5"/>
            <h2 class="font-bold my-3.5">Great for Developers</h2>
            <p>We've got frameworks and toolkits for the most popular plugins and packages that already
             work the way you expect.</p>
            <button class="font-bold text-sm my-3.5 border hover:border-sky-300 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(125,211,252)]
          active:translate-y-0.5 active:border-sky-300">JS Frameworks</button>
            <button class="font-bold text-sm my-3.5 border hover:border-sky-300 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(125,211,252)]
          active:translate-y-0.5 active:border-sky-300">Webfont & SVG Toolkits</button>
            <button class="font-bold text-sm my-3.5 border hover:border-sky-300 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(125,211,252)]
          active:translate-y-0.5 active:border-sky-300">Official APIs</button>
        </div>
    )
}

function SheetSecondSectionEight(){
    return(
        <div class="text-sm">
            <img src="" height="100" width="100" alt="Icon" class="border-4 border-slate-200 my-3.5"/>
            <h2 class="my-3.5 font-bold">Great for Designers</h2>
            <p>Use your own designs alongside thousands of matching Font Awesome icons in each of six unique styles.</p>
            <button class="font-bold text-sm my-3.5 border hover:border-fuchsia-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(232,121,249)]
          active:translate-y-0.5 active:border-fuchsia-400">Text-to-Icon Ligatures</button>
            <button class="font-bold text-sm my-3.5 border hover:border-fuchsia-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(232,121,249)]
          active:translate-y-0.5 active:border-fuchsia-400">Custom Icon Upload</button>
            <button class="font-bold text-sm my-3.5 border hover:border-fuchsia-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(232,121,249)]
          active:translate-y-0.5 active:border-fuchsia-400">Pixel-Perfect Icons</button>
        </div>
    )
}

function SheetThreeSectionEight(){
    return(
        <div class="text-sm">
            <img src="" height="100" width="100" alt="Icon" class="border-4 border-slate-200 my-3.5"/>
            <h2 class="my-3.5 font-bold">Great for Content Creators</h2>
            <p>With oodles of free icons — including brands + social icons — our syntax is easy to use
             in authoring tools like WordPress and more.</p>
            <button class="font-bold text-sm my-3.5 border hover:border-emerald-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(52,211,153)]
          active:translate-y-0.5 active:border-emerald-400">Thousands of Unique Icons</button>
            <button class="font-bold text-sm my-3.5 border hover:border-emerald-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(52,211,153)]
          active:translate-y-0.5 active:border-emerald-400">Brand + Social Icons</button>
            <button class="font-bold text-sm my-3.5 border hover:border-emerald-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(52,211,153)]
          active:translate-y-0.5 active:border-emerald-400">Wordpress Shortcodes</button>
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