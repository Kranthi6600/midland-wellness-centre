"use client";

import React, { useState } from "react";
import { createEmailService } from "@/services/emailService";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (formData.phone && !/^[-\s\(\)]*\d+[-\s\(\)]*\d+[-\s\(\)]*\d+$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setStatus("loading");

    try {
      const emailService = createEmailService();
      await emailService.sendContactEmail(formData);
      
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="default-form contact-form">
        <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className={errors.name ? "error" : ""}
                disabled={isSubmitting}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                className={errors.email ? "error" : ""}
                disabled={isSubmitting}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input 
                type="text" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={errors.phone ? "error" : ""}
                disabled={isSubmitting}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input 
                type="text" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                disabled={isSubmitting}
                />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here... *"
                className={errors.message ? "error" : ""}
                disabled={isSubmitting}
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                <button
                type="submit"
                className="theme-btn btn-two"
                disabled={isSubmitting}
            >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>
            </div>
        </div>

        {status === "loading" && (
          <div className="form-status loading">
            <p>Sending your message...</p>
          </div>
        )}
        {status === "success" && (
          <div className="form-status success">
            <p>✅ Thank you for your message! We'll get back to you soon.</p>
          </div>
        )}
        {status === "error" && (
          <div className="form-status error">
            <p>❌ Something went wrong. Please try again later.</p>
          </div>
        )}
    </form>
  );
}
