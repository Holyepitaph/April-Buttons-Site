import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Header} from 'src/pages/api/HeaderFooter.js'
import {Footer} from 'src/pages/api/HeaderFooter.js'

import {ImageSectionThree, ImageSectionSeven, ImageSectionEight,
   ImageSectionNine, ImageSectionTen} from 'src/pages/api/Image.js'

import {ParagraphSectionOne, ParagraphSectionTwoFirst, ParagraphSectionTwoSecond, 
  ParagraphSectionThree, ParagraphSectionFour, ParagraphSectionFive, ParagraphSection6,
   ParagraphFirstSectionSeven, ParagraphSecondSectionSeven, ParagraphSectionEight,
    ParagraphSectionNine, ParagraphOneSectionTen, ParagraphTwoSectionTen} from 'src/pages/api/Paragraph.js'

import {ButtonSectionOneFirst, ButtonSectionOneSecond, 
  ButtonSectionTwoFirst, ButtonSectionTwoSecond, ButtonSectionThreeFirst,
   ButtonSectionFive, ButtonFirstSectionSix, ButtonSecondSectionSix, ButtonThirdSectionSix,
    ButtonFourthSectionSix, ButtonFifthSectionSix, ButtonOneSectionSeven,
     ButtonTwoSectionSeven, ButtonOneSectionNine, ButtonTwoSectionNine, ButtonOneSectionTen,
      ButtonTwoSectionTen} from 'src/pages/api/Button.js'

import {VideoSectionOne, Links, ListSectionFour, GridSectionFive,
  SheetOneSectionEight, SheetSecondSectionEight, SheetThreeSectionEight} from 'src/pages/api/Other.js'

const inter = Inter({ subsets: ['latin'] })

function SectionA(){
  return(
      <div className="my-3.5">
          <ParagraphSectionOne/>    
          <div className="flex flex-col md:flex-row w-full justify-between my-3.5 md:gap-4">
              <ButtonSectionOneFirst>Start for Free</ButtonSectionOneFirst>
              <ButtonSectionOneSecond>Get More with Pro</ButtonSectionOneSecond>
          </div>
          <VideoSectionOne/>
      </div>
  );
}

function SectionB(){
  return(
      <div className="my-3.5 md:grid md:grid-rows-4 md:grid-cols-2 md:grid-flow-row">
          <ParagraphSectionTwoFirst/>
          <Links/>
          <ButtonSectionTwoFirst>Introducing Font Awesome Sharp Light!</ButtonSectionTwoFirst>
          <div className="grid grid-cols-2 place-content-evenly w-full ml-1 my-3.5 md:order-1 md:row-span-3">
              <ButtonSectionTwoSecond>New Thin Style</ButtonSectionTwoSecond>
              <ButtonSectionTwoSecond>Beta Icon Wizard</ButtonSectionTwoSecond>
              <ButtonSectionTwoSecond>Humanitarian Icons</ButtonSectionTwoSecond>
              <ButtonSectionTwoSecond>New Animations</ButtonSectionTwoSecond>
          </div>
          <ParagraphSectionTwoSecond/>
      </div>
  );
}

function SectionC(){
  return(
      <div className="my-3.5 md:grid md:grid-rows-4 md:grid-cols-2 md:grid-flow-row md:gap-4">
          <ImageSectionThree/>
          <ParagraphSectionThree/>
          <ButtonSectionThreeFirst>Explore Font Awesome Free</ButtonSectionThreeFirst>
      </div>
  );
}

function SectionD(){
  return(
      <div className="my-3.5">
          <ListSectionFour/>
          <ParagraphSectionFour/>
      </div>
  );
}

function SectionE(){
  return(
      <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4">
          <ParagraphSectionFive/>
          <ButtonSectionFive>View All Styling Options</ButtonSectionFive>
          <GridSectionFive/>
      </div>
  );
}

