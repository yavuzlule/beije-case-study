'use client'

import React, { createContext, useContext } from 'react'

const Products = ({value}) => {

    const productContext = createContext(0);
    if(value === 0){
        return null;
    }
    else{
        return (
            <div className='shadow-md products'>
            <p className='title-2'>Ped Paketleri</p>
            <p className='title-2'>{value} Standart Ped</p>
    
    
            <button>
                <p className='title-2' >Paketten Çıkar</p>
            </button>
    
            </div>
        )
    }
    
}

export default Products
