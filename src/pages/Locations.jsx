import '../styles/pages/_location.scss';
import mapMobile from '../assets/images/img/world-map-mobile.png';
import mapTablet from '../assets/images/img/world-map-tablet.png';
import mapDesktop from '../assets/images/img/world-map-desktop.png';

function Locations() {
  return (
    <>
    <section id='location-hero' className='location__hero' aria-labelledby="location-hero-heading">
      <h1 id="location-hero-heading">Locations</h1>
    </section>
    <section id='map-locations' className='map__locations' aria-labelledby='map-locations-heading'>
      <h2 id='map-locations-heading' className='visually-hidden'>Scoot locations around the world</h2>
    <div className='map__wrapper'>
      <picture>
        <source
        srcSet={mapDesktop}
        media='(min-width: 1200px)'
        />
         <source
        srcSet={mapTablet}
        media='(min-width: 768px)'
        />
        <img src={mapMobile} className='world__map' alt='World map showing Scoot locations' width='311' height='152' loading='eager' decoding='async'/>
      </picture>
      
      <ul className='countries'>
        <li className="countries__item countries__item--new-york">New York</li>
  <li className="countries__item countries__item--london">London</li>
  <li className="countries__item countries__item--yokohama">Yokohama</li>
  <li className="countries__item countries__item--jakarta">Jakarta</li>
      </ul>
    </div>
    </section>
    <section id="your-city" className='your__city' aria-labelledby="your-city-heading">
      <h2 id='your-city-heading'>Your city not listed?</h2>
      <p>If you’d like to see Scoot in your hometown, be sure to let us know. We track 
  requests and plan launches based on demand. Feel free to message us by clicking 
  the link or messaging us on social.</p>
  <a href='#your-city' className="primary__btn">Message Us</a>
    </section>
    </>
  );
}

export default Locations;