function SectionF(){
  return(
      <div className="my-3.5">
          <ParagraphSection6/>
          <ButtonFirstSectionSix>Search Bar</ButtonFirstSectionSix>
              <div className="grid grid-cols-3 gap-4 my-3.5 md:grid-cols-6">
                  <ButtonSecondSectionSix>Emoji</ButtonSecondSectionSix>
                  <ButtonSecondSectionSix>Fruits + Vegetables</ButtonSecondSectionSix>
                  <ButtonSecondSectionSix>Alphabet</ButtonSecondSectionSix>
                  <ButtonSecondSectionSix>Maritime</ButtonSecondSectionSix>
                  <ButtonSecondSectionSix>Science Fiction</ButtonSecondSectionSix>
                  <ButtonSecondSectionSix>All Categories</ButtonSecondSectionSix>
              </div>
              <div className="grid grid-cols-6 gap-4 my-3.5 md:grid-cols-5">
                  <ButtonThirdSectionSix><b>Solid</b>Great for Small sizes and bringing contrast to text.</ButtonThirdSectionSix>
                  <ButtonThirdSectionSix><b>Regular</b>East, readable icons that blend in with regular text.</ButtonThirdSectionSix>
                  <ButtonThirdSectionSix><b>Light</b>When a lighter touch is needed.</ButtonThirdSectionSix>
                  <ButtonFourthSectionSix><b>THIN</b>Fits in with the latest super-light designs.</ButtonFourthSectionSix>
                  <ButtonFourthSectionSix><b>DUOTONE</b>Great for an illustrated feel & grabbing attention.</ButtonFourthSectionSix>
              </div>
              <div className="grid grid-cols-2 gap-4 my-3.5 md:grid-cols-4">
                  <ButtonFifthSectionSix><i><b>SHARP</b></i><b>SOLID</b>A dash of className for a bold, sharp look.</ButtonFifthSectionSix>
                  <ButtonFifthSectionSix><i><b>SHARP</b></i><b>REGULAR</b>Sharpen your designs with straightforward icons.</ButtonFifthSectionSix>
                  <ButtonFifthSectionSix><i><b>SHARP</b></i><b>LIGHT</b>Add a breezy, light touch of modern elegance.</ButtonFifthSectionSix>
                  <ButtonFifthSectionSix><b>BRANDS</b>The easiest way to add social logos to your site.</ButtonFifthSectionSix>
              </div>
      </div>
  );
}

function SectionG(){
  return(
      <div className="my-3.5 md:grid md:grid-cols-2 md:gap-4 md:grid-rows-1">
          <ImageSectionSeven/>
          <ParagraphFirstSectionSeven/>
          <ButtonOneSectionSeven>Form</ButtonOneSectionSeven>
          <ButtonTwoSectionSeven>Send Kit Code</ButtonTwoSectionSeven>
          <ParagraphSecondSectionSeven/>
      </div>
  );
}

function SectionH(){
  return(
      <div>
          <div className="md:grid md:grid-cols-2 md:gap-4">
            <ImageSectionEight/>
            <ParagraphSectionEight/>
          </div>
          <div className="md:grid md:grid-cols-3 md:gap-4">
            <SheetOneSectionEight/>
            <SheetSecondSectionEight/>
            <SheetThreeSectionEight/>
          </div>
      </div>
  );
}

function SectionI(){
  return(
      <div>
          <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4">
              <ImageSectionNine/>
              <ParagraphSectionNine/>
              <ButtonOneSectionNine>Subscribe to Pro</ButtonOneSectionNine>
          </div>
          <div className="md:grid md:grid-cols-4 md:gap-4">
              <ButtonTwoSectionNine><b>Get access to an ever-expanding collection of icons.</b>As your design needs ramp up, Font Awesome Pro is there to meet you. With Pro you get thousands of icons in multiple styles — and counting!</ButtonTwoSectionNine>
              <ButtonTwoSectionNine><b>Create space for collaboration.</b>As your team fills out, we can accommodate that growth with a Pro license seat for everyone at the table, no matter your company size.</ButtonTwoSectionNine>
              <ButtonTwoSectionNine><b>Add your own icons and logos.</b>Now you can upload your own logos and icons to a Kit and easily use our styling options right alongside Font Awesome icons.</ButtonTwoSectionNine>
              <ButtonTwoSectionNine><b>Customize Font Awesome.</b>Create a new Kit for each site you work on. We&apos;ll subset only the icons you need, and automate both updates and accessibility.</ButtonTwoSectionNine>
          </div>
      </div>
  );
}

function SectionJ(){
  return(
      <div>
          <div className="md:grid md:grid-cols-2 md:gap-4">
              <ImageSectionTen/>
              <ParagraphOneSectionTen/>
          </div>
          <div className="md:grid md:grid-cols-4 md:gap-4">
              <ButtonOneSectionTen><p><b>1 Icon $300</b></p><p>Add that single icon you’ve always wanted in all of Font Awesome’s styles.</p></ButtonOneSectionTen>
              <ButtonOneSectionTen><b>6 Icons $1,500</b>Just say the magic word, and six icons of your choice will appear in all of our stylers.</ButtonOneSectionTen>
              <ButtonOneSectionTen><b>24 Icons $4,800</b>Your wish is our command -- add twenty-four icons of your choice in all of our styles.</ButtonOneSectionTen>
              <ButtonOneSectionTen><b>Your Logo $3,00</b>Make your brand’s existing logo known and accessible to millions of users by adding it to Font Awesome Free.</ButtonOneSectionTen>
          </div>
          <ParagraphTwoSectionTen/>
          <ButtonTwoSectionTen>Get Font Awesome Pro</ButtonTwoSectionTen>
      </div>
  );
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Header/>
      <SectionA/>
      <SectionB/>
      <SectionC/>
      <SectionD/>
      <SectionE/>
      <SectionF/>
      <SectionG/>
      <SectionH/>
      <SectionI/>
      <SectionJ/>
      <Footer/>


    </main>
  )
}