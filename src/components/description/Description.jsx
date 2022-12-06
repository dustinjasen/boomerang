import './description.scss';
import { descriptionImages } from '../../images';
import { StartButton } from '../startButton/StartButton';

const Description = () => {
    return (
        <section className="descriptionContainer">
            <div className="descriptionLogoContainer">
                <img src={descriptionImages[0].rangDesc} alt="" className="descriptionLogoImage" />
            </div>

            <div className="descriptionText">
                <h1>
                    Your new taxi... for
                    <span className="descriptionTextAccentOne"> a pound</span>
                    <span className="descriptionTextAccentTwo">?</span>
                </h1>
                <p>
                    Yes, you read that right! Boomerang gives
                    <strong> taxi drivers across the UK</strong> an opportunity to rent a hybrid vehicle -
                    <strong> in line with the nation’s clean air zones</strong>
                    - and<strong> buy it for just £1 </strong>at the end of your term!
                </p>
                <p>
                    All of our vehicles <strong>comply with the Government’s new environmental strategy</strong>, and there’s never been an opportunity to rent a brand new
                    taxi and have the ability to purchase it for <strong>less than the price of a takeaway coffee!</strong>
                </p>
                <div className="descriptionButtonContainer">
                    <StartButton buttonType='orange' />
                </div>
            </div>
        </section>
    )
}

export default Description