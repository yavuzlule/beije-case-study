import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';



export const metadata = {
  title: "beije.",
  decription: 'Kendi Paketini Oluştur'
}

const RootLayout = ({children}) => {
  return (
    <html lang='tr'>
      <body>
        <div className='beije'>

          <main className='app beije'>
            <Nav />
            {children}
          </main>

        </div>

      </body>


    </html>

  )
}

export default RootLayout