import styled from "styled-components";
import ShopNow from "./buttons/ShopNow";
import { useEffect, useState } from "react";

const Banner = styled.section`
  width: 100%;
  height: 552px;
  display: flex;
  justify-content: space-between;

  &>div {
    flex-basis: 25%;
  }
`

function CategoryBanner() {
  const [items, setItems] = useState([
    { id: 1, title: "iphone 5s" },
    { id: 2, title: "MacBook Pro" },
    { id: 3, title: "AirPods Max" },
    { id: 4, title: "Asus Zenbook Pro" },
  ]);

  useEffect(() => {
    Promise.all(
      items.map(async (item) => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${item.title}`);
        const data = await res.json();
        return {
          ...item,
          thumbnail: data.products[0].thumbnail
        };
      })
    ).then(setItems);
  }, []);

  return (
    <Banner>
      {items.map(item => (
        <Card key={item.id} id={item.id} title={item.title} img={item.thumbnail} />
      ))}
    </Banner>
  );
}

const StyledCard = styled.div`
  padding: 56px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;

  .imgBox {
    width: 100%;
    background-color: #cccfd15a;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      transform: scale(1.1);
      transition: all .3s ease;
    }
  }

  &>p {
    font-weight: 300;
    font-size: 33px;
    line-height: 48px;
  }

  &:nth-child(2) {
    background-color: #F9F9F9;
  }
  &:nth-child(3) {
    background-color: #EAEAEA;
  }
  &:nth-child(4) {
    background-color: #2C2C2C;
    color: #fff;
  }

  &:hover .imgBox>img {
    transform: scale(1.2);
  }
`

function Card({ id, title, img }) {
  return (
    <StyledCard>
      <div className="imgBox">
        <img src={img} alt={title} />
      </div>
      <p>{title}</p>
      <ShopNow color={id === 4 ? '#fff' : ''} />
    </StyledCard>
  )
}

export default CategoryBanner;