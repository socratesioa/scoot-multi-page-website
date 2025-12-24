import './cta.scss';
import appstore from '../../assets/images/icons/app-store.svg';
import playstore from '../../assets/images/icons/google-play.svg';

function Cta() {
    return (
        <section id='cta' className='cta' aria-labelledby='cta-heading'>
            <div className='cta__container'>
                <h2 id='cta-heading'>Sign up and Scoot off today</h2>
                <div className='download__links'>
                    <a href="#" onClick={(e) => e.preventDefault()} className="download__btn">
                       <img src={appstore} alt='Download Scoot from the App Store' className='download__icons' width="113" height="40" loading='lazy' decoding='async'/> 
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()} className="download__btn">
                        <img src={playstore} alt='Download Scoot from Google Play' className='download__icons' width="130" height="40" loading='lazy' decoding='async'/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Cta;