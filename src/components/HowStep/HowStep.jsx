import './HowStep.scss';

function HowStep({icon, title, description}) {
    return(
    <article className="article__how">
      <img
        src={icon}
        alt=""
        className='article__how__icon'
        aria-hidden="true"
        width="56"
        height="56"
        loading="lazy"
        decoding="async"
      />
      <div className='article__how__content'>
        <h3>{title}</h3>
      <p>{description}</p>
      </div>
    </article>
    )
}

export default HowStep;