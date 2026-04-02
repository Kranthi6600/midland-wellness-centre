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
                            padding: '15px 20px',
                            backgroundColor: activeFAQ === index ? '#f8f9fa' : '#fff',
                            border: '1px solid #e9ecef',
                            borderRadius: '8px',
                            marginBottom: '10px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'all 0.3s ease'
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
                            padding: activeFAQ === index ? '15px 20px' : '0 20px',
                            backgroundColor: '#f8f9fa',
                            borderLeft: activeFAQ === index ? '1px solid #e9ecef' : 'none',
                            borderRight: activeFAQ === index ? '1px solid #e9ecef' : 'none',
                            borderBottom: activeFAQ === index ? '1px solid #e9ecef' : 'none',
                            borderRadius: activeFAQ === index ? '0 0 8px 8px' : '0'
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
