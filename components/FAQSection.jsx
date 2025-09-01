import React, { useState } from 'react';
import '/Stylesheets/Components/FAQSection.css';

export default function FAQSection({ items }) {
    // Track which FAQ is open; null means none open
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
                {items.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button
                            className={`faq-question ${openIndex === index ? 'open' : ''}`}
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`faq-answer-${index}`}
                            id={`faq-question-${index}`}
                        >
                            {faq.question}
                            <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                        </button>
                        <div
                            id={`faq-answer-${index}`}
                            className={`faq-answer ${openIndex === index ? 'open' : ''}`}
                            role="region"
                            aria-labelledby={`faq-question-${index}`}
                            style={{ maxHeight: openIndex === index ? '500px' : '0' }}
                        >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
