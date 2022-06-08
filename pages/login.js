import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { AppContainer, AppInput, AppButton} from '../src/components';

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
                    <AppButton onClick={() => router.back()} value="Voltar"></AppButton>
                </nav>
                <br></br><br></br>
                <AppContainer>
                    <AppInput label="Usuário:" type="text" title="Adicione seu usuário"></AppInput>
                    <AppInput label="Senha:" type="password" title="Adicione sua senha"></AppInput>
                    <br></br>
                    <AppButton value="Enviar"></AppButton>
                </AppContainer>
            </main>
        </div>
    );
};

export default Login;