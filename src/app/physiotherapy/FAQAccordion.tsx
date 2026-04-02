'use client'

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    return (
        <div className="faq-accordion">
            {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`}>
                    <div 
                        className="faq-question" 
                        onClick={() => toggleFAQ(index)}
                        style={{
                            padding: '10px 15px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'all 0.3s ease',
                            borderBottom: '1px solid #e9ecef'
                        }}
                    >
                        <h4 style={{ margin: 0, color: '#2c3e50', fontSize: '16px', fontWeight: '600' }}>
                            {faq.question}
                        </h4>
                        <span 
                            style={{
                                fontSize: '20px',
                                color: activeFAQ === index ? '#007bff' : '#6c757d',
                                transition: 'transform 0.3s ease',
                                transform: activeFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}
                        >
                            ▼
                        </span>
                    </div>
                    <div 
                        className="faq-answer"
                        style={{
                            maxHeight: activeFAQ === index ? '200px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease, padding 0.3s ease',
                            padding: activeFAQ === index ? '10px 15px' : '0 15px',
                            backgroundColor: 'transparent'
                        }}
                    >
                        <p style={{ margin: 0, color: '#495057', lineHeight: '1.6' }}>
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
