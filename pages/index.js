import React, { useState } from 'react';
import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppButton } from '../src/components';
import { useRouter } from 'next/router';


const LoginLogoutButton = (props) => {
    if(props.login) {
        return (<AppButton color="inherit" value="Login" href="/login"/>);   
    }
    else {
        return (<AppButton color="inherit" value="Logout" onClick={(e)=> null}/>);   
    }
}

const AppNavBar = props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {props.title}
                </Typography>
                <LoginLogoutButton login/>
            </Toolbar>
        </AppBar>
    );
};

export default function Menu() {
    const [sessionId, setSessionId] = useState("");
    const isUserLogged = () => (sessionId ? true : false);
    return (
        <div>
            <Head>
                <title> Chat de Infoweb </title>
                <meta name="description" content="Chat do curso de Infoweb" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <AppNavBar title="Chat de Infoweb" userLogged={isUserLogged()}
               logoutFunction={(e) => setSessionId("")}/>
                <h1> LANDING PAGE DO CHAT DE INFOWEB</h1>
            </main>
        </div>
    );
};