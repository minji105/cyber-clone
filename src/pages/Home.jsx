import Banner from "../components/Banner";
import Category from "../components/Category";
import Products from "../components/Products";
import CategoryBanner from "../components/ItemBanner";
import AdBanner from "../components/AdBanner";

function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <CategoryBanner />
      <AdBanner />
    </div>
  );
}

export default Home;