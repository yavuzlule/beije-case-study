'use client'

import { Slider } from "@mui/material"
import { useState } from "react";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function SliderList({ items }) {


  const [productCount, setProductCount] = useState(0);

  const updateBasket = (e, newCount)=> {

    setProductCount(newCount);
  };


  return (
    <Box sx={{ width: '80%', mx: 'auto', my: 4 }}>
      {items.map((item, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <p>{item}</p>
          <Slider
            defaultValue={0}
            step={10}
            marks
            onChange={updateBasket}
            value={productCount}
            min={0}
            max={60}
            valueLabelDisplay="auto"
            sx={{
              color: '#000000',
            }}
          />
          <div className="flex justify-between">
          <p>0</p>
          <p>{item.key}</p>
          <p>60</p>


          </div>
        </Box>
      ))}
    </Box>
  );
}

export default SliderList;
