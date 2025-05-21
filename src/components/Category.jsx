import styled from "styled-components";

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
  const categories = [
    { img: '/imgs/category/clothes.png', title: 'Clothes' },
    { img: '/imgs/category/electronic.png', title: 'Electronics' },
    { img: '/imgs/category/furniture.png', title: 'Furniture' },
    { img: '/imgs/category/shoes.png', title: 'Shoes' },
    { img: '/imgs/category/phone.png', title: 'Smartphones' },
    { img: '/imgs/category/camera.png', title: 'Cameras' }
  ]

  return (
    <CategoryContainer>
      <h3>Browse By Category</h3>
      <div className="cards">
        {categories.map((category, i) => (
          <CategoryCard key={i} imgsrc={category.img} title={category.title} />
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