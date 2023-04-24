function ListSectionFour() {
    const cards = [{
        id: 0,
        title: 'Always Free',
        para: "From the beginning, Font Awesome has been free and open source. And since we're creator owned and operated, we get to make sure Font Awesome Free stays that way."
      }, {
        id: 1, 
        title: 'No Shenanigans',
        para: "We have more icons, services, and support in Pro. If you want them, you subscribe. No shenanigans. We won't sell your data, because we don't want to live in that world, and we don't want to run that company."
      }, {
        id: 2,
        title: 'Support Open Source',
        para: "Give back to the open-source community by subscribing to Font Awesome Pro. In fact, Pro subscribers helped grow Font Awesome Free icons by over 250% since version 4."
      }];
    const listItems = cards.map(card =>
      <li key={card.id} class=" h-52 flex flex-col rounded-xl items-center w-full justify-between bg-slate-300 border-8 border-slate-500 my-3.5">
        <img
          src={""}
          alt={" "}
        />
        <p class="flex flex-col text-sm items-center w-full justify-between">
          <b>{card.title}</b>
            {' ' + card.para + ' '}
        </p>
      </li>
    );
    return <ul>{listItems}</ul>;
  }

  function ParagraphSectionFour(){
    return(
        <p class="flex justify-center text-sm underline font-bold">Font Awesome is one of the top open source projects on GitHub</p>
    )
  }

export function SectionD(){
    return(
        <div class="my-3.5">
            <ListSectionFour/>
            <ParagraphSectionFour/>
        </div>
    );
}