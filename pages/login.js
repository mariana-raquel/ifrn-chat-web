import React from 'react';
import Head from 'next/head';
import { AppContainer, AppInput, AppButton } from '../src/components';

const Login = props => {
    return (
        <div>
            <Head>
                <title> Login </title>
            </Head>
            <main>
                <AppContainer>
                    <AppInput label="Usuário:" type="text" placeholder="Usuário"></AppInput>
                    <AppInput label="Senha:" type="password" placeholder="Senha"></AppInput>
                    <AppButton value="Enviar"></AppButton>
                </AppContainer>
            </main>
        </div>
    );
};

export default Login;