import './apply.scss';
import { applyImages } from '../../images';

const Apply = () => {
    return (
        <section className="applyContainer">

            <h2 className="applyHeading">
                Apply today, with only <span className="applyHeadingAccent">TWO</span> things!
            </h2>

            <div className="applyLicenceContainer">

                <div className="applyLicenceBoxLeft">
                    <img src={applyImages[0].drivers} alt="" className="applyLicenceBoxImage" />
                    <div className="applyLicenceBoxText">
                        <h2 className="applyLicenceBoxTextHeading">1. Driving Licence</h2>
                        <p className="applyLicenceBoxTextDescription">
                            In order to drive a Boomerang vehicle or any other private
                            hire / non-standard private hire, you
                            <strong> MUST</strong> hold a valid UK Driving Licence.
                        </p>
                    </div>
                </div>

                <div className="applyLicenceBoxRight">
                    <img src={applyImages[1].taxi} alt="" className="applyLicenceBoxImage" />
                    <div className="applyLicenceBoxText">
                        <h2 className="applyLicenceBoxTextHeading">2. Taxi Licence</h2>
                        <p className="applyLicenceBoxTextDescription">
                            This is the licence that allows you to operate and work as a
                            taxi driver in the UK. Your licence may look similar to the
                            example (top left).
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Apply