import { Button, TextField } from '@material-ui/core'
import React from 'react'

const Login = () => {
    return (
        <div>
      
      <TextField 
      label="Name"
      fullWidth
      variant="outlined"
      margin="normal"
      
      />
      <TextField 
      label="Address"
      fullWidth
      variant="outlined"
      margin="normal"
      />
      <TextField
      
      label="Pincode"
      fullWidth
      variant="outlined"
      margin="normal"

      />
      <TextField
      type="number"
      label="Mobile Number"
      fullWidth
      variant="outlined"
      margin="normal"
      />
      <TextField 
      type="email"
      label="Email Id"
      fullWidth
      variant="outlined"
      margin="normal"
      />
      
      <TextField
      type="password"
      label="password" 
      fullWidth
      variant="outlined"
      margin="normal"
      />
      <TextField 
      type="password"
      label="Confirm Password"
      fullWidth
      variant="outlined"
      margin="normal"
      />
      <Button
      fullWidth
      variant="contained"
      color="primary">SUBMIT</Button>

        </div>
    )
}

export default Login
