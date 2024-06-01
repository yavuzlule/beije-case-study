'use client'

import React, { createContext, useContext } from 'react'

const Products = ({value}) => {

    const productContext = createContext(0);
    if(value[0] === 0 && value[1] === 0 && value[2] === 0){
        return null;
    }
    else{
        return (
            <div className='w-full shadow-md products'>
            <p className='title-2'>Ped Paketleri</p>
            <p className='title-3 gray'>{value[0]} Standart Ped</p>
            <p className='title-3 gray'>{value[1]} Süper Ped</p>
            <p className='title-3 gray'>{value[2]} Süper+ Ped</p>

    
    
            <button>
                <p className='title-2' >Paketten Çıkar</p>
            </button>
    
            </div>
        )
    }
    
}

export default Products
