import React, { useEffect } from 'react';
import styledComponents from 'styled-components';
import { AiFillClockCircle } from 'react-icons/ai';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';

function Body() {

  const [{ token, selectedPlaylistId }, dispatch] = useStateProvider();
  useEffect(() => {
    const getInitialPlaylist = async () => {
     const response = await axios.get(`https://api.spotify.com/v1/playlists/${(selectedPlaylistId,{
      headers: {
        Authorization: 'Bearer ' + token,
        "Content-Type": "application/json",
      },
     })
    }`
     );
    };

  },[token,dispatch])

  return (
   <Container>
     <div className="search-bar">
      
      input
     </div>
   </Container>
  )
}

export default Body;

const Container = styledComponents.div`

`