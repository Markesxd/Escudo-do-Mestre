import Header from '../components/header';
import MenuContextProvider from '../contexts/menuContext';
import '../styles/globals.scss';
import Menu from '../components/menu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <main>
        <div className='overlay'>
          <MenuContextProvider>
            <Component {...pageProps} />
            <Menu/>
          </MenuContextProvider>
        </div>
      </main>
    </>
  )
}

export default MyApp
