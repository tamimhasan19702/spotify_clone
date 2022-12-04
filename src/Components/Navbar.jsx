import React, {useEffect} from 'react';
import styledComponents from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import axios from 'axios';
import { MdGeneratingTokens } from 'react-icons/md';
import { reducerCases } from '../utils/Constants';
import { useStateProvider } from '../utils/StateProvider';

function Navbar() {

const [{ userInfo }] = useStateProvider();
console.log({ userInfo });

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