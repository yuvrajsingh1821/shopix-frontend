import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return <div className="hero-banner">
        <div className="text-content">
            <h1>SALES</h1>
            <p>Buy All Products At Affordable Rates</p>
           <div className="ctas">
              <button className="banner-cta">Read More</button>
              <button className="banner-cta v2">Shop Now</button>
           </div>

        </div>

        <div className="banner-img">
            <img className="banner-img" src={BannerImg} />
        </div>


    </div>;
};

export default Banner;
