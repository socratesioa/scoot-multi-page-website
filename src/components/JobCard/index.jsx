import './JobCard.scss';

function JobCard({position, location}) {
    return (
        <article className='job__listing'>
            <div className='job__details'>
                <h3 className='job__position'>{position}</h3>
                <p>{location}</p>
            </div>
            <a href='#jobs' className='apply__btn'>Apply</a>
        </article>
    )
}

export default JobCard;