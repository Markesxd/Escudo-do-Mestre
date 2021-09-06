import Header from '../components/header';
import MenuContextProvider from '../contexts/menuContext';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <main>
        <div className='overlay'>
          <MenuContextProvider>
            <Component {...pageProps} />
          </MenuContextProvider>
        </div>
      </main>
    </>
  )
}

export default MyApp
