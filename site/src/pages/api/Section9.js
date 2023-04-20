function ImageSectionNine(){
    return(
        <div>
            <div class="w-full border-4 border-emerald-500 bg-emerald-100">
                <img src="" height="500" width="500" alt="Picture of Something Cool"/>
            </div>
        </div>
    )
}

function ParagraphSectionNine(){
    return(
        <div>
            <h2 class="text-lg my-3.5">FUTUREPROOFED</h2>
            <h1 class="text-xl font-bold my-3.5">We grow with you.</h1>
            <p>Setting up your first project with Font Awesome is a breeze, and we keep pace as your
             needs change over time. Font Awesome works where, and how, you do. And when you're ready, Font
              Awesome Pro gives you more icons, styles, and developer and designer tools — which helps streamline
               your workflows and save time.</p>
        </div>
    )
}

function ButtonOneSectionNine({children}){
    return(
        <div class="my-3.5">
          <button class=" border-4 border-red-500 hover:border-red-950 rounded-xl 
          w-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
        </div>
    )
  }

  function ButtonTwoSectionNine({children}){
    return(
        <div class="my-3.5 h-44">
          <button class="flex flex-col justify-center items-center border-4 border-red-500 hover:border-red-950 rounded-xl 
          w-full h-full hover:bg-slate-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
          active:translate-y-0.5 active:bg-slate-300 active:border-red-700">{children}</button>
        </div>
    )
  }

export function SectionI(){
    return(
        <div>
            <ImageSectionNine/>
            <ParagraphSectionNine/>
            <ButtonOneSectionNine>Subscribe to Pro</ButtonOneSectionNine>
            <ButtonTwoSectionNine><b>Get access to an ever-expanding collection of icons.</b>As your design needs ramp up, Font Awesome Pro is there to meet you. With Pro you get thousands of icons in multiple styles — and counting!</ButtonTwoSectionNine>
            <ButtonTwoSectionNine><b>Create space for collaboration.</b>As your team fills out, we can accommodate that growth with a Pro license seat for everyone at the table, no matter your company size.</ButtonTwoSectionNine>
            <ButtonTwoSectionNine><b>Add your own icons and logos.</b>Now you can upload your own logos and icons to a Kit and easily use our styling options right alongside Font Awesome icons.</ButtonTwoSectionNine>
            <ButtonTwoSectionNine><b>Customize Font Awesome.</b>Create a new Kit for each site you work on. We'll subset only the icons you need, and automate both updates and accessibility.</ButtonTwoSectionNine>
        </div>
    );
}