import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
    return (
        <div>
            <Hero/>
            <LeftSection
                imageURL="/media/images/kite.png"
                productName="Kite"
                productDescription="Our flagship trading platform, Kite, offers a seamless trading experience with advanced charting tools and real-time data."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />
            <RightSection
                imageURL="/media/images/console.png"
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMore="#"
            />

            <LeftSection
                imageURL="/media/images/coin.png"
                productName="Coin"
                productDescription="Coin is our investment platform that allows users to invest in mutual funds and other financial products with ease."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />

            <RightSection
                imageURL="/media/images/kiteconnect.png"
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMore="#"
            />

            <LeftSection
                imageURL="/media/images/varsity.png"
                productName="Varsity"
                productDescription="Varsity is our educational platform that provides comprehensive resources for learning about trading and investing."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />
            <Universe/>
        </div>
    );
}

export default ProductPage;
