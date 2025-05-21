import styled from "styled-components";
import BuyNow from "./buttons/BuyNow";
import { useState } from "react";

const StyledProductCard = styled.div`
  background-color: #f6f6f6;
  height: 432px;
  padding: 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  .productImg {
    width: 200px;
    height: 160px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .3s ease;
    }
  }

  &:hover .productImg>img {
    transform: scale(1.1);
  }

  .productInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    line-height: 24px;
  }
  .title {
    text-align: center;
    font-weight: 500;
    font-size: 16px;
  }
  .price {
    font-weight: 600;
    font-size: 24px;
  }
`
const HeartIcon = styled.div`
  width: 100%;
  height: 32px;
  position: relative;

  &>img {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`

function ProductCard({ img, title, price }) {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked((prev) => !prev);
  }

  return (
    <StyledProductCard>
      <HeartIcon>
        <img
          onClick={handleLikeToggle}
          src={liked ? "/imgs/icon/Like active.png" : "/imgs/icon/Like.png"}
          alt="heart icon" />
      </HeartIcon>
      <div className="productImg">
        <img src={img} alt={title} />
      </div>
      <div className="productInfo">
        <p className="title">{title}</p>
        <p className="price">${price}</p>
        <BuyNow />
      </div>
    </StyledProductCard>
  );
}

export default ProductCard;