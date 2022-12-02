import React from 'react';
import styledComponents from 'styled-components';
import { IoLibrary } from 'react-icons/io5';
import { MdHomeFilled, MdSearch } from 'react-icons/md';

function Sidebar() {
  return (
    <Container>
       <div className="top-links">
        <div className="logo">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="Spotify" />
        </div>
        <ul>
            <li>
                <MdHomeFilled/>
                <span>Home</span>
            </li>
            <li>
                <MdSearch/>
                <span>Search</span>
            </li>
            <li>
                <IoLibrary/>            
                <span>Your Library</span>
            </li>
        </ul>
       </div>
    </Container>
  )
}

export default Sidebar;

const Container = styledComponents.div `
background-color: #000;
color: #b3b3b3;
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
.top-links{
    display: flex;
    flex-direction: column;
    .logo{
        text-align: center;
        margin: 1rem 0;
        img{
            max-inline-size: 80%;
            block-size: auto;
        }
    }
    ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
`


