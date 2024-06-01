'use client'
import React from "react"
import Basket from "@components/Basket"
import { useState, useContext } from "react"
import { Slider } from "@mui/material"
import { createContext } from "react";
import Link from "next/link"
import Box from "@mui/material"
import Tab from "@mui/material"
import Tabs from "@mui/material"
import BasicTabs from "@components/Tab"





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


    const [standardPadCount, setStandardPadCount] = useState(0);
    const [superPadCount, setSuperPadCount] = useState(0);
    const [superPlusPadCount, setSuperPlusPadCount] = useState(0);


  

    const updateStandardPadCount = (e, newCount)=> {

      setStandardPadCount(newCount);
    };

    const updateSuperPadCount = (e, newCount)=> {

      setSuperPadCount(newCount);
    };
    const updateSuperPlusPadCount = (e, newCount)=> {

      setSuperPlusPadCount(newCount);
    };
    const basketContext = createContext();

    const allValues = [
      standardPadCount,
      superPadCount,
      superPlusPadCount,
    ];


    const value = 0;
  
  

  return (
    <section className="w-full flex home">
      <div className="w-1/2">
        <div className="flex-between">
          <h1 className="title-1">Kendi Paketini Oluştur</h1>
          <Link href="https://beije.co/know-us/how-it-works" className="title-3">Nasıl Çalışır?</Link>

        </div>
        <br />
        <p className="description gray">
        Tercih ve ihtiyaçların doğrultusunda seçeceğin 
        ürünlerden ve miktarlardan, sana özel bir paket 
        oluşturalım.
        </p>
        <br />
        
        <BasicTabs></BasicTabs>
        
        
      </div>
      
        <div className="w-1/2">
          <Basket value={allValues}></Basket>
        </div>
        
      
      
            


    </section>
  )



}


export default Home