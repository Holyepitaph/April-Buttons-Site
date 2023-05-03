import Image from 'next/image'
export {ImageSectionThree, ImageSectionSeven, ImageSectionEight, ImageSectionNine, ImageSectionTen};


function ImageSectionThree(){
    return(
        <div className=" md:order-1 md:row-span-3">
            <div className="border-4 border-emerald-500 bg-emerald-100">
                <Image
              src="/tech3.png"
              alt="Picture of Something Cool"
              width={200}
              height={200}
              priority
              className="h-full w-full"
            />
            </div>
        </div>
    )

}

function ImageSectionSeven(){
    return(
        <div className="border-4 border-slate-400 w-full  my-3.5 md:order-1 md:row-span-3">
            <Image
              src="/tech2.webp"
              alt="Pic thats supposed to have mouseOver"
              width={100}
              height={100}
              priority
              className="h-full w-full"
            />
        </div>
    )
}

function ImageSectionEight(){
    return(
        <div className="border-4 border-slate-400 w-full md:w-auto my-3.5">
            <Image
              src="/screen1.jpg"
              alt="Pic thats supposed to have mouseOver"
              width={100}
              height={100}
              priority
              className="h-full w-full"
            />
        </div>
    )
}

function ImageSectionNine(){
    return(
            <div className="w-full border-4 border-emerald-500 bg-emerald-100 md:order-1 md:w-auto md:row-span-3">
                <Image
              src="/social.jpg"
              alt="Picture of Something Cool"
              width={500}
              height={500}
              priority
              className="h-full w-full"
            />
            </div>
    )
}

function ImageSectionTen(){
    return(
        <div>
            <div className="w-full md:w-auto border-4 border-emerald-500 bg-emerald-100">
                <Image
              src="/headphones.webp"
              alt="Picture of Something Cool"
              width={500}
              height={500}
              priority
              className="h-full w-full"
            />
            </div>
        </div>
    )
}