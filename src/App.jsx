import "./App.css";

import headerLogo from "/public/headerLogo.png";
import heroImg from "../public/topBg.png";
import padsImg from "../public/pads.png"
import standsImg from "../public/stands.png"
import phone from "../public/iphone.png"
import nout from "../public/nout.png"
import mac from "../public/mac.png"
import tabPhone from "../public/tabPhone.png"
import homeHero from "../public/homeHero.png"
import hardImg from "../public/hard.png"

const laptopArr = [
  {
    id: 1,
    txt: "Desk Pads",
    img: padsImg,
  },
  {
    id: 2,
    txt: "Laptop Stands",
    img: standsImg,
  },
]

const technics = [

  {
    id: 1,
    title: "Walnut MagSafe Stand",
    price: 120,
    img: phone
  },

  {
    id: 3,
    title: "Walnut Laptop Riser",
    price: 150,
    img: nout
  },
  {
    id: 3,
    title: "Walnut iPad Stand",
    price: 80,
    img: tabPhone
  },
  {
    id: 4,
    title: "Walnut Monitor Stand",
    price: 100,
    img: mac
  },

]

console.log(laptopArr);

function App() {
  return (
    <>
      <Header />
      <Hero />
      <DesignTitle />
      <div className="designSectionMain">
        {laptopArr.map((item, index) => (
          <DesignInspires key={index} item={item} />
        ))}
      </div>
      <FeaturedProductTxt />

      <div className="FeaturedProductsMainBox">
        {technics.map((item, index) => (<FeaturedProducts key={index} item={item} />))
        }</div>

      <OfficeHero />
      <MadeTheHardWay />
      <MakeWork />

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

function DesignTitle() {
  return (
    <section className="designSection">
      <h1>Design Inspires</h1>
      <p>Build your dream workspace, so you can get your best work done.</p>
      <a href="#"> GET STARTED</a>
    </section>
  );
}
function DesignInspires({ item }) {
  return (
    <>
      <div className="laptopBox">
        <div className="item">
          <img src={item.img} alt="" />
          <p>{item.txt}</p>
          <a href="#">LEARN MORE</a>
        </div>
      </div>
    </>
  );
}


function FeaturedProductTxt() {
  return (
    <section className="productTxt">
      <h1>Featured Products</h1>
      <p>See What’s Trending Right Now</p>
      <div className="sliders">
        <span></span><span></span><span></span>
      </div>
    </section>
  )
}


function FeaturedProducts({ item }) {

  return (
    <div className="elem"><img src={item.img} alt="" />
      <p>{item.title}</p>
      <p>$ {item.price}</p>
    </div>
  )

}
function OfficeHero() {
  return (
    <>
      <div className="mainHeroBox officHero">
        <div className="heroBg">
          <img src={homeHero} alt="" />
        </div>
        <div className="titles">
          <h1 className="homeTitle">Home Office Inspiration</h1>
          <p>Working from home can be a challenge—see some creative solutions to get it just right.</p>
          <a href="#">LEARN MORE</a>
        </div>
      </div>
    </>
  );
}



function MadeTheHardWay() {
  return (
    <section className="productTxt">
      <h1>Made The Hard Way</h1>
      <p className="theHardDesc">Our signature craftsmanship has been honed over a decade of manufacturing innovation here in Portland, Oregon. We combine the skills of our small in-house team with the collective strength of collaborators throughout the US to deliver quality products worth investing in.</p>
      <img src={hardImg} alt="" />
    </section>


  )
}

function MakeWork() {
  return (
    <section className="productTxt">
      <h1>Make Work Meaningful</h1>
      <p className="theHardDesc"> We're here because we believe that your work deserves the best. A team that loves working together is the magic that makes it all happen.</p>
    </section>)
}


function MakeWorkGallery(params) {
  return(

    
  )
}

export default App;
