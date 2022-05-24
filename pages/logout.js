import React from 'react';
import Head from 'next/head';
import { AppContainer, AppInput, AppButton } from '../src/components';

const Logout = props => {
    return (
        <div>
            <Head>
                <title> Logout </title>
            </Head>
            <main>
                <AppContainer>
                    <AppButton value="Logout"></AppButton>
                </AppContainer>
            </main>
        </div>
    );
};

export default Logout;