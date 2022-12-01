import React from 'react';
import styled from 'styled-components';
import logoImg from '../imgs/Spotify_Logo_CMYK_Black.png';

function Login() {
  
  const handleClick = () => {
  
   const clientId = 'd0551278b7f04adb803a8db613a4e553';
   const redirectUrl = 'http://localhost:3000/';
   const apiUrl = 'https://accounts.spotify.com/authorize';
   const scope = [
    "user-read-email",
    "user-read-private",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-position",
    "user-top-read",
   ];
  window.location.href = `$`
  }

  return (
    <Container>
        <img src={logoImg} alt="Spotify" />
        <button onClick={handleClick}>Connect Spotify</button>
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
  border: none;
  background-color: black;
  color: #49f585;
  font-size: 1.4rem;
  cursor: pointer;
}
`;
