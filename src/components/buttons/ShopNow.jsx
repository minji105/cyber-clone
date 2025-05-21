import styled from "styled-components";

const ShopNowButton = styled.button`
  padding: 16px 56px;
  color: ${(props) => props.color || '#000'};
  border: 1px solid ${(props) => props.color || '#000'};
  border-radius: 6px;
  transition: all .3s ease;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.color ? '#000' : '#fff'};
    background-color: ${(props) => props.color || '#000'};
  }
`

function ShopNow({color}) {
  return (
    <ShopNowButton color={color}>
      Shop Now
    </ShopNowButton>
  );
}

export default ShopNow;