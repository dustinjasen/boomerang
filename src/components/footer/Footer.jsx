import './footer.scss';
import { footerImages } from '../../images';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {
    return (
        <div className="siteFooter">
            <div className="footerSpacerBottom">
                <div className="footerTop">
                    <div className="footerIcons">
                        <div className="footerIconItem">
                            <a href="tel:01743649888" className="footerIconItemLink">
                                <img src={footerImages[2].footerPhone} alt="phone" className="footerIconImage" />
                                <p>01743 649888</p>
                            </a>
                        </div>

                        <div className="footerIconItem">
                            <a href="mailto:hello@goboomerang.co.uk" className="footerIconItemLink">
                                <img src={footerImages[0].footerEmail} alt="email" className="footerIconImage" />
                                <p>hello@goboomerang.co.uk</p>
                            </a>
                        </div>

                        <div className="footerIconItem">
                            <a href="https://www.google.co.uk/maps/place/12+Yeomanry+Rd,+Shrewsbury+SY1+3EH/@52.7456173,-2.7446852,17z/data=!4m5!3m4!1s0x487a9eb9d5af8e5d:0xd7b84dc66230182e!8m2!3d52.7457179!4d-2.7426837"
                                className="footerIconItemLink">
                                <img src={footerImages[1].footerLocation} alt="location" className="footerIconImage" />
                                <p>12 Yeomanry Road, Battlefield, SY1 3EH</p>
                            </a>
                        </div>
                    </div>
                    <div className="footerBorder"></div>
                </div>

                <div className="footerMiddle">
                    <div className="footerMiddleContent">
                        <div className="footerMiddleContentItem">
                            <h3>Locations</h3>
                            <div className="footerMiddleLocations">
                                <p><strong>Head Office</strong><br />
                                    12 Yeomanry Road<br />
                                    Battlefield<br />
                                    Shrewsbury<br />
                                    SY1 3EH
                                </p>

                                <p><strong>Birmingham Office</strong><br />
                                    210 St Vincent St Ladywood<br />
                                    Birmingham<br />
                                    B16 8RP
                                </p>
                            </div>
                        </div>

                        <div className="footerMiddleContentSocialItem">
                            <div className="footerMiddleContentSocial">
                                <FacebookIcon className="footerMiddleContentSocialIcon" />
                                <p>ollow us</p>
                            </div>
                        </div>

                        <div className="footerMiddleContentItem">
                            <h3>Newsletter</h3>
                            <div className="footerInputContainer">
                                <div className="footerTextInputContainer">
                                    <input
                                        className="footerTextInput"
                                        placeholder="your email address" />
                                </div>
                                <div className="footerInputButtonContainer">
                                    <button
                                        className="newsButton">SIGN UP</button>
                                </div>
                            </div>
                            <p className="footerTextInputContainer">
                                Get the latest Boomerang news and offers directly to your
                                inbox!
                            </p>
                        </div>

                    </div>
                </div>

                <div className="footerTopNav">
                    <a href="#" >
                        <img
                            src={footerImages[3].iconGoToTop}
                            alt="top nav"
                            className="footerTopNav" />
                    </a>
                </div>

                <div className="footerBottom">
                    <div className="footerBottomContent">
                        <div className="footerBottomContentItem">
                            <p>
                                Boomerang Vehicle Rental Limited. Company No: 10749488 <br />ICO
                                number: ZA759674
                            </p>
                        </div>
                        <div className="footerBottomContentItemMid">
                            <p>© 2021 Boomerang. All rights reserved.</p>
                            <div>
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footerBottomLink"
                                >
                                    Privacy Policy </a>| <a
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footerBottomLink"
                                    >GDPR Statement </a>| <a
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footerBottomLink"
                                    >
                                    Website Terms and Conditions
                                </a>
                            </div>
                        </div>
                        <div className="footerBottomContentItem">
                            <a
                                href="https://opopmedia.co.uk/"
                                target="_blank"
                                className="footerBottomLink"
                            >Developed by
                                <img
                                    src={footerImages[4].opopLogo}
                                    alt="logo"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer