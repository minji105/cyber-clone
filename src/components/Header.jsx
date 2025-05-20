import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 88px;
  padding: 16px 160px;
  border-bottom: 1px solid #B5B5B5;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchField = styled.div`
  background-color: #F5F5F5;
  width: 372px;
  height: 56px;
  padding: 16px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;

  img {
    padding-right: 8px;
  }

  input {
    height: 18px;
    width: 100%;
    border: none;
    background-color: transparent;
    font-weight: 500;
    font-size: 14px;
    opacity: .5;
    outline: none;
  }
`

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 52px;
  }

  li {
    font-weight: 500;
    color: #A4A4A4;
    transition: color .3s ease;
    cursor: pointer;

    &.active {
      color: #000;
    }

    &:hover {
      color: #000;
    }
  }
`

const Icons = styled.div`
  height: 32px;
  display: flex;
  gap: 24px;

  img {
    cursor: pointer;
  }
`

function Header() {
  return (
    <HeaderContainer>
      <img src="./imgs/logo-black.png" alt="logo" width={96} />
      <SearchField>
        <img src="./imgs/search-icon.png" alt="search icon" />
        <input type="text" placeholder="Search" />
      </SearchField>
      <Nav>
        <ul>
          <li className="active">Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
      </Nav>
      <Icons>
        <img src="/imgs/favorites-icon.png" alt="favorites icon" />
        <img src="/imgs/cart-icon.png" alt="cart icon" />
        <img src="/imgs/user-icon.png" alt="user icon" />
      </Icons>
    </HeaderContainer>
  );
}

export default Header