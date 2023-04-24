function ImageSectionSeven(){
    return(
        <div class="border-4 border-slate-400 w-full h-[500px] my-3.5">
            <img src="" height="" width="" alt="Pic thats supposed to have mouseOver"/>
        </div>
    )
}

function ParagraphFirstSectionSeven(){
    return(
        <div class="my-3.5 text-sm">
            <h2 class="text-amber-500 font-bold">CUSTOMIZE WITH A KIT</h2>
            <h1 class="text-2xl font-bold my-3.5">Have icons, will travel.</h1>
            <p>Pack up your very own custom version of Font Awesome, and get started easily with
             a Kit lickity-split. We'll bundle only the icons, tools, and settings you need, so you
              can travel light wherever you go.</p>
            <p class="font-bold">Enter your email to create your first kit!</p>
        </div>
    )
}

function ButtonOneSectionSeven({children}){
    return(
        <div class="w-full h-11 my-3.5">
          <button class=" border border-slate-500 hover:border-red-950 rounded-xl 
          w-full h-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
        </div>
    )
  }

  function ButtonTwoSectionSeven({children}){
    return(
        <div class="w-full h-11 my-3.5 text-sm font-bold">
          <button class=" border bg-amber-300 border-slate-500 hover:border-amber-800 rounded-xl 
          w-full h-full hover:bg-amber-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-amber-500 active:border-amber-600">{children}</button>
        </div>
    )
  }

  function ParagraphSecondSectionSeven(){
    return(
        <div class="my-3.5 text-sm">
            <h1 class="font-bold my-3.5">The Latest and Greatest</h1>
            <p>Kits auto-update to the newest version of Font Awesome, so you can stop managing files and pushing code.</p>
            <h1 class="font-bold my-3.5">Auto-Accessibility & More</h1>
            <p>Automate your icons' accessibility, control load timing, ensure Font Awesome
             Version 4 compatibility, and more.</p>
            <h1 class="font-bold my-3.5">Super Simple Subsetting</h1>
            <p>Speed up your site with a super-lean, ultra-fast version of Font Awesome! Choose just the
             icons you need, and your Kit serves them up as a subset, making it faster than ever.</p>
            <h1 class="font-bold my-3.5">Powered by Cloudflare</h1>
            <p>Font Awesome Kits are served using Cloudflare, so you know they’re secure, private, fast, and reliable.</p>
        </div>
    )
}

export function SectionG(){
    return(
        <div class="my-3.5">
            <ImageSectionSeven/>
            <ParagraphFirstSectionSeven/>
            <ButtonOneSectionSeven>Form</ButtonOneSectionSeven>
            <ButtonTwoSectionSeven>Send Kit Code</ButtonTwoSectionSeven>
            <ParagraphSecondSectionSeven/>
        </div>
    );
}