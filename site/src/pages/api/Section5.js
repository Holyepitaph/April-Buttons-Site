import TabsSectionFive from 'src/pages/api/Tab.js'

function ParagraphSectionFive(){
    return(
        <div class="my-3.5 ">
            <h2 class="my-3.5 text-lg">STYLING TOOLS</h2>
            <h1 class="my-3.5 text-lg font-bold">Style your icons to your fa-heart's content.</h1>
            <p class="my-3.5">You know and WE know styling icons on the web can be a bit of a chore.
             That's why we fine-tuned our styling tools like a Swiss watch to make icons more
              malleable right out of the box. Easily size, place, style, and even animate any icon
               with a short line of code to create the perfect effect. Bippity-boppity-ICON!</p>
        </div>
    )
}

function ButtonSectionFive({children}){
    return(
        <div>
        <button class=" border-4 bg-teal-200 border-teal-500 hover:border-teal-800 rounded-xl h-12 
        w-full hover:bg-teal-400 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-teal-300 active:border-teal-700 my-3.5">{children}</button>
      </div>
    )
}

function GridSectionFive(){
    return(
        <div class="grid grid-cols-2 place-items-center w-full ml-1 my-3.5">
            <div class="my-1">Thousands of Icons</div>
            <div class="my-1">Built-in Sizing</div>
            <div class="my-1">8 Styles</div>
            <div class="my-1">Animations</div>
            <div class="my-1">Quick Color</div>
            <div class="my-1">Rotate + Flip</div>
            <div class="my-1">Power Transforms</div>
            <div class="my-1">Easy Lists</div>
        </div>
    )
}


export function SectionE(){
    return(
        <div>
            <ParagraphSectionFive/>
            <ButtonSectionFive>View All Styling Options</ButtonSectionFive>
            <GridSectionFive/>
            <TabsSectionFive/>
        </div>
    );
}