/*

Product Slider Components are put for the user to specify the amount the the products they want to purchase.

 */




import React from 'react'
import { Slider } from '@mui/material'
import {ValueContext} from './ValueContext';
import { useContext } from 'react';

const ProductSlider = ({value}) => {

    const { standardPadCount, superPadCount, superPlusPadCount, dailyPadCount, superDailyPadCount, miniTamponCount, standardTamponCount, superTamponCount, 
        setStandardPadCount, setSuperPadCount, setSuperPlusPadCount, setDailyPadCOunt, setSuperDailyPadCount, setMiniTamponCount, setStandardTamponCount, setSuperTamponCount } =  useContext(ValueContext);

    const updateBasket = (e, newCount)=> {

        value.f(newCount);
      };

    return (
        <div>
        <h1 className="title-2">{value.label}</h1>
            
            <Slider
                defaultValue={0}
                value={value.count}
                onChange={updateBasket}
                step={10}
                marks
                min={0}
                max={value.maxCount}
                valueLabelDisplay="auto"
                sx={{
                    color: '#000000',
                }}
                />
                <div className="flex content-stretch justify-between">
                <p>0</p>
                <p>{value.maxCount}</p>
                </div>
        </div>
    )
}

export default ProductSlider
