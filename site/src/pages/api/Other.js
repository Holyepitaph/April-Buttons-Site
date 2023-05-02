import * as React from 'react';
import Image from 'next/image'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export {VideoSectionOne, Links, ListSectionFour, GridSectionFive, BasicTabsSectionFive,
     SheetOneSectionEight, SheetSecondSectionEight, SheetThreeSectionEight};

function VideoSectionOne(){
    return(
        <div>
            <video className="w-full" width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4"/>
  <source src="movie.ogg" type="video/ogg"/>
Your browser does not support the video tag.
            </video>
        </div>
    )
}

function Links(){
    return(
        <div className="grid grid-cols-2 gap-2 ml-11 font-bold text-sm my-3.5 underline md:order-2 md:row-span-1">
            <a href="">Version 6.4.0</a>
            <a href="">68 Categories</a>
            <a href="">26,107 Pro Icons</a>
            <a href="">2,020 Free Icons</a>
        </div>
    )
}

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
      <li key={card.id} className=" h-52 md:h-72 flex flex-col  rounded-xl items-center w-full justify-between bg-slate-300 border-8 border-slate-500 my-3.5">
        <Image
          src={"/cheese.png"}
          alt={" "}
          height={50}
          width={50}
          className="md:w-24 md:h-24"
        />
        <p className="flex flex-col text-sm  items-center w-full justify-between">
          <b>{card.title}</b>
            {' ' + card.para + ' '}
        </p>
      </li>
    );
    return <ul className="md:grid md:grid-cols-3 md:gap-4">{listItems}</ul>;
  }

function GridSectionFive(){
    return(
        <div className="grid grid-cols-2 underlined place-items-center w-full ml-1 my-3.5 underline font-bold text-sm md:order-2">
            <div className="my-1">Thousands of Icons</div>
            <div className="my-1">Built-in Sizing</div>
            <div className="my-1">8 Styles</div>
            <div className="my-1">Animations</div>
            <div className="my-1">Quick Color</div>
            <div className="my-1">Rotate + Flip</div>
            <div className="my-1">Power Transforms</div>
            <div className="my-1">Easy Lists</div>
        </div>
    )
}


{/*Material UI Tabs */}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
function BasicTabsSectionFive() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}  className="md:order-0 md:row-span-3">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
            <Tab label="Icon" {...a11yProps(0)} />
            <Tab label="Style" {...a11yProps(1)} />
            <Tab label="Color" {...a11yProps(2)} />
            <Tab label="Size" {...a11yProps(3)} />
            <Tab label="Animate" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel className="h-96" value={value} index={0}>
          Icon
        </TabPanel>
        <TabPanel className="h-96" value={value} index={1}>
          Style
        </TabPanel>
        <TabPanel className="h-96" value={value} index={2}>
          Color
        </TabPanel>
        <TabPanel className="h-96" value={value} index={3}>
          Size
        </TabPanel>
        <TabPanel className="h-96" value={value} index={4}>
          Animate
        </TabPanel>
      </Box>
    );
  }

{/*Material UI Tabs */}

function SheetOneSectionEight(){
    return(
        <div className="text-sm">
            <Image
              src="/cheese.png"
              alt="Icon"
              className="border-4 border-slate-200 my-3.5"
              width={100}
              height={100}
              priority
            />
            <h2 className="font-bold my-3.5">Great for Developers</h2>
            <p className="md:h-16">We&apos;ve got frameworks and toolkits for the most popular plugins and packages that already
             work the way you expect.</p>
            <button className="font-bold text-sm my-3.5 border hover:border-sky-300 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(125,211,252)]
          active:translate-y-0.5 active:border-sky-300">JS Frameworks</button>
            <button className="font-bold text-sm my-3.5 border hover:border-sky-300 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(125,211,252)]
          active:translate-y-0.5 active:border-sky-300">Webfont & SVG Toolkits</button>
            <button className="font-bold text-sm my-3.5 border hover:border-sky-300 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(125,211,252)]
          active:translate-y-0.5 active:border-sky-300">Official APIs</button>
        </div>
    )
}

function SheetSecondSectionEight(){
    return(
        <div className="text-sm">
                    <Image
              src="/cheese.png"
              alt="Icon"
              className="border-4 border-slate-200 my-3.5"
              width={100}
              height={100}
              priority
            />
            <h2 className="my-3.5 font-bold">Great for Designers</h2>
            <p className="md:h-16">Use your own designs alongside thousands of matching Font Awesome icons in each of six unique styles.</p>
            <button className="font-bold text-sm my-3.5 border hover:border-fuchsia-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(232,121,249)]
          active:translate-y-0.5 active:border-fuchsia-400">Text-to-Icon Ligatures</button>
            <button className="font-bold text-sm my-3.5 border hover:border-fuchsia-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(232,121,249)]
          active:translate-y-0.5 active:border-fuchsia-400">Custom Icon Upload</button>
            <button className="font-bold text-sm my-3.5 border hover:border-fuchsia-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(232,121,249)]
          active:translate-y-0.5 active:border-fuchsia-400">Pixel-Perfect Icons</button>
        </div>
    )
}

function SheetThreeSectionEight(){
    return(
        <div className="text-sm">
                    <Image
              src="/cheese.png"
              alt="Icon"
              className="border-4 border-slate-200 my-3.5"
              width={100}
              height={100}
              priority
            />
            <h2 className="my-3.5 font-bold">Great for Content Creators</h2>
            <p className="md:h-16">With oodles of free icons — including brands + social icons — our syntax is easy to use
             in authoring tools like WordPress and more.</p>
            <button className="font-bold text-sm my-3.5 border hover:border-emerald-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(52,211,153)]
          active:translate-y-0.5 active:border-emerald-400">Thousands of Unique Icons</button>
            <button className="font-bold text-sm my-3.5 border hover:border-emerald-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(52,211,153)]
          active:translate-y-0.5 active:border-emerald-400">Brand + Social Icons</button>
            <button className="font-bold text-sm my-3.5 border hover:border-emerald-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(52,211,153)]
          active:translate-y-0.5 active:border-emerald-400">Wordpress Shortcodes</button>
        </div>
    )
}