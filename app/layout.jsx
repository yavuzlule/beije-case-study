import '@styles/globals.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';


export const metadata = {
  title: "beije.",
  decription: 'Kendi Paketini Oluştur'
}

const RootLayout = ({children}) => {
  return (
    <html lang='tr'>
      <body>
        <div className='beije home'>

          <main className='app beije w-full'>
            <Nav />
            {children}
          </main>

        </div>
        
        <Footer className='footer'/>
      
      </body>



    </html>

  )
}

export default RootLayout