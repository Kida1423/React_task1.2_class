import Header from "./componrnts/header/Header";
import Promo from "./componrnts/Promo/Promo";
import Brands from "./componrnts/brands/Brands";
import Arrivals from "./componrnts/arrivals/Arrivals";
import Banner from "./componrnts/Banner/Banner";
import Youngs from "./componrnts/youngs_card/Youngs_card"; // Исправлено название импорта
import Community from "./componrnts/Community/Community";
import Footer from "./componrnts/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Banner />
      <Youngs />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
