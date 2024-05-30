import { Slider } from "@mui/material"


import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function SliderList({ items }) {
  return (
    <Box sx={{ width: '80%', mx: 'auto', my: 4 }}>
      {items.map((item, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <p>{item}</p>
          <Slider
            defaultValue={0}
            step={10}
            marks
            min={0}
            max={60}
            valueLabelDisplay="auto"
            sx={{
              color: '#000000',
            }}
          />
          <div className="flex justify-between">
          <p>0</p>
          <p>60</p>


          </div>
        </Box>
      ))}
    </Box>
  );
}

export default SliderList;
