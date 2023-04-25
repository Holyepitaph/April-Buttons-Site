function ImageSectionNine(){
    return(
            <div class="w-full border-4 border-emerald-500 bg-emerald-100 md:order-1 md:w-auto md:row-span-3">
                <img src="/outdoor.jpg" height="500" width="500" alt="Picture of Something Cool"/>
            </div>
    )
}

function ParagraphSectionNine(){
    return(
        <div class="text-sm md:order-0 md:row-span-1">
            <h2 class="text-emerald-800 font-bold my-3.5">FUTUREPROOFED</h2>
            <h1 class="text-2xl font-bold my-3.5">We grow with you.</h1>
            <p>Setting up your first project with Font Awesome is a breeze, and we keep pace as your
             needs change over time. Font Awesome works where, and how, you do. And when you're ready, Font
              Awesome Pro gives you more icons, styles, and developer and designer tools — which helps streamline
               your workflows and save time.</p>
        </div>
    )
}

function ButtonOneSectionNine({children}){
    return(
        <div class="my-3.5 h-11 md:order-2 md:row-span-1">
          <button class="text-sm font-bold border bg-emerald-300 border-slate-500 hover:border-emerald-950 rounded-xl 
          w-full h-full hover:bg-emerald-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-emerald-600 active:border-emerald-700">{children}</button>
        </div>
    )
  }

  function ButtonTwoSectionNine({children}){
    return(
        <div class="my-3.5 h-44  md:h-96">
          <button class="flex flex-col justify-center items-center border-4 border-red-500 hover:border-red-950 rounded-xl 
          w-full h-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
        </div>
    )
  }

export function SectionI(){
    return(
        <div>
            <div class="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4">
                <ImageSectionNine/>
                <ParagraphSectionNine/>
                <ButtonOneSectionNine>Subscribe to Pro</ButtonOneSectionNine>
            </div>
            <div class="md:grid md:grid-cols-4 md:gap-4">
                <ButtonTwoSectionNine><b>Get access to an ever-expanding collection of icons.</b>As your design needs ramp up, Font Awesome Pro is there to meet you. With Pro you get thousands of icons in multiple styles — and counting!</ButtonTwoSectionNine>
                <ButtonTwoSectionNine><b>Create space for collaboration.</b>As your team fills out, we can accommodate that growth with a Pro license seat for everyone at the table, no matter your company size.</ButtonTwoSectionNine>
                <ButtonTwoSectionNine><b>Add your own icons and logos.</b>Now you can upload your own logos and icons to a Kit and easily use our styling options right alongside Font Awesome icons.</ButtonTwoSectionNine>
                <ButtonTwoSectionNine><b>Customize Font Awesome.</b>Create a new Kit for each site you work on. We'll subset only the icons you need, and automate both updates and accessibility.</ButtonTwoSectionNine>
            </div>
        </div>
    );
}