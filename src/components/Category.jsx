import styled from "styled-components";
import { categories } from "./data/categories";

const CategoryContainer = styled.div`
  padding: 80px 160px;
  background-color: #FAFAFA;

  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 1%;
    margin-bottom: 32px;
  }

  .cards {
    display: flex;
    justify-content: space-between;
  }
`

function Category() {
  return (
    <CategoryContainer>
      <h3>Browse By Category</h3>
      <div className="cards">
        {categories.map(({id, img, title}) => (
          id === 0 ? '' : <CategoryCard key={id} imgsrc={img} title={title} />
        ))}
      </div>
    </CategoryContainer>
  );
}

const StyledCard = styled.button`
  width: 160px;
  height: 128px;
  padding: 24px 54px;
  background-color: #ededed;
  border-radius: 15px;
  transition: background-color .3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #dddddd;
  }

  img {
    width: 48px;
    height: 48px;
    padding: 4px;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
  }
`
function CategoryCard({ imgsrc, title }) {
  return (
    <StyledCard>
      <img src={imgsrc} alt={title} />
      <p>{title}</p>
    </StyledCard>
  )
}

export default Category;