/*

AddToBasketButton component is used to finalize the purchase. It allows the customers to see the total price of the products in their basket.

*/



import React, { useContext } from 'react';
import { ValueContext } from './ValueContext';

const AddToBasketButton = () => {
  const {
    standardPadCount,
    superPadCount,
    superPlusPadCount,
    dailyPadCount,
    superDailyPadCount,
    miniTamponCount,
    standardTamponCount,
    superTamponCount,
  } = useContext(ValueContext);

  const totalCount =
    standardPadCount +
    superPadCount +
    superPlusPadCount +
    dailyPadCount +
    superDailyPadCount +
    miniTamponCount +
    standardTamponCount +
    superTamponCount;

  const totalPrice = (standardPadCount * 6.084 + superPadCount*7.140 + superPlusPadCount*8.003 + dailyPadCount*3.579 + superDailyPadCount*4.323 + miniTamponCount*7.874 + standardTamponCount*8.488 + superTamponCount*8.974).toFixed(2);

  if (totalCount === 0) {
    return (
      <div className="w-full purchase-button-disabled content-center text-center">
        <p className="title-2">Sepete Ekle (0₺)</p>
      </div>
    );
  } else {
    return (
      <button className="w-full purchase-button content-center text-center">
        <p className="title-2">Sepete Ekle ({totalPrice}₺)</p>
      </button>
    );
  }
}

export default AddToBasketButton;
