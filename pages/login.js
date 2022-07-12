import React, { useState } from 'react';
import Head from 'next/head';
import { AppContainer, AppInput, AppButton} from '../src/components';
import SendIcon from '@mui/icons-material/Send';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/router';

const Login = props => {
    const router = useRouter();
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');

    const handleChangeName = (event) => {
        setUserName(event.target.value);
    }
    const handleChangePass = (event) => {
        setUserPass(event.target.value);
    }
    
    const login = (name) => {
        router.push({
            pathname: "/menu",
            query: {user: name, hash: "123"}
        })
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
                    </nav>
                    <br/>
                    <AppInput label="Usuário:" type="text" title="Adicione seu usuário" value={userName} onChange={handleChangeName}/>
                    <br></br>
                    <AppInput label="Senha:" type="password" title="Adicione sua senha" value={userPass} onChange={handleChangePass}/>
                    <br></br>
                    <AppButton variant="contained" color="secondary" href="/" value="Voltar" startIcon={<HomeIcon />}/>
                    {/* Cores nos botões: primary, secondary, info, warning, error, */}
                    <AppButton variant="contained" onclick={(e)=> {login(name)}} href="/menu" value="Entrar no chat" endIcon={<SendIcon />} disabled={!(!!userName && userPass.length >= 6)}/>
                </AppContainer>
            </main>
        </div>
    );
};

export default Login;