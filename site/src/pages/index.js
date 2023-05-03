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
              <ButtonSectionOneFirst>Buy Now</ButtonSectionOneFirst>
              <ButtonSectionOneSecond>See In Stores</ButtonSectionOneSecond>
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
          <ButtonSectionTwoFirst>Introducing <b>Nebula Watch Pro!</b></ButtonSectionTwoFirst>
          <div className="grid grid-cols-2 place-content-evenly w-full ml-1 my-3.5 md:order-1 md:row-span-3">
              <ButtonSectionTwoSecond>Up to 5 Day Battery Life</ButtonSectionTwoSecond>
              <ButtonSectionTwoSecond>5ATM water resistance</ButtonSectionTwoSecond>
              <ButtonSectionTwoSecond>Snapdragon Wear 4100</ButtonSectionTwoSecond>
              <ButtonSectionTwoSecond>Available in <b>Black, Silver, Rose Gold</b></ButtonSectionTwoSecond>
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
          <ButtonSectionThreeFirst>Explore Your New Safe Haven</ButtonSectionThreeFirst>
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
          <ButtonSectionFive>View All Specifications</ButtonSectionFive>
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
                  <ButtonSecondSectionSix>Instant</ButtonSecondSectionSix>
                  <ButtonSecondSectionSix>Action/Adventure</ButtonSecondSectionSix>
                  <ButtonSecondSectionSix>Bridge</ButtonSecondSectionSix>
                  <ButtonSecondSectionSix>Full-frame</ButtonSecondSectionSix>
                  <ButtonSecondSectionSix>Point-and-shoot</ButtonSecondSectionSix>
                  <ButtonSecondSectionSix>All Categories</ButtonSecondSectionSix>
              </div>
              <div className="grid grid-cols-6 gap-4 my-3.5 md:grid-cols-5">
                  <ButtonThirdSectionSix><b>Solid</b>Great for Small sizes and bringing contrast to text.</ButtonThirdSectionSix>
                  <ButtonThirdSectionSix><b>ACTION SHOTS</b> A photograph of a person or animal in motion, such as sports, dance, or wildlife photography.</ButtonThirdSectionSix>
                  <ButtonThirdSectionSix><b>STILL LIFE</b> A photograph of inanimate objects arranged in an artistic composition.</ButtonThirdSectionSix>
                  <ButtonFourthSectionSix><b>BLACK & WHITE</b> A photograph without color, often used to create a timeless or dramatic effect.</ButtonFourthSectionSix>
                  <ButtonFourthSectionSix><b>WILDLIFE</b> A photograph of animals in their natural habitat, often featuring exotic or endangered species.</ButtonFourthSectionSix>
              </div>
              <div className="grid grid-cols-2 gap-4 my-3.5 md:grid-cols-4">
                  <ButtonFifthSectionSix><b>STREET PHOTOGRAPHY</b> A photograph taken in public places, often capturing candid moments and everyday life.</ButtonFifthSectionSix>
                  <ButtonFifthSectionSix><b>MACRO:</b> A close-up photograph of a small object or detail, often highlighting intricate textures and patterns.</ButtonFifthSectionSix>
                  <ButtonFifthSectionSix><b>NIGHT PHOTOGRAPHY:</b> A photograph taken in low-light conditions, often featuring cityscapes, stars, and other sources of artificial light.</ButtonFifthSectionSix>
                  <ButtonFifthSectionSix><b>ABSTRACT:</b> A photograph that emphasizes form, color, and texture over recognizable subjects.</ButtonFifthSectionSix>
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
          <ButtonTwoSectionSeven>Buy Now</ButtonTwoSectionSeven>
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
              <ButtonTwoSectionNine><b>Everything you need</b>Wi-Fi 6, Bluetooth 5.2, and NFC for fast and reliable connections.</ButtonTwoSectionNine>
              <ButtonTwoSectionNine><b>5G Connection</b>The perfect companion for streaming high-quality media, playing online games, or downloading large files.</ButtonTwoSectionNine>
              <ButtonTwoSectionNine><b>Fast Charging</b>USB Type-C port for fast charging and data transfer, as well as support for wireless charging.</ButtonTwoSectionNine>
              <ButtonTwoSectionNine><b>Seamless Integration</b>The Nebula Nexus offers seamless integration with various social media platforms, allowing users to easily share their photos and experiences with their friends and followers.</ButtonTwoSectionNine>
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
              <ButtonOneSectionTen><b>High-quality sound output</b> with deep bass and clear treble.
Noise-cancelling technology to block out unwanted background noise.</ButtonOneSectionTen>
              <ButtonOneSectionTen><b>Comfortable</b> over-ear design with soft padding for extended use.
Bluetooth 5.0 technology for seamless wireless connectivity to compatible devices.</ButtonOneSectionTen>
              <ButtonOneSectionTen><b>Touch-sensitive controls</b> for easy adjustment of volume, playback, and calls.
Built-in microphone for hands-free phone calls and voice commands.</ButtonOneSectionTen>
              <ButtonOneSectionTen><b>Long battery life</b> with up to 20 hours of continuous use on a single charge.
Fast charging capability with a 15-minute charge providing up to 2 hours of playback time.</ButtonOneSectionTen>
          </div>
          <ParagraphTwoSectionTen/>
          <ButtonTwoSectionTen>Get the Nebula Nexus X</ButtonTwoSectionTen>
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