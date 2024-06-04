/*

Products component is used to differentiate the products for diferent categories in the basket. It shows the total amount of each product. 
Contains ProductComponent component for each cateogry.



*/



import React, { createContext, useContext } from 'react'
import {ValueContext} from './ValueContext';
import ProductComponent from './ProductComponent';

const Products = () => {

    const { standardPadCount, superPadCount, superPlusPadCount, dailyPadCount, superDailyPadCount, miniTamponCount, standardTamponCount, superTamponCount, 
        setStandardPadCount, setSuperPadCount, setSuperPlusPadCount, setDailyPadCOunt, setSuperDailyPadCount, setMiniTamponCount, setStandardTamponCount, setSuperTamponCount } =  useContext(ValueContext);

        const padCounts = [
            { name: 'Standart Ped', count: standardPadCount },
            { name: 'Süper Ped', count: superPadCount },
            { name: 'Süper+ Ped', count: superPlusPadCount },
          ];
        
          const dailyPadCounts = [
            { name: 'Günlük Ped', count: dailyPadCount },
            { name: 'Süper Günlük Ped', count: superDailyPadCount },
          ];
        
          const tamponCounts = [
            { name: 'Mini Tampon', count: miniTamponCount },
            { name: 'Standart Tampon', count: standardTamponCount },
            { name: 'Süper Tampon', count: superTamponCount },
          ];
        
          
        

          return (
            <div>
                <ProductComponent productCounts={padCounts} category='Ped'></ProductComponent>
                <ProductComponent productCounts={dailyPadCounts} category='Günlük Ped'></ProductComponent>
                <ProductComponent productCounts={tamponCounts} category='Tampon'></ProductComponent>
            </div>
           

          );
        }

export default Products