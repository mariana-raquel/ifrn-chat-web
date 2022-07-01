import Head from 'next/head';
import { AppButton, AppContainer } from '../src/components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chat de Infoweb</title>
        <meta name="description" content="Chat do curso de Infoweb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppContainer>
        <nav>
          <h1>Chat de Infoweb</h1>
          <AppButton href="/login" color="secondary" value="Login"/>
        </nav>
        <br></br>
        <h3>Landing page do chat de Infoweb</h3>
        </AppContainer>
      </main>
    </div>
  )
}
