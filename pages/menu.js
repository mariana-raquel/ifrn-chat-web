import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { AppContainer, AppButton} from '../src/components';

const Login = props => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title> Menu </title>
            </Head>
            <main>
                <h1> MENU </h1>
                <AppContainer>
                    <AppButton value="Logout" href="/login"></AppButton>
                </AppContainer>
            </main>
        </div>
    );
};

export default Login;