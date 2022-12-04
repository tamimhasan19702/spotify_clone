import axios from 'axios';
import React, { useEffect } from 'react';
import styledComponents from 'styled-components';
import { AiFillClockCircle } from 'react-icons/ai';
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/Constants';

function Body() {

  const [{ token, selectedPlaylist, selectedPlaylistId }, dispatch] = useStateProvider();

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
        );
        console.log(response);
        dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
      }
    getInitialPlaylist();
  },[token,dispatch, selectedPlaylistId]);

 

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