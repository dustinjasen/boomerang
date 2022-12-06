import './extras.scss';
import { extrasImages } from '../../images';
import { StartButton } from '../startButton/StartButton';

const Extras = () => {
    return (
        <section className="extrasContainer">
            <h2 className="extrasHeading">The extra benefits</h2>
            <p className="extrasSubHeading">
                By renting with Boomerang, we have you covered with the following…
            </p>
            <div className="extrasImageGrid">
                <div className="extrasGridItem">
                    <h2 className="extrasGridText">VAT</h2>
                    <img src={extrasImages[7].gridVAT} alt="" className="extrasImage" />
                </div>
                <div className="extrasGridItem">
                    <h2 className="extrasGridText">Tyre Maintenance</h2>
                    <img src={extrasImages[6].gridTyre} alt="" className="extrasImage" />
                </div>
                <div className="extrasGridItem">
                    <h2 className="extrasGridText">Servicing</h2>
                    <img src={extrasImages[8].gridWrench} alt="" className="extrasImage" />
                </div>
                <div className="extrasGridItem">
                    <h2 className="extrasGridText">Brakes and Discs</h2>
                    <img src={extrasImages[0].gridBreaks} alt="" className="extrasImage" />
                </div>
                <div className="extrasGridItem">
                    <h2 className="extrasGridText">Vehicle Plating & UBER Ready</h2>
                    <img src={extrasImages[4].gridPlates} alt="" className="extrasImage" />
                </div>
                <div className="extrasGridItem">
                    <h2 className="extrasGridText">Road Fund Licence</h2>
                    <img src={extrasImages[5].gridPlates2} alt="" className="extrasImage" />
                </div>
                <div className="extrasGridItem">
                    <h2 className="extrasGridText">Tracker</h2>
                    <img src={extrasImages[3].gridOBD} alt="" className="extrasImage" />
                </div>
                <div className="extrasGridItem">
                    <h2 className="extrasGridText">Breakdown Cover</h2>
                    <img src={extrasImages[1].gridBroken} alt="" className="extrasImage" />
                </div>
                <div className="extrasGridItem">
                    <h2 className="extrasGridText">Front Dash Cam</h2>
                    <img src={extrasImages[2].gridCam} alt="" className="extrasImage" />
                </div>
            </div>
            <div className="extrasBottom">
                <h2>
                    Hand your vehicle back anytime. There’s no commitment, no
                    financial liabilities and
                    <span className="extrasBottomAccent"> ZERO</span> exit fees.
                </h2>
            </div>
        </section>
    )
}

export default Extras