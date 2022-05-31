import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { AppContainer, AppInput, AppButton } from '../src/components';

const Login = props => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title> Login </title>
            </Head>
            <main>
                <nav>
                    <p>Chat de Infoweb</p>
                    <button onClick={() => router.back()}>voltar</button>
                </nav>
                <br></br><br></br>
                <AppContainer>
                    <AppInput label="Usuário:" type="text" placeholder="Usuário"></AppInput>
                    <AppInput label="Senha:" type="password" placeholder="Senha"></AppInput>
                    <br></br>
                    <AppButton value="Enviar"></AppButton>
                </AppContainer>
            </main>
        </div>
    );
};

export default Login;