import './landing.scss';
import { landingImages } from '../../images';
import { StartButton } from '../startButton/StartButton';

const Landing = () => {
    return (
        <div className="landingContainer">

            <img
                src={landingImages[4].boomerang}
                alt=""
                className="boomerangOnly" />


            <div className="openingBox">
                <img
                    src={landingImages[5].boomerangText}
                    alt=""
                    className="boomerangText" />
            </div>

            <img
                src={landingImages[0].orangeStripLander}
                alt="background screen"
                className="landingImage" />
            <img
                src={landingImages[1].landingCars}
                alt="two cars"
                className="landingImageCars" />

            <section className="landingContent">

                <div className="topBar">
                    <div className="navTabs">
                        <a href="#" className="navTabItem">Home</a>
                        <a href="#ourCarsContainer" className="navTabItem">Our cars</a>
                        <a href="#FAQ" className="navTabItem">FAQs</a>
                        <a href="#contactUs" className="navTabItem">Contact us</a>
                    </div>
                </div>

                <div className="landingText">
                    <h1 className="landingTextHeading">
                        The <span className="customUnderline">Cheapest</span> Taxi<br />
                        You’ve <span className="customUnderline">Ever</span> Bought.
                    </h1>
                    <h5 className="landingTextDescription">
                        With Boomerang, rent a clean-air-compliant hybrid taxi from
                        us, then keep it for just £1!
                    </h5>
                    <div className="landingTextButtonContainer">
                        <StartButton buttonType='blue' />
                    </div>
                </div>

                <div className="landingQuoteContainer">
                    <p className="landingQuoteText">
                        “To all taxi drivers out there…This is the ‘best route’ for renting your vehicle”</p>
                    <img src={landingImages[3].telegraph} alt="telegraph logo" className="landingQuoteImg" />
                </div>

            </section>
        </div >
    )
}

export default Landing