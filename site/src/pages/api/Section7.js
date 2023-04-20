function ImageSectionSeven(){
    return(
        <div class="border-4 border-slate-400 w-full h-[500px] my-3.5">
            <img src="" height="" width="" alt="Pic thats supposed to have mouseOver"/>
        </div>
    )
}

function ParagraphFirstSectionSeven(){
    return(
        <div class="my-3.5">
            <h2 class="text-lg">CUSTOMIZE WITH A KIT</h2>
            <h1 class="text-lg font-bold">Have icons, will travel.</h1>
            <p>Pack up your very own custom version of Font Awesome, and get started easily with
             a Kit lickity-split. We'll bundle only the icons, tools, and settings you need, so you
              can travel light wherever you go.</p>
            <p>Enter your email to create your first kit!</p>
        </div>
    )
}

function ButtonOneSectionSeven({children}){
    return(
        <div class="w-full my-3.5">
          <button class=" border-4 border-red-500 hover:border-red-950 rounded-xl 
          w-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
        </div>
    )
  }

  function ButtonTwoSectionSeven({children}){
    return(
        <div class="w-full my-3.5">
          <button class=" border-4 bg-amber-200 border-amber-500 hover:border-amber-800 rounded-xl 
          w-full hover:bg-amber-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-amber-300 active:border-amber-600">{children}</button>
        </div>
    )
  }

  function ParagraphSecondSectionSeven(){
    return(
        <div class="my-3.5">
            <h1 class="text-xl font-bold my-3.5">The Latest and Greatest</h1>
            <p>Kits auto-update to the newest version of Font Awesome, so you can stop managing files and pushing code.</p>
            <h1 class="text-xl font-bold my-3.5">Auto-Accessibility & More</h1>
            <p>Automate your icons' accessibility, control load timing, ensure Font Awesome
             Version 4 compatibility, and more.</p>
            <h1 class="text-xl font-bold my-3.5">Super Simple Subsetting</h1>
            <p>Speed up your site with a super-lean, ultra-fast version of Font Awesome! Choose just the
             icons you need, and your Kit serves them up as a subset, making it faster than ever.</p>
            <h1 class="text-xl font-bold my-3.5">Powered by Cloudflare</h1>
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