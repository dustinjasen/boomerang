import './benefitsOfHybrid.scss';
import { StartButton } from '../startButton/StartButton';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PercentIcon from '@mui/icons-material/Percent';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PublicIcon from '@mui/icons-material/Public';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';



const BenefitsOfHybrid = () => {
    return (
        <section className="benefitsOfHybridContainer">
            <div className="benefitsOfHybridWrapper">
                <h1 className="benefitsOfHybridHeading">The benefits of a hybrid taxi</h1>
                <div className="benefitsOfHybridIconContainer">
                    <div className="benefitsIconItem">
                        <FactCheckIcon className="benefitsIcon" />
                        <p className="benefitsText">Comply with clean air zones<br />- avoid charge</p>
                    </div>
                    <div className="benefitsIconItem">
                        <PercentIcon className="benefitsIcon" />
                        <p className="benefitsText">Save on road tax</p>
                    </div>
                    <div className="benefitsIconItem">
                        <LocalGasStationIcon className="benefitsIcon" />
                        <p className="benefitsText">Save on fuel</p>
                    </div>
                    <div className="benefitsIconItem">
                        <PublicIcon className="benefitsIcon" />
                        <p className="benefitsText">Better for the environment</p>
                    </div>
                    <div className="benefitsIconItem">
                        <BatteryChargingFullIcon className="benefitsIcon" />
                        <p className="benefitsText">Self-charging vehicles<br />- no charging station needed</p>
                    </div>
                </div>
                <div className="benefitsOfHybridButtonContainer">
                    <StartButton buttonType="orange" />
                </div>
            </div>
        </section>
    )
}

export default BenefitsOfHybrid