import './howRangWorks.scss';
import { howRangWorks } from '../../images';
import { StartButton } from '../startButton/StartButton';

const HowRangWorks = () => {
    return (
        <section className="howRangWorksContainer">
            <img src={howRangWorks[3].orangeStrip} alt="" className="howRangWorksBackground" />
            <div className="howRangWorksWrapper">
                <h2 className="howRangWorksStripHeading">How Boomerang Works</h2>
                <div className="howRangWorksStripRow">
                    <div className="howRangWorksStripItem">
                        <img className="howRangWorksStripItemIcon" src={howRangWorks[0].singleRang} />
                        <div className="howRangWorksStripItemText">
                            <h2 className="stripItemHeading">Complete our simple form</h2>
                            <h5 className="stripItemDescription">
                                Simply complete our qualifying application to see if
                                you can rent a taxi from us.
                            </h5>
                        </div>
                    </div>
                    <div className="howRangWorksStripItem">
                        <img className="howRangWorksStripItemIcon" src={howRangWorks[1].doubleRang} />
                        <div className="howRangWorksStripItemText">
                            <h2 className="stripItemHeading">Rent your new taxi</h2>
                            <h5 className="stripItemDescription">
                                If you qualify, simply rent your taxi from us every
                                week for 54 months.
                            </h5>
                        </div>
                    </div>
                    <div className="howRangWorksStripItem">
                        <img className="howRangWorksStripItemIcon" src={howRangWorks[2].tripleRang} />
                        <div className="howRangWorksStripItemText">
                            <h2 className="stripItemHeading">Buy for just £1!</h2>
                            <h5 className="stripItemDescription">
                                Once your term has finished with Boomerang, you can
                                then buy your taxi for just £1!
                            </h5>
                        </div>
                    </div>

                </div>
                <div className="howRangWorksStripButtonContainer">
                    <StartButton buttonType="blue" />
                </div>
            </div>

        </section>
    )
}

export default HowRangWorks