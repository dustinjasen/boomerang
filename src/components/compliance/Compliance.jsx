import './compliance.scss';
import { complianceImg } from '../../images';
import { StartButton } from '../startButton/StartButton';

const Compliance = () => {
    return (
        <section className="complianceBlackStripContainer">

            <img 
            src={complianceImg[0].blackStrip} 
            alt="compliance background" 
            className="complianceBlackStripBackground" />

            <div className="complianceBlackStripWrapper">
                <h2 className="complianceBlackStripHeading">Why does my taxi need to be compliant?</h2>
                <p className="complianceBlackStripText">
                    Clean air zones across the UK aim to reduce the number of
                    polluting vehicles on the nation's roads.
                </p>
                <p className="complianceBlackStripText">
                    Any taxi that fails to meet emissions standards must pay a
                    daily charge to drive anywhere in major <br />cities such as
                    London and Manchester.
                </p>
                <p className="complianceBlackStripText">
                    You won’t be charged in these zones with any Boomerang
                    vehicle.
                </p>
            </div>

            <div className="complianceBlackStripButton">
                <StartButton buttonType="blue"/>
            </div>
        </section>
    )
}

export default Compliance