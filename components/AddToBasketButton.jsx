import React from 'react'

const AddToBasketButton = ({value}) => {
    if(value === 0){
        return (
            <div className="purchase-button-disabled content-center text-center">
            <p className="title-2">Sepete Ekle (0 TL)  </p>
        </div>
        )
    }
    else{
        return (
            <button className="purchase-button content-center text-center">
                <p className="title-2">Sepete Ekle ({(value*6.084).toFixed(2)} TL)  </p>
            </button>
          )
    }
  
}

export default AddToBasketButton
