import { useState } from 'react';
import { faqItems } from '../data/faqData';

export default function FAQ() {
  const [openId, setOpenId] = useState<string>(faqItems[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section className="section-dark" id="faq">
      <div className="container center narrow">
        <div className="eyebrow">Ihre Fragen. Unsere Antworten.</div>
        <h2>FAQ</h2>
      </div>
      <div className="faq" role="list">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              className={`faq-item${isOpen ? ' open' : ''}`}
              key={item.id}
              role="listitem"
            >
              <button
                className="faq-q"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                onClick={() => toggle(item.id)}
              >
                {item.question}
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div
                className="faq-a"
                id={`faq-answer-${item.id}`}
                role="region"
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
