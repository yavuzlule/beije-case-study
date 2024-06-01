import React from 'react'

const AddToBasketButton = ({value}) => {
    if(value[0] === 0){
        return (
            <div className="w-full purchase-button-disabled content-center text-center">
            <p className="title-2">Sepete Ekle (0 TL)  </p>
        </div>
        )
    }
    else{
        return (
            <button className="w-full purchase-button content-center text-center">
                <p className="title-2">Sepete Ekle ({(value[0]*6.084 + value[1]*7.140 + value[2]*8.003).toFixed(2)} TL)  </p>
            </button>
          )
    }
  
}

export default AddToBasketButton
