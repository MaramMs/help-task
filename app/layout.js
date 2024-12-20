import { poppins } from './fonts'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import Footer from './components/sharedComponet/footer'
import NavbarCustom from './components/sharedComponet/navbar';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavbarCustom />
        <main className='lg:mb-[40px] pt-[111px] px-[24px] lg:px-[135px] flex min-h-screen flex-col  justify-between' >

        {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
