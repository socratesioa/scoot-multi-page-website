import '../styles/pages/_about.scss';
import Values from '../components/Values';
import FaqSection from '../components/Faq/FaqSection';
import { faqsGeneral, faqsDriving } from "../data/faqs";
import imgDigitalEra from '../../src/assets/images/img/digital-era.jpg';
import imgBetterLiving from '../../src/assets/images/img/better-living.jpg';

function About() {
  return (
    <>
    <section id='about-hero' className='about__hero' aria-labelledby='about-hero-heading'>
      <h1 id='about-hero-heading'>About</h1>
    </section>
    <section id='about-intro' className='about__intro' aria-labelledby='about-intro-heading'>
      <h2 id='about-intro-heading' className='visually-hidden'>A few words about Scoot</h2>
      <article className='about__article article--left'>
        <img src={imgDigitalEra} className='about__article__img' alt='A woman using the Scoot app on her phone' width='311' height='311' loading='eager' decoding='async'/>
        <div className='about__article__content'>
          <h3 className='about__article__heading'>Mobility for the digital era</h3>
          <p>Getting around should be simple (and even fun!) for everyone. We embrace technology to 
  provide low cost, smart access to scooters at your fingertips.</p>
        </div>
      </article>
      <article className='about__article article--right'>
        <img src={imgBetterLiving} className='about__article__img' alt='A tram approaching in a city street' width='311' height='311' loading='lazy' decoding='async'/>
        <div className='about__article__content'>
          <h3 className='about__article__heading'>Better urban living</h3>
          <p>We’re helping connect cities and bring people closer together. Our scooters are also 
  fully-electric and we offset the minimal carbon footprint for each ride.</p>
        </div>
      </article>
    </section>
    <section id='our-values' className='our__values' aria-labelledby='our-values-heading'>
      <h2 id='our-values-heading'>Our values</h2>
    <Values/>
    </section>
    <section id='FAQs' className='faqs' aria-labelledby='faq-heading'>
      <h2 id='faq-heading'>FAQs</h2>
      <div className='faq__container'>
        <FaqSection
        title="How it Works"
        faqs={faqsGeneral}
      />
      <FaqSection
        title="Safe Driving"
        faqs={faqsDriving}
      />
      </div>
    </section>
    </>
  );
}

export default About;