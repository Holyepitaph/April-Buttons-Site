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
            <a href="">1GB RAM, 8GB storage</a>
            <a href="">Bluetooth 5.0, Wi-Fi, NFC</a>
            <a href="">Android and iOS</a>
        </div>
    )
}

function ListSectionFour() {
    const cards = [{
        id: 0,
        title: 'Web Safe',
        img:"/tech6.webp",
        para: "The app also offers a secure browser that blocks malicious websites and phishing attempts, as well as a VPN that encrypts your internet traffic and protects your online identity."
      }, {
        id: 1, 
        title: 'Tracking',
        img:"/tech7.jpg",
        para: "SafeGuard Pro provides location tracking and anti-theft features to help you locate your lost or stolen device and remotely wipe your data if necessary."
      }, {
        id: 2,
        title: 'Peace',
        img:"/tech2.webp",
        para: "With SafeGuard Pro, you can enjoy peace of mind knowing that your digital security is in good hands."
      }];
    const listItems = cards.map(card =>
      <li key={card.id} className=" h-52 md:h-72 flex flex-col  rounded-xl items-center w-full justify-between bg-slate-300 border-8 border-slate-500 my-3.5">
        <Image
          src={card.img}
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
            <div className="my-1">12GB of RAM</div>
            <div className="my-1">512GB of storage</div>
            <div className="my-1">16-core CPU</div>
            <div className="my-1">24-core GPU</div>
            <div className="my-1">In-display fingerprint sensor</div>
            <div className="my-1">Rotate + Flip</div>
            <div className="my-1">Power Transforms</div>
            <div className="my-1">Facial recognition technology</div>
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
              src="/screen.jpg"
              alt="Icon"
              className="border-4 border-slate-200 my-3.5"
              width={100}
              height={100}
              priority
            />
            <h2 className="font-bold my-3.5">Best View</h2>
            <p className="md:h-16"> The screen size is generous, making it easy to navigate and
             view content, yet the phone remains slim and easy to hold.</p>
            <button className="font-bold text-sm my-3.5 border hover:border-sky-300 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(125,211,252)]
          active:translate-y-0.5 active:border-sky-300">Dimensions</button>
            <button className="font-bold text-sm my-3.5 border hover:border-sky-300 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(125,211,252)]
          active:translate-y-0.5 active:border-sky-300">Demonstration</button>
            <button className="font-bold text-sm my-3.5 border hover:border-sky-300 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(125,211,252)]
          active:translate-y-0.5 active:border-sky-300">Navigation</button>
        </div>
    )
}

function SheetSecondSectionEight(){
    return(
        <div className="text-sm">
                    <Image
              src="/screen2.webp"
              alt="Icon"
              className="border-4 border-slate-200 my-3.5"
              width={100}
              height={100}
              priority
            />
            <h2 className="my-3.5 font-bold">Great for Everyone</h2>
            <p className="md:h-16">Whether you&apos;re browsing the web, playing games, or watching videos,
             the display on the Nebula Nexus X provides a seamless and immersive experience that is sure to delight.</p>
            <button className="font-bold text-sm my-3.5 border hover:border-fuchsia-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(232,121,249)]
          active:translate-y-0.5 active:border-fuchsia-400">Web Browser</button>
            <button className="font-bold text-sm my-3.5 border hover:border-fuchsia-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(232,121,249)]
          active:translate-y-0.5 active:border-fuchsia-400">Games</button>
            <button className="font-bold text-sm my-3.5 border hover:border-fuchsia-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(232,121,249)]
          active:translate-y-0.5 active:border-fuchsia-400">Videos</button>
        </div>
    )
}

function SheetThreeSectionEight(){
    return(
        <div className="text-sm">
                    <Image
              src="/screen3.webp"
              alt="Icon"
              className="border-4 border-slate-200 my-3.5"
              width={100}
              height={100}
              priority
            />
            <h2 className="my-3.5 font-bold">Gorilla Glass</h2>
            <p className="md:h-16">Protected by durable glass that is resistant to scratches and cracks,
             ensuring that your phone stays looking great for years to come.</p>
            <button className="font-bold text-sm my-3.5 border hover:border-emerald-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(52,211,153)]
          active:translate-y-0.5 active:border-emerald-400">Resistance Specs</button>
            <button className="font-bold text-sm my-3.5 border hover:border-emerald-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(52,211,153)]
          active:translate-y-0.5 active:border-emerald-400">Designs</button>
            <button className="font-bold text-sm my-3.5 border hover:border-emerald-400 rounded-xl 
          w-full h-11 shadow-[0_5px_#999] active:shadow-[0_3px_rgb(52,211,153)]
          active:translate-y-0.5 active:border-emerald-400">Guarantee</button>
        </div>
    )
}