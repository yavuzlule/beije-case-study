import '@styles/globals.css';
import Nav from '@components/Nav';



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

      </body>


    </html>

  )
}

export default RootLayout