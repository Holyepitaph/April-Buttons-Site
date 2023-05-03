export {ParagraphSectionOne, ParagraphSectionTwoFirst, ParagraphSectionTwoSecond, 
    ParagraphSectionThree, ParagraphSectionFour, ParagraphSectionFive, ParagraphSection6,
     ParagraphFirstSectionSeven, ParagraphSecondSectionSeven, ParagraphSectionEight,
      ParagraphSectionNine, ParagraphOneSectionTen, ParagraphTwoSectionTen};

function ParagraphSectionOne(){
    return(
    <div className="flex flex-col items-center w-full my-3.5">
        <h1 className="text-4xl font-bold">Introducing the <span className="text-amber-500">Nebula Nexus X</span></h1>
        <h2 className="text-md my-3.5">The sleekest edition to the <b>Nebula Mobile</b> franchise.</h2>
    </div>
    ) 
}

function ParagraphSectionTwoFirst(){
    return(
        <div className="flex flex-col items-start flex-wrap text-sm md:order-0 md:row-span-3">
            <h1 className="font-bold text-blue-700 my-3.5">ACCESSORIES</h1>
            <h2 className="text-2xl font-bold my-3.5">Discover the Nebula Watch Pro</h2>
            <h1 className="font-bold my-3.5">NEW 1.5-inch AMOLED display with a resolution of 360 x 360 pixels</h1>
            <h2 className="my-1">Nebula&apos;s newest smart watch is the perfect accessory for anyone who wants
             to stay connected and organized on-the-go.</h2>
            <h1 className="font-bold my-3.5">BETA Nebula Smart Fitness</h1>
            <h2 className="my-1"> Advanced sensors and health monitoring features, this smart watch
             can help you stay on top of your physical well-being and achieve your health goals.</h2>
            <h1 className="font-bold my-3.5">More Plugins + Packages</h1>
            <h2 className="my-1">Whether you&apos;re tracking your fitness goals, receiving important
             notifications, or controlling your smart home devices, this watch has everything you need
              to stay on top of your game.</h2>
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
        <div className="my-3.5 text-sm md:order-0 md:row-span-2">
            <h2 className="text-emerald-500 font-bold">SECURITY</h2>
            <h1 className="text-2xl font-bold my-3.5">Now including Nebula&apos;s SafeGuard Pro</h1>
            <p>SafeGuard Pro is an all-in-one security app designed to keep you and your data safe.
             With powerful features like real-time malware scanning, encryption, and password management,
              you can rest assured that your digital life is secure. </p>
        </div>
    )
}

function ParagraphSectionFour(){
    return(
        <p className="flex justify-center text-sm underline font-bold">SafeGuard Pro now available on all Android Devices.</p>
    )
  }

function ParagraphSectionFive(){
    return(
        <div className="my-3.5 text-sm md:order-1">
            <h2 className="my-3.5 text-blue-800 font-bold">SPEED</h2>
            <h1 className="my-3.5 text-2xl font-bold">The rush you want when you want it.</h1>
            <p className="my-3.5">The Nebula Nexus X boasts lightning-fast performance thanks to its powerful
             16-core processor and ample RAM. Users can switch between apps seamlessly and enjoy
              smooth multitasking without any lag. Additionally, the device&apos;s high-speed data connectivity
               ensures speedy downloads and streaming, making it an ideal choice for anyone who values speed
                and efficiency in their mobile devices. Whether you&apos;re browsing the web, streaming content, or
                 running resource-intensive apps, the Nebula Nexus X delivers a speedy and responsive experience.</p>
        </div>
    )
}

function ParagraphSection6(){
    return(
        <div className="text-sm">
            <h2 className="text-purple-700 font-bold">CAMERA</h2>
            <h1 className="text-2xl font-bold my-3.5">These ARE the photos you&apos;re looking for.</h1>
            <p className="mb-3.5">The Nebula Nexus X boasts a high-quality camera that captures stunning
             photos with exceptional clarity and vivid colors.</p>
        </div>
    )
}

