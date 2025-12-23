import HowStep from '../components/HowStep/HowStep';
import '../styles/pages/_landing.scss';
import { Link } from "react-router-dom";
import iconLocate from '../../src/assets/images/icons/locate.svg';
import iconPick from '../../src/assets/images/icons/scooter.svg';
import iconEnjoy from '../../src/assets/images/icons/ride.svg';
import imgTelemetry from '../../src/assets/images/img/telemetry.jpg';
import imgNearYou from '../../src/assets/images/img/near-you.jpg';
import imgPayments from '../../src/assets/images/img/payments.jpg';

function Home() {
  return (
    <>
    <section id='hero' className='hero' aria-labelledby='hero-heading'>
      <div className='hero__content'>
        <h1 id='hero-heading'>Scooter sharing made simple</h1>
      <p>Scoot takes the hassle out of urban mobility.
    Our bikes are placed in convenient locations in each of our cities. Use our
    app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
    <Link
  to="#cta"
  className="primary__btn"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }}
>
  Get Scootin
</Link>
      </div>
    </section>
    <section id='how-it-works' className='how__it__works' aria-labelledby='how-it-works-heading'>
      <h2 id='how-it-works-heading' className='visually-hidden'>How it works</h2>
      <HowStep
        icon={iconLocate}
        title="Locate with app"
        description="Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. "
      />
      <HowStep
        icon={iconPick}
        title="Pick your scooter"
        description="We show the most important
    info for the scooters closest to you. So you know how much charge they have
    left and can see roughly how much it will cost. "
      />
      <HowStep
        icon={iconEnjoy}
        title="Enjoy the ride"
        description="Scan the QR
    code and the bike will unlock. Retract the cable lock, put on a helmet, and
    you’re off! Always lock bikes away from walkways and accessibility ramps. "
      />
    </section>
    <section id='features' className='features' aria-labelledby='features-heading'>
      <h2 id='features-heading' className='visually-hidden'>Scoot Features</h2>
      <article className='feature main__feature--left'>
        <img src={imgTelemetry} className='feature__img' alt='A young woman using the scoot phone application' width='311' height='311' loading='lazy' decoding='async'/>
        <div className='feature__content'>
          <div className='feature__text'>
            <h3>Easy to use riding telemetry</h3>
            <p>The Scoot app is available with riding
    telemetry. This means it can show you your average speed, how long you've
    been using the scooter, your traveling distance, and many more things all in
    an easy to use app.</p>
          </div>
          <Link
  to="/about"
  className="primary__btn"
  aria-label="Learn more about the telemetry technology we use"
>
  Learn More
</Link>
        </div>
      </article>
      <article className='feature feature--left'>
        <img src={imgNearYou} className='feature__img' alt='A city with skyscrapers and busy roads lined with trees' width='311' height='311' loading='lazy' decoding='async'/>
        <div className='feature__content'>
          <div className='feature__text'>
            <h3>Coming to a city near you</h3>
            <p>Scoot is available
    in 4 major cities so far. We’re expanding rapidly, so be sure to let us know
    if you want to see us in your hometown. We’re aiming to let our scooters
    loose on 23 cities over the coming year.</p>
          </div>
          <Link to="/locations" className='primary__btn' aria-label='Learn more about our plans and current locations'>Learn More</Link>
        </div>
      </article>
      <article className='feature feature--right'>
        <img src={imgPayments} className='feature__img' alt='A person taking cash out from their wallet' width='311' height='311' loading='lazy' decoding='async'/>
        <div className='feature__content'>
          <div className='feature__text'>
            <h3>Zero hassle payments</h3>
            <p>Our
    payment is as easy as one two three. We accept most credit cards and debit
    cards. You can also link your PayPal account inside the app. Need to pay
    later? No worries! You can defer payment for up to a month.</p>
          </div>
          <Link to="/about" className='primary__btn' aria-label='Learn more about our payment options'>Learn More</Link>
        </div>
      </article>
    </section>
    </>
  );
}

export default Home;