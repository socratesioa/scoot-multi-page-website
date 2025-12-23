import { useId } from 'react';
import './FaqItem.scss'
import iconArrow from '../../assets/images/icons/chevron.svg'

function FaqItem({ id, question, answer, isOpen, onToggle }) {
  const faqId = useId(); // unique id for aria
  const answerId = `faq-answer-${faqId}`;

  return (
    <div className="faq__item">
      <button
        type="button"
        className="faq__question"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        {question}
        <span>
            <img src={iconArrow} className='faq__arrow' alt='' aria-hidden='true'/> 
        </span>
      </button>
      <div
  id={answerId}
  role="region"
  aria-hidden={!isOpen}
  className={`faq__answer ${isOpen ? 'open' : ''}`}
>
  <p>{answer}</p>
</div>
    </div>
  );
}

export default FaqItem;
