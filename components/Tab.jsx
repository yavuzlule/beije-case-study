
/*

There are 3 tabs, each corresponding to a different category (Ped, Günlük Ped, Tampon).
Each tab contains the corresponding slider components for the products.


*/




import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { ValueContext } from './ValueContext';
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
        <Box sx={{ paddingTop: 7, color: 'black' }}>
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

  const {
    standardPadCount, superPadCount, superPlusPadCount, dailyPadCount,
    superDailyPadCount, miniTamponCount, standardTamponCount, superTamponCount,
    setStandardPadCount, setSuperPadCount, setSuperPlusPadCount, setDailyPadCOunt,
    setSuperDailyPadCount, setMiniTamponCount, setStandardTamponCount, setSuperTamponCount
  } = useContext(ValueContext);

  const sliderValues = [
    { label: 'Standart Ped', count: standardPadCount, f: setStandardPadCount, maxCount: 60 },
    { label: 'Süper Ped', count: superPadCount, f: setSuperPadCount, maxCount: 60 },
    { label: 'Süper+ Ped', count: superPlusPadCount, f: setSuperPlusPadCount, maxCount: 60 },
    { label: 'Günlük Ped', count: dailyPadCount, f: setDailyPadCOunt, maxCount: 100 },
    { label: 'Süper Günlük Ped', count: superDailyPadCount, f: setSuperDailyPadCount, maxCount: 100 },
    { label: 'Mini Tampon', count: miniTamponCount, f: setMiniTamponCount, maxCount: 60 },
    { label: 'Standart Tampon', count: standardTamponCount, f: setStandardTamponCount, maxCount: 60 },
    { label: 'Süper Tampon', count: superTamponCount, f: setSuperTamponCount, maxCount: 60 }
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            '& .MuiTabs-flexContainer': {
              justifyContent: 'space-between',
            },
            '& .MuiTab-root': {
              flex: 1,
              textTransform: 'none',
              color: 'black'
            },
            '& .Mui-selected': {
              color: 'black',
              fontWeight: 'bold'
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'black'
            }
          }}
        >
          <Tab label="beije Ped" {...a11yProps(0)} />
          <Tab label="beije Günlük Ped" {...a11yProps(1)} />
          <Tab label="beije Tampon" {...a11yProps(2)} />
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
        <div>
          <ProductSlider value={sliderValues[3]}></ProductSlider>
          <ProductSlider value={sliderValues[4]}></ProductSlider>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div>
          <ProductSlider value={sliderValues[5]}></ProductSlider>
          <ProductSlider value={sliderValues[6]}></ProductSlider>
          <ProductSlider value={sliderValues[7]}></ProductSlider>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
