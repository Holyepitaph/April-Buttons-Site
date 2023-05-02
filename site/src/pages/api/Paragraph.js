export {ParagraphSectionOne, ParagraphSectionTwoFirst, ParagraphSectionTwoSecond, 
    ParagraphSectionThree, ParagraphSectionFour, ParagraphSectionFive, ParagraphSection6,
     ParagraphFirstSectionSeven, ParagraphSecondSectionSeven, ParagraphSectionEight,
      ParagraphSectionNine, ParagraphOneSectionTen, ParagraphTwoSectionTen};

function ParagraphSectionOne(){
    return(
    <div class="flex flex-col items-center w-full my-3.5">
        <h1 class="text-4xl font-bold">Take the hassle out of icons in your <span class="text-amber-500">website.</span></h1>
        <h2 class="text-md my-3.5"><b>Font Awesome</b> is the Internet&apos;s icon library and toolkit,
         used by millions of designers, developers, and content creators.</h2>
    </div>
    ) 
}

function ParagraphSectionTwoFirst(){
    return(
        <div class="flex flex-col items-start flex-wrap text-sm md:order-0 md:row-span-3">
            <h1 class="font-bold text-blue-700 my-3.5">LATEST UPDATES</h1>
            <h2 class="text-2xl font-bold my-3.5">Discover what&apos;s new in Font Awesome.</h2>
            <h1 class="font-bold my-3.5">NEW Introducing Font Awesome Sharp Light!</h1>
            <h2 class="my-1">Font Awesome Sharp Light has arrived! It&apos;s perfect for when you need to add a breezy,
             light touch of modern elegance. Read the announcement and see what&apos;s new in the 6.4.0 release.</h2>
            <h1 class="font-bold my-3.5">BETA Explore the Icon Wizard!</h1>
            <h2 class="my-1">With our new Icon Wizard, you can magically add a modifier – like circle-plus, slash,
             or even poop – to almost any Font Awesome icon. Available now to Font Awesome Pro subscribers.</h2>
            <h1 class="font-bold my-3.5">More Plugins + Packages</h1>
            <h2 class="my-1">Font Awesome 6 makes it even easier to use icons where you want to.
             More plugins and packages to match your stack. Less time wrestling browser rendering.</h2>
        </div>
    )
}

function ParagraphSectionTwoSecond(){
    return(
        <div>

        </div>
    )
}

function ParagraphSectionThree(){
    return(
        <div class="my-3.5 text-sm md:order-0 md:row-span-2">
            <h2 class="text-emerald-500 font-bold">PROUDLY OPEN SOURCE</h2>
            <h1 class="text-2xl font-bold my-3.5">Everyone gets more awesome.</h1>
            <p>We know the pain of wrangling icons on the internet.
             That&apos;s why in 2012, we created the first version of our open-source icons and toolkit.
              And with the help of our subscription plan Font Awesome Pro, we&apos;ve built a lean icon-obsessed
               team who keep cranking out more icons, more styles, and more services for everyone.</p>
        </div>
    )
}

function ParagraphSectionFour(){
    return(
        <p class="flex justify-center text-sm underline font-bold">Font Awesome is one of the top open source projects on GitHub</p>
    )
  }

function ParagraphSectionFive(){
    return(
        <div class="my-3.5 text-sm md:order-1">
            <h2 class="my-3.5 text-blue-800 font-bold">STYLING TOOLS</h2>
            <h1 class="my-3.5 text-2xl font-bold">Style your icons to your fa-heart&apos;s content.</h1>
            <p class="my-3.5">You know and WE know styling icons on the web can be a bit of a chore.
             That&apos;s why we fine-tuned our styling tools like a Swiss watch to make icons more
              malleable right out of the box. Easily size, place, style, and even animate any icon
               with a short line of code to create the perfect effect. Bippity-boppity-ICON!</p>
        </div>
    )
}

