import './ourCars.scss';
import { useState } from "react";
import { StartButton } from '../startButton/StartButton';
import { ourCarImages } from '../../images';
import {
    ArrowCircleLeftOutlined,
    ArrowCircleRightOutlined,
} from "@mui/icons-material";
import AutoModeIcon from '@mui/icons-material/AutoMode';
import SpeedIcon from '@mui/icons-material/Speed';

const OurCars = () => {
    const [carSlider, setCarSlider] = useState(0);

    const handleCarSlider = (direction) => {
        let newImage;

        const cars = ourCarImages.length;
        const carsMax = cars - 1;

        if (direction === "left") {
            newImage = carSlider <= 0 ? carsMax : carSlider - 1;
        } else {
            newImage = carSlider >= carsMax ? 0 : carSlider + 1;
        };

        setCarSlider(newImage);

    };
    return (
        <section id="ourCarsContainer">
            <h2 className="ourCarsHeading">
                Check out our hybrid taxis
            </h2>

            <div className="ourCarsSlider">
                <div className="carSliderWrapper">
                    <ArrowCircleLeftOutlined className="goLeft"
                        onClick={() => handleCarSlider("left")} />
                    <ArrowCircleRightOutlined className="goRight"
                        onClick={() => handleCarSlider("other")} />
                    <div className="carSlider">
                        <div className="slideDetails">
                            <p className="slideHeading">{ourCarImages[carSlider].heading}</p>
                            <p className="slideText"><strong>Term: </strong>{ourCarImages[carSlider].term}</p>
                            <p className="slideText"><strong>Initial: </strong>{ourCarImages[carSlider].initial}</p>
                            <p className="slideText"><strong>Deposit: </strong>{ourCarImages[carSlider].deposit}</p>
                            <p className="slidePayment">{ourCarImages[carSlider].pay}</p>
                            <div className="silderIcons">
                                <div className="sliderIconItem">
                                    <SpeedIcon className="silderIcon" />
                                    <p>*Uncapped milage</p>
                                </div>
                                <div className="sliderIconItem">
                                    <AutoModeIcon className="silderIcon" />
                                    <p>Automatic</p>
                                </div>
                            </div>
                        </div>
                        <img src={ourCarImages[carSlider].image} className="carSliderImage" alt="car slides" />

                    </div>
                </div>
            </div>
            <p className="ourCarsMilageNote">*Uncapped mileage is up to 800 miles per week</p>
            <div className="ourCarsButtonContainer">
                <StartButton buttonType="enquire" />
            </div>
        </section>
    )
}

export default OurCars