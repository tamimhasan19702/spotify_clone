import React from 'react';
import styledComponents from 'styled-components';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function Spotify() {
  return (
    <Container>
        <div className="spotify-body">
            <Sidebar/>
            <div className="body">
                <Navbar/>
                <div className="body-contents">
                 <Body />
                </div>
            </div>
        </div>
        <div className="spotify-footer">
         <Footer/>
        </div>
    </Container>
  )
}

export default Spotify

const Container = styledComponents.div`

`