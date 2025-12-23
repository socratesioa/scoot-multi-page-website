import './Values.scss';
import imgOurTech from '../../assets/images/img/our-tech.jpg';
import imgOurCommunity from '../../assets/images/img/our-community.jpg';
import imgOurIntegrity from '../../assets/images/img/our-integrity.jpg';

function Values() {
    return (
        <>
        <article className='value value--one'>
            <img src={imgOurTech} className='value__img' alt='A person using the Scoot app on a mobile phone' width='240' height='240' loading='lazy' decoding='async' />
            <div className='value__text'>
               <h3>Our tech</h3>
               <p>We’re using cutting edge technology to drive accessible urban transportation forward. 
  Our fully electric scooters are a joy to ride!</p>
            </div>
        </article>
        <article className='value value--two'>
            <img src={imgOurIntegrity} className='value__img' alt='A person wearing a helmet and using our scooter' width='240' height='240' loading='lazy' decoding='async' />
            <div className='value__text'>
               <h3>Our integrity</h3>
               <p>We are fully committed to deliver a great yet safe, sustainable micro-mobility experience 
  in every city we serve.</p>
            </div>
        </article>
        <article className='value value--three'>
            <img src={imgOurCommunity} className='value__img' alt='A group of people walking together' width='240' height='240' loading='lazy' decoding='async' />
            <div className='value__text'>
               <h3>Our community</h3>
               <p>We support every community we serve. All workers are paid a living wage based on their 
  location and are Scoot employees.</p>
            </div>
        </article>
        </>
    )
}

export default Values;