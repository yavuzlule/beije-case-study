/*

A Layout is used for the potentially repeating components in each page of the website such as navigation bar and footer.


*/



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
      <head>
        <link rel="shortcut icon" href="./favicon.ico" />
      </head>
      <body>
        <div className='beije home'>
          <main className='app beije w-full'>
            <Nav />
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>

  )
}

export default RootLayout