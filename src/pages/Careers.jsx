import '../styles/pages/_careers.scss'
import Values from '../components/Values';
import imgCareers from '../assets/images/img/join-us.jpg';
import JobCard from "../components/JobCard/";
import jobs from "../data/jobs";

function Careers() {
  return (
    <>
    <section id='careers-hero' className='careers__hero' aria-labelledby='careers-heading'>
      <h1 id='careers-heading'>Careers</h1>
    </section>
    <section id='careers-intro' className='careers__intro' aria-labelledby='careers-intro-heading'>
      <div className='careers__intro__container'>
        <img src={imgCareers} className='careers__intro__img' alt='A young man presenting at a team meeting' width='311' height='311' loading='eager' decoding='async'/>
        <div className='careers__intro__content'>
          <div className='careers__intro__text'>
            <h2 id='careers-intro-heading'>Care to join our mission?</h2>
      <p>We’re always looking for ambitious individuals to help us on our journey. If you’re 
  passionate about our mission to provide clean, accessible transport to improve urban 
  living we want to hear from you!</p>
          </div>
          <a href='#' className='primary__btn'>Say Hello</a>
        </div>
      </div>
    </section>
    <section id='join' className='join' aria-labelledby='join-heading'>
      <h2 id='join-heading'>Why join us?</h2>
      <Values/>
    </section>
    <section id='jobs' className='jobs' aria-labelledby='jobs-heading'>
      <h2 id='jobs-heading' className='visually-hidden'>Currently Available Jobs</h2>
      <div className="jobs__list">
        {jobs.map(job => (
          <JobCard
            key={job.id}
            position={job.position}
            location={job.location}
          />
        ))}
      </div>
    </section>
    </>
  );
}

export default Careers;