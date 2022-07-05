import React from 'react';
import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppButton } from '../src/components';
import { useRouter } from 'next/router';


const LoginLogoutButton = (props) => {
  return (<AppButton color="inherit" value="Login" href="/login"/>);   
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
    return (
        <div>
            <Head>
                <title> Chat de Infoweb </title>
            </Head>
            <main>
                <AppNavBar title="Chat de Infoweb"/>
                <h1> LANDING PAGE DO CHAT DE INFOWEB</h1>
            </main>
        </div>
    );
};