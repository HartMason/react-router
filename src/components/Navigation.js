import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import About from './About'
import { Link } from "react-router-dom"
import Home from './Home'


const Navigation = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    FakeCars.com
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to={About}/>
                    </li>
                    <li className="nav-list-item">
                        <Link to={Home}/>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation