import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Slider } from '@mui/material';
import { useState, createContext, useContext } from 'react';

import ProductSlider from './ProductSlider';


function CustomTabPanel(props) {
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
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [standardPadCount, setStandardPadCount] = useState(0);
    const [superPadCount, setSuperPadCount] = useState(0);
    const [superPlusPadCount, setSuperPlusPadCount] = useState(0);


  

    const updateStandardPadCount = (e, newCount)=> {

      setStandardPadCount(newCount);
    };

    const updateSuperPadCount = (e, newCount)=> {

      setSuperPadCount(newCount);
    };
    const updateSuperPlusPadCount = (e, newCount)=> {

      setSuperPlusPadCount(newCount);
    };
    const basketContext = createContext();

    const allValues = [
      standardPadCount,
      superPadCount,
      superPlusPadCount,
    ];
    

    const sliderValues = [
        {
            name : 'Standart Ped',
            func : updateStandardPadCount,
        },
        {
            name : 'Süper Ped',
            func : updateSuperPadCount,
        },
        {
            name : 'Süper+ Ped',
            func : updateSuperPlusPadCount,
        },
    ];


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} className='flex justify-between'>
          <Tab label="beije Ped"  />
          <Tab label="beije Günlük Ped" />
          <Tab label="beije Tampon" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div>
          <ProductSlider value={sliderValues[0]}></ProductSlider>
          <ProductSlider value={sliderValues[1]}></ProductSlider>
          <ProductSlider value={sliderValues[2]}></ProductSlider>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
