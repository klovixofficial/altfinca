'use client';

import { useState } from 'react';

export default function FAQ({ items, dark = false }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${dark ? 'faq-item-dark' : ''} ${openIndex === i ? 'open' : ''}`}>
          <button className="faq-question" onClick={() => toggle(i)}>
            {item.q}
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
