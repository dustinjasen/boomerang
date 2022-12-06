import './reviews.scss';
import { StartButton } from '../startButton/StartButton';
import { reviewImg } from '../../images';

const Reviews = () => {
    return (
        <section className="reviewsContainer">

            <div className="reviewsHeadingContainer">
                <h2 className="reviewsHeading">What taxi drivers are saying</h2>
                <h5 className="reviewsSubHeading">
                    Don’t just take our word for it, see why Boomerang is the go-to
                    provider for taxi rental across the UK!
                </h5>
            </div>

            <div className="reviewsBoxContainer">
                <div className="reviewBoxItem">
                    <div className="reviewBoxTop">
                        <p className="reviewBoxTopText">
                            “Boomerang is the ultimate for cabbies. Really
                            friendly people and couldn’t believe how quick the
                            process was in renting a cab. The fact I can buy
                            my car for £1 at the end of my term is just
                            unreal! Thanks a million”
                        </p>
                        <p className="reviewBoxTopName"><strong>Gavin, Taxi Driver in London</strong></p>
                    </div>
                    <img src={reviewImg[1].reviewGavin} alt="" className="reviewBoxImage" />
                </div>

                <div className="reviewBoxItem">
                    <div className="reviewBoxTop">
                        <p className="reviewBoxTopText">
                            “Fantastic service from Boomerang. Quick and easy
                            process and I was able to rent a taxi in no time
                            to start making money!”
                        </p>
                        <p className="reviewBoxTopName"><strong>Grant, Taxi Driver in Manchester</strong></p>
                    </div>
                    <img src={reviewImg[2].reviewGrant} alt="" className="reviewBoxImage" />
                </div>

                <div className="reviewBoxItem">
                    <div className="reviewBoxTop">
                        <p className="reviewBoxTopText">
                            “Quick. Simple. Easy. A few checks and you’re in
                            with renting a taxi. Really pleased with the term,
                            plus the £1 payment at the end is just brilliant
                            and really unique…”
                        </p>
                        <p className="reviewBoxTopName"><strong>Carl, Taxi Driver in Stockport</strong></p>
                    </div>
                    <img src={reviewImg[0].reviewCarl} alt="" className="reviewBoxImage" />
                </div>

            </div>

            <div className="reviewsButton">
                <StartButton buttonType="orange" />
            </div>
        </section>
    )
}

export default Reviews