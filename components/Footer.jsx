/*

Footer includes several links about beije. and the social media accounts.

*/


'use client'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='footer w-full grid grid-cols-1 lg:grid-cols-2 justify-around px-4 py-8'>
            <div className='space-y-5 lg:px-8'>
                <p className='title-2'>beije.</p>
                <br />
                <p className='font-bold'>Arayı açmayalım!</p>
                <p>beije’deki yeni ürün ve gelişmeleri sana haber verelim & aylık e-gazetemiz döngü’ye abone ol!</p>
                <div className='flex items-center'>
                    <input type="text" placeholder="  e-mail adresin" className='input-email flex-grow mr-2'/>
                    <button className="bg-white text-gray-900 font-bold px-4 py-2 rounded-full">Gönder</button>
                </div>
                <p>Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve beije'den haber almayı onaylıyorum.</p>
            </div>
            <div className='flex flex-col lg:flex-row lg:space-x-8 mt-8 lg:mt-0 justify-center'>
                <div className='space-y-5'>
                    <p>beije Ped</p>
                    <p>beije Günlük Ped</p>
                    <p>beije Tampon</p>
                    <p>beije Store</p>
                </div>
                <div className='space-y-5'>
                    <p>Blog</p>
                    <p>Sıkça Sorulan Sorular</p>
                    <p>Biz Kimiz</p>
                    <p>Quiz</p>
                </div>
                <div className='space-y-5'>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Linkedin</p>
                    <p>Spotify</p>
                </div>
            </div>
            
        </div>
    </div>
   
  )
}

export default Footer
