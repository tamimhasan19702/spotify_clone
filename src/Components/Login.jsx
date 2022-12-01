import React from 'react';
import styledComponents from 'styled-components';

function Login() {
  return (
    <Container>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_Cmyk_Black.png" alt="Spotify" />
        <button>Connect Spotify</button>
    </Container>
  )
}

export default Login;

const Container = styledComponents.div``;
