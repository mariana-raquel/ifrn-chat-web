import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AppContainer, AppButton } from '../src/components';

const Logout = props => {
    return (
        <div>
            <Head>
                <title> Logout </title>
            </Head>
            <main>
                <AppContainer>
                    <AppButton value="Logout" href="/login"></AppButton>
                </AppContainer>
            </main>
        </div>
    );
};

export default Logout;