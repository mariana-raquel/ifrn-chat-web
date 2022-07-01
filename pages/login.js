import React, { useState } from 'react';
import Head from 'next/head';
import { AppContainer, AppInput, AppButton} from '../src/components';

const Login = props => {
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');

    const handleChangeName = (event) => {
        setUserName(event.target.value);
    }
    const handleChangePass = (event) => {
        setUserPass(event.target.value);
    }
    return (
        <div>
            <Head>
                <title> Login </title>
            </Head>
            <main>
                <AppContainer>
                    <nav>
                        <h1>Chat de Infoweb</h1>
                        <AppButton variant="contained" color="success" href="/" value="Tela inicial"/>
                    </nav>
                    <br/>
                    <AppInput label="Usuário:" type="text" title="Adicione seu usuário" value={userName} onChange={handleChangeName}/>
                    <br></br>
                    <AppInput label="Senha:" type="password" title="Adicione sua senha" value={userPass} onChange={handleChangePass}/>
                    <br></br>
                    <AppButton variant="contained" href="/menu" value="Entrar no chat" disabled={!(!!userName && userPass.length >= 6)}/>
                </AppContainer>
            </main>
        </div>
    );
};

export default Login;