import { Box } from "@mui/material"
import Image from 'next/image'
import Products from "./Products"
import AddToBasketButton from "./AddToBasketButton"


const Basket = ({value}) => {
  return (
    <div className="basket w-full justify-items-center">
        <h1 className="title-1">Özel Paketin</h1>
        <br />

        <div className="tag shadow-md flex items-center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" stroke-width="1"><path d="m13 22-3-3m0 0 3-3m-3 3h5a7 7 0 0 0 3-13.326M6 18.326A7 7 0 0 1 9 5h5m0 0-3-3m3 3-3 3" stroke="#343131" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path></svg>

            <p className="title-2">2 ayda 1 gönderim</p>
        </div>
        <br />
        <Image
            src="/assets/images/packet.webp"
            width={500}
            height={200}
            alt="packet"
        />

        <Products value={value}></Products>


        <AddToBasketButton value={value}></AddToBasketButton>
        
        
    </div>
  )
}

export default Basket
