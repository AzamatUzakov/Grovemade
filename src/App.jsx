import "./App.css";

import headerLogo from "/public/headerLogo.png";
import heroImg from "../public/topBg.png";
import padsImg from "../public/pads.png";
import standsImg from "../public/stands.png";

const laptopArr = [
  {
    id: 1,
    txt: "Desk Pads",
  },
  {
    id: 2,
    txt: "Desk Pads",
  },
];

function App() {
  return (
    <>
      <Header />
      <Hero />
      <DesignInspires />
    </>
  );
}

function Header() {
  return (
    <>
      <header>
        <div className="leftNav">
          <p>Shop</p> <p>Explore</p>
        </div>

        <div className="headerLogo">
          <img src={headerLogo} alt="headerLogo" />
        </div>

        <p className="rightNav">My Cart</p>
      </header>
    </>
  );
}

function Hero() {
  return (
    <>
      <div className="mainHeroBox">
        <div className="heroBg">
          <img src={heroImg} alt="" />
        </div>
        <div className="titles">
          <h1>The Desk Shelf System</h1>
          <p>Available in Walnut or Maple</p>
          <a href="#">LEARN MORE</a>
        </div>
      </div>
    </>
  );
}

function DesignInspires() {
  return (
    <>
      <section className="designSection">
        <h1>Design Inspires</h1>
        <p>Build your dream workspace, so you can get your best work done.</p>
        <p>GET STARTED</p>

        <div className="laptopBox">
          <div className="item">
            <img src={padsImg} alt="" /> <p>Desk Pads</p>{" "}
            <a href="#">LEARN MORE</a>
          </div>
          <div className="item">
            <img src={standsImg} alt="" /> <p>Laptop Stands</p>{" "}
            <a href="#">LEARN MORE</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
