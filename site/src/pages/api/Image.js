import Image from 'next/image'
export {ImageSectionThree, ImageSectionSeven, ImageSectionEight, ImageSectionNine, ImageSectionTen};


function ImageSectionThree(){
    return(
        <div className=" md:order-1 md:row-span-3">
            <div className="border-4 border-emerald-500 bg-emerald-100">
                <Image
              src="/outdoor.jpg"
              alt="Picture of Something Cool"
              width={200}
              height={200}
              priority
            />
            </div>
        </div>
    )

}

function ImageSectionSeven(){
    return(
        <div className="border-4 border-slate-400 w-full  my-3.5 md:order-1 md:row-span-3">
            <Image
              src="/outdoor.jpg"
              alt="Pic thats supposed to have mouseOver"
              width={100}
              height={100}
              priority
            />
        </div>
    )
}

function ImageSectionEight(){
    return(
        <div className="border-4 border-slate-400 w-full md:w-auto my-3.5">
            <Image
              src="/outdoor.jpg"
              alt="Pic thats supposed to have mouseOver"
              width={100}
              height={100}
              priority
            />
        </div>
    )
}

function ImageSectionNine(){
    return(
            <div className="w-full border-4 border-emerald-500 bg-emerald-100 md:order-1 md:w-auto md:row-span-3">
                <Image
              src="/outdoor.jpg"
              alt="Picture of Something Cool"
              width={500}
              height={500}
              priority
            />
            </div>
    )
}

function ImageSectionTen(){
    return(
        <div>
            <div className="w-full md:w-auto border-4 border-emerald-500 bg-emerald-100">
                <Image
              src="/outdoor.jpg"
              alt="Picture of Something Cool"
              width={500}
              height={500}
              priority
            />
            </div>
        </div>
    )
}