function ParagraphFirstSectionSeven(){
    return(
        <div className="my-3.5 text-sm md:order-0">
            <h2 className="text-amber-500 font-bold">SOFTWARE</h2>
            <h1 className="text-2xl font-bold my-3.5"><b>NebulaCapture</b> the newest update to the Android Family</h1>
            <p>The Nebula Nexus X boasts the latest and greatest software, designed to provide a smooth
             and intuitive user experience. The phone runs on the latest version of Nebula&apos;s custom operating
              system, optimized for performance and efficiency. The user interface is clean and user-friendly,
               with easy access to all the phone&apos;s features and settings. .</p>
            <p className="font-bold">Enter your email to create your first kit!</p>
        </div>
    )
}

function ParagraphSecondSectionSeven(){
    return(
        <div className="my-3.5 text-sm md:order-4 md:col-span-2 md:grid md:grid-cols-2 md:gap-4">
            <div>
                <h1 className="font-bold my-3.5">Starting Off Strong</h1>
                <p>The phone comes pre-loaded with a suite of apps, including social media, messaging, and
                 productivity tools. </p>
            </div>
            <div>
                <h1 className="font-bold my-3.5">The Perfect Picture Everytime</h1>
                <p>The camera app is especially noteworthy, offering a wide range of features and settings
                 to help users capture the perfect shot.</p>
            </div>
            <div>
                <h1 className="font-bold my-3.5">Secure</h1>
                <p>The software is regularly updated with security patches and bug fixes, ensuring that the
                 phone remains secure and reliable over time. </p>
            </div>
            <div>
                <h1 className="font-bold my-3.5">Always on time</h1>
                <p>Overall, the Nebula Nexus X&apos;s software is a key selling point, providing a powerful and
                 easy-to-use platform for all your mobile needs.</p>
            </div>
        </div>
    )
}

function ParagraphSectionEight(){
    return(
        <div className="my-3.5 text-sm">
            <h2 className="text-blue-800 my-3.5 font-bold">DISPLAY</h2>
            <h1 className="text-2xl font-bold my-3.5">6.7-inch holographic display with 4K resolution and HDR support</h1>
            <p>The Nebula Nexus X features a stunning display that is sure to impress even
             the most discerning users. With its high resolution and vibrant colors, every image
              and video comes to life on the screen.</p>
        </div>
    )
}

function ParagraphSectionNine(){
    return(
        <div className="text-sm md:order-0 md:row-span-1">
            <h2 className="text-emerald-800 font-bold my-3.5">CONNECTIVITY</h2>
            <h1 className="text-2xl font-bold my-3.5">Staying Up to Date everywhere</h1>
            <p>The Nebula Nexus X is designed to provide seamless connectivity with other devices
             and networks. It comes equipped with the latest wireless technologies such as Wi-Fi 6,
              Bluetooth 5.2, and NFC for fast and reliable connections. Additionally, the Nexus X supports
               5G networks for lightning-fast download and upload speeds, making it the perfect companion for
                streaming high-quality media, playing online games, or downloading large files. It also
                 features a USB Type-C port for fast charging and data transfer, as well as support for
                  wireless charging. </p>
        </div>
    )
}

function ParagraphOneSectionTen(){
    return(
        <div className="text-sm">
            <h2 className="text-purple-800 font-bold my-3.5">AUDIO</h2>
            <h1 className="text-2xl font-bold my-3.5">Aurora Soundbloom Pro.</h1>
            <p>The Apollo Bluetooth Headphones seamlessly integrate with the Nebula Nexus X,
             providing a wireless audio experience that is unrivaled in quality and convenience.
              With its advanced Bluetooth technology, these headphones deliver crystal-clear sound,
               and the ergonomic design ensures a comfortable fit for extended listening sessions.
                Additionally, the Apollo headphones are equipped with touch controls, allowing users to
                 easily control music playback, adjust volume, and even answer calls directly from the headphones.
                  Whether you&apos;re on a jog, in the office, or at home, the Apollo headphones provide the ultimate
                   audio experience when paired with the Nebula Nexus X.</p>
        </div>
    )
}

function ParagraphTwoSectionTen(){
    return(
        <div className="text-sm">
            <h2 className="my-3.5 font-bold">BATTERY</h2>
            <p>For up to 5 days of charge the Nexus has a 5,000mAh battery with fast charging and wireless charging support.
             It also features a USB Type-C port for fast charging and data transfer.</p>
        </div>
    )
}