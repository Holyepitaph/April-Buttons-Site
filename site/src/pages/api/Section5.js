import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ParagraphSectionFive(){
    return(
        <div class="my-3.5 text-sm md:order-1">
            <h2 class="my-3.5 text-blue-800 font-bold">STYLING TOOLS</h2>
            <h1 class="my-3.5 text-2xl font-bold">Style your icons to your fa-heart's content.</h1>
            <p class="my-3.5">You know and WE know styling icons on the web can be a bit of a chore.
             That's why we fine-tuned our styling tools like a Swiss watch to make icons more
              malleable right out of the box. Easily size, place, style, and even animate any icon
               with a short line of code to create the perfect effect. Bippity-boppity-ICON!</p>
        </div>
    )
}

function ButtonSectionFive({children}){
    return(
        <div class="md:order-3">
        <button class=" border bg-sky-400 border-slate-700 hover:border-sky-800 rounded-xl h-12 
        w-full hover:bg-sky-700 shadow-[0_5px_#999] active:shadow-[0_3px_#999]
        active:translate-y-0.5 active:bg-sky-300 active:border-sky-800 my-3.5">{children}</button>
      </div>
    )
}

function GridSectionFive(){
    return(
        <div class="grid grid-cols-2 underlined place-items-center w-full ml-1 my-3.5 underline font-bold text-sm md:order-2">
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
      <Box sx={{ width: '100%' }}  class="md:order-0 md:row-span-3">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
            <Tab label="Icon" {...a11yProps(0)} />
            <Tab label="Style" {...a11yProps(1)} />
            <Tab label="Color" {...a11yProps(2)} />
            <Tab label="Size" {...a11yProps(3)} />
            <Tab label="Animate" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel class="h-96" value={value} index={0}>
          Icon
        </TabPanel>
        <TabPanel class="h-96" value={value} index={1}>
          Style
        </TabPanel>
        <TabPanel class="h-96" value={value} index={2}>
          Color
        </TabPanel>
        <TabPanel class="h-96" value={value} index={3}>
          Size
        </TabPanel>
        <TabPanel class="h-96" value={value} index={4}>
          Animate
        </TabPanel>
      </Box>
    );
  }

{/*Material UI Tabs */}

export function SectionE(){
    return(
        <div class="md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4">
            <ParagraphSectionFive/>
            <ButtonSectionFive>View All Styling Options</ButtonSectionFive>
            <GridSectionFive/>
            <BasicTabsSectionFive/>
        </div>
    );
}