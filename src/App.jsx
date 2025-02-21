import "./App.css";
import "./media.css"
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
import bilbordLogo from "../public/bilbordLogo.png"
import l1 from "../public/l1.png"
import l2 from "../public/r2.png"
import l3 from "../public/l3.png"
import l4 from "../public/l4.png"
import l5 from "../public/l5.png"
import l6 from "../public/l6.png"
import l7 from "../public/l7.png"
import l8 from "../public/l8.png"
import l9 from "../public/l9.png"
import l10 from "../public/l10.png"
import l11 from "../public/l11.png"
import l12 from "../public/l12.png"
import l13 from "../public/l13.png"
import l14 from "../public/l14.png"
import l15 from "../public/l15.png"
import l16 from "../public/l16.png"
import l17 from "../public/l17.png"
//import l18 from "../public/l18.png"
import l19 from "../public/l19.png"
import l20 from "../public/l20.png"
import l21 from "../public/l21.png"
import l22 from "../public/l22.png"
import l23 from "../public/l23.png"
import l24 from "../public/l24.png"
import l25 from "../public/l25.png"



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
const gallery = [
  {
    img: l1
  },
  {
    img: l2
  }, {
    img: l3
  }, {
    img: l4
  }, {
    img: l5
  }, {
    img: l6
  }, {
    img: l7
  }, {
    img: l8
  }, {
    img: l9
  }, {
    img: l10
  }, {
    img: l11
  }, {
    img: l12
  }, {
    img: l13
  }, {
    img: l14
  }, {
    img: l15
  }, {
    img: l16
  }, {
    img: l17

  }, {
    img: l19
  }, {
    img: l20
  }, {
    img: l21
  }, {
    img: l22
  }, {
    img: l23
  }, {
    img: l24
  }, {
    img: l25
  }
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
      <div className="galleryBox">
        {gallery.map((item, index) => (<MakeWorkGallery key={index} item={item} />))}
      </div>

      <JoinUs />
      <Footer />
    </>
  );
}

function Header() {
  return (

    <header id="topScrool">
      <div className="leftNav">
        <p>Shop</p> <p>Explore</p>
      </div>

      <div className="headerLogo">
        <img src={headerLogo} alt="headerLogo" />
      </div>

      <p className="rightNav">My Cart</p>
    </header>

  );
}

function Hero() {
  return (

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

    <div className="laptopBox">
      <div className="item">
        <img src={item.img} alt="" />
        <p>{item.txt}</p>
        <a href="#">LEARN MORE</a>
      </div>
    </div>

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


function MakeWorkGallery({ item }) {
  return (
    <div>
      <img src={item.img} alt="" />
    </div>

  )
}


function JoinUs() {
  return (
    <section className="joinUs">
      <h1>We Hope You'll Join Us</h1>
      <p>READ MORE ABOUT OUR STORY</p>

      <div className="bilbordBox">
        <img src={bilbordLogo} alt="" />
        <h3>Design Inspires</h3>
        <p>Build your dream workspace, so you can get your best work done.</p>
      </div>
    </section>
  )
}


function Footer() {
  return (
    <footer>
      <div className="footerNavBox">
        <div className="leftFooterNav">
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Journal</a>
          <a href="#">Support</a>
          <a href="#">COVID-19 Info</a>
          <a href="#">Order Status</a>
          <a href="#">Corporate Sales</a>
        </div>

        <div className="rightFooterInfo">
          <h4>Newsletter Signup</h4>
          <p>Sign up to our Newsletter to hear about new product releases, learn about our design process, and everything else going on behind the scenes at Grovemade.</p>
          <hr />
        </div>
      </div>

      <a href="#topScrool"> <button className="goUpBtn">GO <br /> UP</button></a>

      <div className="bottomInfo">
        <p>©2020 Grovemade</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Site by Department</p>
      </div>
    </footer>
  )
}

export default App;
