import Banner from "../components/Banner";
import Category from "../components/Category";
import Products from "../components/Products";
import CategoryBanner from "../components/ItemBanner";

function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <CategoryBanner />
    </div>
  );
}

export default Home;