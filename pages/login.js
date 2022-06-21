import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { AppContainer, AppInput, AppButton} from '../src/components';

const Login = props => {
    const [userName, setUserName] = useState();
    const [userPass, setUserPass] = useState();

    const handleChangeName = (event) => {
        setUserName(event.target.value);
    }
    const handleChangePass = (event) => {
        setUserPass(event.target.value);
    }

    const router = useRouter()
    return (
        <div>
            <Head>
                <title> Login </title>
            </Head>
            <main>
                <AppContainer>
                    <nav>
                        <p>Chat de Infoweb</p>
                        <AppButton onClick={() => router.back()} value="Voltar"></AppButton>
                    </nav>
                    <br></br><br></br>
                    <AppInput label="Usuário:" type="text" title="Adicione seu usuário" value={userName} onChange={handleChangeName}></AppInput>
                    <br></br>
                    <AppInput label="Senha:" type="password" title="Adicione sua senha" value={userPass} onChange={handleChangePass}></AppInput>
                    <br></br>
                    <AppButton href="/menu" value="Enviar"></AppButton>
                </AppContainer>
            </main>
        </div>
    );
};

export default Login;