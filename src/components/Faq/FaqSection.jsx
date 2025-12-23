import { useState } from 'react';
import FaqItem from './FaqItem';

function FaqSection({ title, faqs }) {
  const [openId, setOpenId] = useState(null); // tracks which FAQ is open
  const safeId = title.toLowerCase().replace(/\s+/g, '-');

  const handleToggle = (id) => {
    setOpenId(prev => (prev === id ? null : id)); // toggle or close previous
  };

  return (
    <div className="faq__group" aria-labelledby={`${safeId}-heading`} role="region">
      <h3 id={`${safeId}-heading`}>{title}</h3>

      <div className="faq__list">
        {faqs.map(faq => (
          <FaqItem
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            onToggle={() => handleToggle(faq.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default FaqSection;