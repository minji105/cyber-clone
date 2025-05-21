import styled from "styled-components";

const BuyNowButton = styled.button`
  background-color: #000;
  width: 188px;
  height: 48px;
  padding: 12px;
  border: 1px #000 solid;
  border-radius: 8px;
  color: #fff;
  transition: all .3s ease;

  &:hover {
    background-color: transparent;
    color: #000;
  }
`

function BuyNow() {
  return (
    <BuyNowButton>
      Buy Now
    </BuyNowButton>
  );
}

export default BuyNow;