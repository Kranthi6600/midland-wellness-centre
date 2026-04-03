import React from "react";
import Link from "next/link";

export default function ConditionsAndFAQ() {
    return (
        <section className="conditions-faq-section p_relative pt_100 pb_100">
            <div className="auto-container">
                {/* Conditions We Treat Section */}
                <div className="sec-title mb_60 centred">
                    <h2>Conditions We Treat</h2>
                    <p>At our clinic, we treat a wide range of conditions to help you regain strength and mobility.</p>
                </div>
                
                <div className="conditions-grid mb_80">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 condition-item">
                            <div className="condition-box">
                                <div className="icon">🔹</div>
                                <h4>Back pain and lower back pain</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 condition-item">
                            <div className="condition-box">
                                <div className="icon">🔹</div>
                                <h4>Neck pain and posture issues</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 condition-item">
                            <div className="condition-box">
                                <div className="icon">🔹</div>
                                <h4>Sports injuries and muscle strains</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 condition-item">
                            <div className="condition-box">
                                <div className="icon">🔹</div>
                                <h4>Joint pain and arthritis</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 condition-item">
                            <div className="condition-box">
                                <div className="icon">🔹</div>
                                <h4>Workplace injuries and rehabilitation</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 condition-item">
                            <div className="condition-box">
                                <div className="icon">🔹</div>
                                <h4>Chronic pain and mobility issues</h4>
                            </div>
                        </div>
                    </div>
                </div>
                
                <p className="text-center mb_60">Our goal is to provide effective solutions that improve your daily life and overall well-being.</p>

                {/* FAQ Section */}
                <div className="sec-title mb_60 centred">
                    <h2>Frequently Asked Questions</h2>
                </div>
                
                <div className="faq-content">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 offset-lg-2">
                            <div className="faq-item mb_30">
                                <h4>What services does a wellness centre provide?</h4>
                                <p>A wellness centre offers treatments like physiotherapy, chiropractic care, massage therapy, and rehabilitation to improve health and mobility.</p>
                            </div>
                            
                            <div className="faq-item mb_30">
                                <h4>Which treatment is best for back pain?</h4>
                                <p>Physiotherapy and chiropractic care are highly effective for relieving back pain and improving posture.</p>
                            </div>
                            
                            <div className="faq-item mb_30">
                                <h4>Do I need a referral to visit a wellness centre?</h4>
                                <p>No, most patients can book directly without a referral.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location Section */}
                <div className="sec-title mb_40 centred mt_80">
                    <h2>Wellness Centre Near You</h2>
                </div>
                
                <div className="location-content text-center">
                    <p>If you are searching for:</p>
                    <div className="keywords-list">
                        <span>wellness centre near me</span>
                        <span>physiotherapy clinic Scarborough</span>
                        <span>chiropractor near me Scarborough</span>
                        <span>massage therapy near me</span>
                    </div>
                    <p className="mt_20">Our wellness centre in Scarborough provides expert care tailored to your needs, helping you recover faster and live pain-free.</p>
                </div>
            </div>
            
            <style>{`
                .condition-box {
                    display: flex;
                    align-items: center;
                    padding: 15px;
                    background: #f8f9fa;
                    border-radius: 8px;
                    margin-bottom: 15px;
                    border-left: 4px solid #007acc;
                }
                
                .condition-box .icon {
                    margin-right: 15px;
                    font-size: 18px;
                }
                
                .condition-box h4 {
                    margin: 0;
                    font-size: 16px;
                    font-weight: 500;
                }
                
                .faq-item {
                    background: #f8f9fa;
                    padding: 25px;
                    border-radius: 8px;
                    border-left: 4px solid #007acc;
                }
                
                .faq-item h4 {
                    color: #007acc;
                    margin-bottom: 10px;
                    font-size: 18px;
                }
                
                .faq-item p {
                    margin: 0;
                    line-height: 1.6;
                }
                
                .keywords-list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 10px;
                    margin: 20px 0;
                }
                
                .keywords-list span {
                    background: #007acc;
                    color: white;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 14px;
                }
            `}</style>
        </section>
    );
}
