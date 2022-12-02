import React, { useEffect } from 'react';
import { useStateProvider } from '../utils/StateProvider';

function Playlists() {

  const [{ token, dispatch }] = useStateProvider();
  useEffect(() => {

  const getPlaylistData = async () => {

  }
  getPlaylistData();

  },[token,dispatch]) 

  return (
    <div>Playlists</div>
  )
}

export default Playlists