import '../styles/globals.scss';
import Header from '../components/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <main>
        <div className='overlay'>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}

export default MyApp
