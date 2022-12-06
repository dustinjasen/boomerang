import './faq.scss';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';

const FAQ = () => {
    return (
        <section id="FAQ" className="FAQContainer">
            <h1 className="FAQHeading">Frequently asked questions</h1>
            <Accordion allowZeroExpanded className="FAQAccordion">
                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <AccordionItemState>
                                {({ expanded }) => (expanded
                                    ? <div className="FAQAccordButtonOpen">
                                        <span className="buttonText">1. How long is the term?</span>
                                        <span className="openClose">-</span>
                                    </div>
                                    : <div className="FAQAccordButtonClosed">
                                        <span className="buttonText">1. How long is the term?</span>
                                        <span className="openClose">+</span>
                                    </div>)}
                            </AccordionItemState>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="FAQAccordionContent">
                        <p>
                            Our Rent to Buy scheme is 54 months (4.5 years),
                            and then you have the option to purchase the vehicle for just £1!
                            (Yes, one pound, a quid, 100 pennies!)
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <AccordionItemState>
                                {({ expanded }) => (expanded
                                    ? <div className="FAQAccordButtonOpen">
                                        <span className="buttonText">2. How long does it take to get a car?</span>
                                        <span className="openClose">-</span>
                                    </div>
                                    : <div className="FAQAccordButtonClosed">
                                        <span className="buttonText">2. How long does it take to get a car?</span>
                                        <span className="openClose">+</span>
                                    </div>)}
                            </AccordionItemState>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="FAQAccordionContent">
                        <p>
                            Our aim is to provide you a vehicle within 14 days.
                            Vehicles are supplied brand new, too!
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton className="FAQAccordButton">
                            <AccordionItemState>
                                {({ expanded }) => (expanded
                                    ? <div className="FAQAccordButtonOpen">
                                        <span className="buttonText">3. How much will it cost to rent a taxi?</span>
                                        <span className="openClose">-</span>
                                    </div>
                                    : <div className="FAQAccordButtonClosed">
                                        <span className="buttonText">3. How much will it cost to rent a taxi?</span>
                                        <span className="openClose">+</span>
                                    </div>)}
                            </AccordionItemState>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="FAQAccordionContent">
                        <p>
                            We charge a rate of £230 per week for rental of our vehicles.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <AccordionItemState>
                                {({ expanded }) => (expanded
                                    ? <div className="FAQAccordButtonOpen">
                                        <span className="buttonText">4. What happens if I want to return my vehicle?</span>
                                        <span className="openClose">-</span>
                                    </div>
                                    : <div className="FAQAccordButtonClosed">
                                        <span className="buttonText">4. What happens if I want to return my vehicle?</span>
                                        <span className="openClose">+</span>
                                    </div>)}
                            </AccordionItemState>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="FAQAccordionContent">
                        <p>
                            No problem at all! Just give us four weeks notice and
                            then return the vehicle to your closest renting location.
                            There are no charges or fees for bringing the vehicle back early.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <AccordionItemState>
                                {({ expanded }) => (expanded
                                    ? <div className="FAQAccordButtonOpen">
                                        <span className="buttonText">5. Will I own the PCO car at the end of the payment plan?</span>
                                        <span className="openClose">-</span>
                                    </div>
                                    : <div className="FAQAccordButtonClosed">
                                        <span className="buttonText">5. Will I own the PCO car at the end of the payment plan?</span>
                                        <span className="openClose">+</span>
                                    </div>)}
                            </AccordionItemState>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="FAQAccordionContent">
                        <p>
                            Yes! Once you have rented the vehicle for 54 months, you have the option to purchase the vehicle for £1,
                            hand it back, or continue to rent. Terms and Conditions do apply.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <AccordionItemState>
                                {({ expanded }) => (expanded
                                    ? <div className="FAQAccordButtonOpen">
                                        <span className="buttonText">6. Is insurance included?</span>
                                        <span className="openClose">-</span>
                                    </div>
                                    : <div className="FAQAccordButtonClosed">
                                        <span className="buttonText">6. Is insurance included?</span>
                                        <span className="openClose">+</span>
                                    </div>)}
                            </AccordionItemState>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="FAQAccordionContent">
                        <p>
                            Sorry! This is the only thing we don’t provide. Drivers will be required to arrange their own
                            PCO-compliant comprehensive insurance, prior to picking up the car.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </section>
    )
}

export default FAQ