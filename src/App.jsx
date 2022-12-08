import './App.scss';
import Landing from './components/landing/Landing';
import Description from './components/description/Description';
import Extras from './components/extras/Extras';
import HowRangWorks from './components/howRangWorks/HowRangWorks';
import BenefitsOfHybrid from './components/benefitsOfHybrid/BenefitsOfHybrid';
import Apply from './components/apply/Apply';
import OurCars from './components/ourCars/OurCars';
import Compliance from './components/compliance/Compliance';
import Reviews from './components/reviews/Reviews';
import FAQ from './components/faq/FAQ';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Landing />
        <Description />
        <Extras />
        <HowRangWorks />
        <BenefitsOfHybrid />
        <Apply />
        <OurCars />
        <Compliance />
        <Reviews />
        <FAQ />
        <Footer />
      </div>
      <p className="AppNoDisplay"> This demo is for desktop screens 1350px+ </p>
    </>
  );
}

export default App;