function ParagraphSection6(){
    return(
        <div class="text-sm">
            <h2 class="text-purple-700 font-bold">ICON DISCOVERY</h2>
            <h1 class="text-2xl font-bold my-3.5">These ARE the icons you&apos;re looking for.</h1>
            <p class="mb-3.5">Have you ever squandered hours scanning the dank, skeezy corners of the internet
             scrounging up the icons you need? Us too. That&apos;s why we re-engineered our icon search
              from the ground up with ease of icon findability in mind, so you can match your brand with
               the perfect look and feel.</p>
        </div>
    )
}

function ParagraphFirstSectionSeven(){
    return(
        <div class="my-3.5 text-sm md:order-0">
            <h2 class="text-amber-500 font-bold">CUSTOMIZE WITH A KIT</h2>
            <h1 class="text-2xl font-bold my-3.5">Have icons, will travel.</h1>
            <p>Pack up your very own custom version of Font Awesome, and get started easily with
             a Kit lickity-split. We&apos;ll bundle only the icons, tools, and settings you need, so you
              can travel light wherever you go.</p>
            <p class="font-bold">Enter your email to create your first kit!</p>
        </div>
    )
}

function ParagraphSecondSectionSeven(){
    return(
        <div class="my-3.5 text-sm md:order-4 md:col-span-2 md:grid md:grid-cols-2 md:gap-4">
            <div>
                <h1 class="font-bold my-3.5">The Latest and Greatest</h1>
                <p>Kits auto-update to the newest version of Font Awesome, so you can stop managing files and pushing code.</p>
            </div>
            <div>
                <h1 class="font-bold my-3.5">Auto-Accessibility & More</h1>
                <p>Automate your icons&apos; accessibility, control load timing, ensure Font Awesome
                 Version 4 compatibility, and more.</p>
            </div>
            <div>
                <h1 class="font-bold my-3.5">Super Simple Subsetting</h1>
                <p>Speed up your site with a super-lean, ultra-fast version of Font Awesome! Choose just the
                 icons you need, and your Kit serves them up as a subset, making it faster than ever.</p>
            </div>
            <div>
                <h1 class="font-bold my-3.5">Powered by Cloudflare</h1>
                <p>Font Awesome Kits are served using Cloudflare, so you know they’re secure, private, fast, and reliable.</p>
            </div>
        </div>
    )
}

function ParagraphSectionEight(){
    return(
        <div class="my-3.5 text-sm">
            <h2 class="text-blue-800 my-3.5 font-bold">THE RIGHT TOOL FOR THE JOB</h2>
            <h1 class="text-2xl font-bold my-3.5">No need to reinvent the wheel.</h1>
            <p>Whether you&apos;re working on a website, app, or project, we&apos;ve got a set of tools
             that work how and where you do. So there&apos;s no need to hack your way through your next build.</p>
        </div>
    )
}

function ParagraphSectionNine(){
    return(
        <div class="text-sm md:order-0 md:row-span-1">
            <h2 class="text-emerald-800 font-bold my-3.5">FUTUREPROOFED</h2>
            <h1 class="text-2xl font-bold my-3.5">We grow with you.</h1>
            <p>Setting up your first project with Font Awesome is a breeze, and we keep pace as your
             needs change over time. Font Awesome works where, and how, you do. And when you&apos;re ready, Font
              Awesome Pro gives you more icons, styles, and developer and designer tools — which helps streamline
               your workflows and save time.</p>
        </div>
    )
}

function ParagraphOneSectionTen(){
    return(
        <div class="text-sm">
            <h2 class="text-purple-800 font-bold my-3.5">ICON COMMISSIONS</h2>
            <h1 class="text-2xl font-bold my-3.5">Any Icon You Can Imagine.</h1>
            <p>Can&apos;t find the exact icon you need? Think of Font Awesome as your very own in-house
             icon magician. We&apos;ll design it for you — alakazam! — and add it to Font Awesome 6.</p>
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