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

const Container = styledComponents.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem;
height: 15vh;
position: sticky;
top: 0;
transition: 0.3s ease-in-out;
background-color: none;
.search-bar{
  background-color: white;
  width: 30%;
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  input{
    border: none;
    height: 2rem;
    width: 100%;
  &:focus{
    outline: none;
  }
  }
  
}`;