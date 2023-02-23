import Pages from "./pages/Pages";
// import Cuisine from "./pages/Cuisine";
import { Link , BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import {GiKnifeFork} from 'react-icons/gi'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav >
        <GiKnifeFork />
        <Logo to={'/'}>Foody Cart</Logo>
      </Nav>
      <Search/>
      <Category />
      <Pages />

    </BrowserRouter>
    </div>

  );
}

const Logo = styled(Link)`
  text-decoration: none;
  margin: 0rem 1rem;
  font-size: 2.5rem;
  font-weight: 400;
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

const Nav = styled.div`
  margin-top: 2rem;
  padding: 0.5rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(35deg  , #60606d , #313131);
  border-radius: 10px;
  width: 25%;
  color: white;
  svg{
    font-size: 2rem;
  }
`
export default App;
