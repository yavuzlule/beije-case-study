import React from 'react'
import { Slider } from '@mui/material'

const ProductSlider = ({value}) => {
  return (
    <div>
      <h1 className="title-2">{value.name}</h1>
          
          <Slider
              defaultValue={0}
              onChange={value.func(value)}
              step={10}
              marks
              min={0}
              max={60}
              valueLabelDisplay="auto"
              sx={{
                color: '#000000',
              }}
            />
            <div className="flex content-stretch justify-between">
              <p>0</p>
              <p>60</p>
            </div>
    </div>
  )
}

export default ProductSlider
