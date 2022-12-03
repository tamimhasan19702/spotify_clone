import React, {useEffect} from 'react';
import styledComponents from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import axios from 'axios';
import { MdGeneratingTokens } from 'react-icons/md';
import { reducerCases } from '../utils/Constants';

function Navbar() {

  useEffect(() => {

  const getUserInfo = async () => {
    const { data } = await axios.get('https://api.spotify.com/v1/me',{
      headers : {
        Authorization: "Bearer " + MdGeneratingTokens,
        "Content-Type": "application/json",
      },
    });
    
    const userInfo = {
      userId: data.id,
      userName: data.display_name,
    };
    dispatch({ type: reducerCases.SET_USER, userInfo});
  };

getUserInfo();

},[dispatch, token]);


  return (
    <Container>
      <div className="search-bar">
        <FaSearch/>
        <input type="text" placeholder='Artists, songs, or Products'/>
      </div>
      <div className="avatar">
        <a href="#">
          <CgProfile/>
          <span>{userInfo?.name}</span>
        </a>
      </div>
    </Container>
  )
}

export default Navbar

const Container = styledComponents.div``;