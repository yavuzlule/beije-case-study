'use client'
import React from "react"
import Feed from "@components/Feed"
import SliderList from "@components/SliderList"
import Basket from "@components/Basket"
import { useState, useContext } from "react"
import { Slider } from "@mui/material"
import { createContext } from "react";
import Box from "@mui/material";

const Home = () => {

  const pads = ["Standart Ped", "Süper Ped", "Süper+ Ped"]
  
  
  /*[
    {
      title: "beije Ped",
      padList: ["Standart Ped", "Süper Ped", "Süper+ Ped"],
    },

    {
      title: "beije Günlük Ped",
      padList: ["Günlük Ped", "Süper Günlük Ped"],
    },

    {
      title: "beije Tampon",
      padList: ["Mini Tampon", "Standart Tampon", "Süper Tampon"],
    }*/

    function calculateTotalPrice(item1, item2){
      return item1*6.084 + item2*7.140;
    }

    const [productCount, setProductCount] = useState(0);
    const [standardPadCount, setStandardPadCount] = useState(0);
    const [superPadCount, setSuperPadCount] = useState(0);
    const [active, setActive] = useState(false)

    const updateProductCount = (e, p1, p2) => {
      setProductCount(p1*6.084 + p2*7.140)
    }

    const updateStandardPadCount = (e, newCount)=> {

      setStandardPadCount(newCount);
    };

    const updateSuperPadCount = (e, newCount)=> {

      setSuperPadCount(newCount);
    };
    const basketContext = createContext();

    
  
  

  return (
    <section className="w-full flex">
      <div className="w-1/2">
        <h1 className="title-1">Kendi Paketini Oluştur</h1>

        <p className="desc">
        Tercih ve ihtiyaçların doğrultusunda seçeceğin 
        ürünlerden ve miktarlardan, sana özel bir paket 
        oluşturalım.
        </p>

        <div>
          <h1 className="">Standart Ped</h1>
          <Slider
              defaultValue={0}
              onChange={updateStandardPadCount}
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
            
            <h1 className="">Süper Ped</h1>
            <Slider
              defaultValue={0}
              onChange={updateSuperPadCount}
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
      </div>
      
        <div className="w-1/2">
          <Basket value={standardPadCount}></Basket>

          <p>{(standardPadCount*6 + superPadCount*7)}</p>

        </div>
        
      
      
            


    </section>
  )



}


export default Home