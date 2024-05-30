import Feed from "@components/Feed"
import SliderList from "@components/SliderList"



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



  
  
  

  return (
    <section className="w-full flex-col">
      <h1 className="head_text text_center">
        <span className="orange_gradient text-center">Kendi Paketini Oluştur</span>
      </h1>
      <p className="desc">
      Tercih ve ihtiyaçların doğrultusunda seçeceğin 
      ürünlerden ve miktarlardan, sana özel bir paket 
      oluşturalım.
      </p>

      <Feed />
      <div className="w-1/2">
        <SliderList className="slider" items={pads} />
      </div>
            


    </section>
  )



}


export default Home