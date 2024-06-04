
/*

The page consists of 4 main components:
  1.  Navigation Bar
      Includes the beije. logo, 5 links to navigate to other pages, 2 icons representing profile and basket.    

  2.  Product Tabs and Sliders
      Products are divided into 3 categories (Ped, Günlük Ped, Tampon) where each of the groups have their own tab, containing the product sliders in the category.
      Each product has its own slider where the customers can use it to indicate the amount that they would like to purchase.

  3.  Basket
      Basket is the component where the customers can see the total cost of their purchases, it also includes a button to empty the basket.

  4.  Footer
      Footer includes several links about beije. and the social media accounts.
  
  
*/

'use client'
import React from "react"
import Basket from "@components/Basket"
import Link from "next/link"
import BasicTabs from "@components/Tab"
import { ValueProvider } from "@components/ValueContext"

const Home = () => {
  return (
    <section className="w-full flex home">

      

      <ValueProvider>
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
          <BasicTabs/>
        </div>
        <div className="w-1/2">
          <Basket />
        </div>
      </ValueProvider>
      
        
      
      
            


    </section>
  )



}


export default Home