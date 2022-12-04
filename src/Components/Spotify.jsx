import React, {useEffect} from 'react';
import styledComponents from 'styled-components';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import axios from 'axios';
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/Constants';

function Spotify() {
    const [{token}, dispatch] = useStateProvider();

   useEffect(() => {
   const getUserInfo = async () => {
    const {data} = await axios.get("https://api.spotify.com/v1/me", {
        headers:{
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
    });
    console.log(data);
    const userInfo = {
        userId: data.id,
        userUrl: data.external_urls.spotify,
        userName: data.display_name,
       };
       dispatch({type: reducerCases.SET_USER, userInfo})
   };
   getUserInfo();
   },[dispatch,token])
    
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
max-width: 100vw;
max-height: 100vh;
overflow: hidden;
display: grid;
grid-template-rows: 85vh 15vh;
.spotify-body{
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0,0,0,1));
    background-color: rgb(32,87,100);
    .body{
        height: 100%;
        width: 100%;
        overflow: auto;
    }
}
`