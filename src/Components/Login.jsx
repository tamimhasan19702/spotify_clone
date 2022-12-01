import React from 'react';
import styled from 'styled-components';
import logoImg from '../imgs/Spotify_Logo_CMYK_Black.png';

function Login() {
  return (
    <Container>
        <img src={logoImg} alt="Spotify" />
        <button>Connect Spotify</button>
    </Container>
  )
}

export default Login;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background-color: #1db954;
gap: 5rem;

img{
  height:20vh;
}

button{
  padding: 1rem 5rem;
  border-radius: 5rem;
}
`;
