import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4">Employee Registration</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
