/*

ProductComponent component is used to show the total amount of each product in the corresponding category.
It includes a button to disselect the products in the category.

*/


import React from 'react';
import {ValueContext} from './ValueContext';
import { useContext } from 'react';


const ProductComponent = ({ productCounts, category}) => {
    const areAllCountsZero = productCounts.every(product => product.count === 0);

    const {
        setStandardPadCount,
        setSuperPadCount,
        setSuperPlusPadCount,
        setDailyPadCOunt,
        setSuperDailyPadCount,
        setMiniTamponCount,
        setStandardTamponCount,
        setSuperTamponCount
      } = useContext(ValueContext);

    const updateBasket = (e, newCount)=> {

        value.f(newCount);
      };

      const handleRemoveAll = () => {
        productCounts.forEach(product => {
          switch (category) {
            case 'Ped':
              setStandardPadCount(0);
              setSuperPadCount(0);
              setSuperPlusPadCount(0);
              break;
            case 'Günlük Ped':
              setDailyPadCOunt(0);
              setSuperDailyPadCount(0);
            case 'Tampon':
              setMiniTamponCount(0);
              setStandardTamponCount(0);
              setSuperTamponCount(0);
              break;
            default:
              break;
          }
        });
      };
      

    if (areAllCountsZero) {
        return (
            <div></div>
        );
    } else {
        return (
            <div className='w-full shadow-md products'>
                <p className='title-2 font-bold'>{category} Paketleri</p>
                {productCounts.map((product, index) => 
                    product.count > 0 && (
                        <p key={index} className='title-3 gray'>
                            {product.count} {product.name}
                        </p>
                    )
                )}
                <button className='title-2 font-bold' onClick={handleRemoveAll}>Paketten Çıkar</button>

            </div>

        );
    }
};

export default ProductComponent;
