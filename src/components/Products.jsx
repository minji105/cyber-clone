import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const ProductWrapper = styled.div`
  padding: 56px 160px;
`
const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`
const ProductTag = styled.ul`
  margin-bottom: 32px;
  display: flex;
  gap: 32px;

  li {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: #8B8B8B;
    cursor: pointer;

    background-image: linear-gradient(to right, #000 0, #000 100%);
    background-position: 0 100%;
    background-size: 0 2px;
    background-repeat: no-repeat;
    transition: all .3s ease;

    &.active {
      color: #000;
      border-bottom: 2px solid #000;
      background-image: none;
    }
    &:not(.active):hover {
      color: #000;
      background-size: 100% 2px;
    }
  }
`
const categories = [
  { key: "all", label: "All" },
  { key: "mens-shirts", label: "Clothes" },
  { key: "laptops", label: "Electronics" },
  { key: "furniture", label: "Furniture" },
  { key: "mens-shoes", label: "Shoes" },
  { key: "smartphones", label: "Smartphones" },
  { key: "mobile-accessories", label: "Cameras" }
];

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState('all');

  useEffect(() => {
    const TOTAL = 16;

    const fetchProducts = async () => {
      let result = [];

      for (let i = 1; i < categories.length; i++) {
        if (result.length >= TOTAL) break;

        const category = categories[i];
        const count = Math.floor(Math.random() * 5) + 1;
        const res = await fetch(`https://dummyjson.com/products/category/${category.key}?limit=${count}`);
        const data = await res.json();

        result.push(...data.products);
      }

      result = result.sort(() => Math.random() - 0.5);
      setAllProducts(result);
      setProducts(result);
    }

    fetchProducts();
  }, []);

  const handleFiltering = (tag) => {
    let filtered = allProducts.filter((item) => item.category === tag);
    setProducts(filtered);
    setSelected(tag);
  }

  const handleAllTag = () => {
    setProducts(allProducts);
    setSelected('all');
  }

  return (
    <ProductWrapper>
      <ProductTag>
        {categories.map(({ key, label }) => (
          <li
            key={key}
            onClick={() => key === 'all' ? handleAllTag() : handleFiltering(key)}
            className={selected === key ? 'active' : ''}
          >
            {label}
          </li>
        ))}
      </ProductTag>
      <ProductsContainer>
        {products.map(product => (
          <ProductCard
            key={product.id}
            img={product.images[0]}
            title={product.title}
            price={product.price}
          />
        ))}
      </ProductsContainer>
    </ProductWrapper>
  );
}

export default Products;