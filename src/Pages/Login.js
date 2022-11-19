import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100% ;
  height:100vh ;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BoxStyled = styled(Box)`
  width: 25%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px;
  position: relative;
  border-radius: 10px;
`;
const TextFieldStyled = styled(TextField)`
margin: 4rem 0rem  1rem 0rem!important;
`
const ButtonStyled = styled(Button)`
  margin: 10px 0px !important;
  width: 100%;
  background: #d2daff !important;
`;

const LogoStudent = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: #eef1ff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 9rem;
  top:-80px;

`;
const Logo = styled.img`
height: 100px;
width:100px;

 
`



const Login = () => {
    const [values, setValues] = React.useState({
      UserName: "",
      password: "",
      showPassword: false,
    });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
 
  return (
    <>
      <LoginContainer>
        <BoxStyled>
          <LogoStudent>
            <Logo src='images/logo.png' alt='login_img'/>
          </LogoStudent>
          <form>
            <TextFieldStyled
              placeholder="User Name"
              label="User Name"
              variant="outlined"
              fullWidth
              onChange={handleChange("UserName")}
            />
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <ButtonStyled variant="contained" >
              Submit
            </ButtonStyled>
          </form>
        </BoxStyled>
      </LoginContainer>
    </>
  );
}

export default Login