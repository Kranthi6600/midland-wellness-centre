import React, { useState, useEffect } from "react";
import { useAppointmentForm } from "@/hooks/useFormValidation";
import { SERVICES } from "@/constants";
import Button from "../elements/Button";
import ErrorMessage from "../elements/ErrorMessage";
import LoadingSpinner from "../elements/LoadingSpinner";

interface TimeSlot {
  time: string;
  label: string;
  available: boolean;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

interface AppointmentFormProps {
  onSubmit: (data: any) => void | Promise<void>;
  className?: string;
}

export default function AppointmentForm({ onSubmit, className = "" }: AppointmentFormProps) {
  const {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    getFieldError,
    hasError,
  } = useAppointmentForm(onSubmit);

  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Generate time slots with mock availability
  const generateTimeSlots = (date: string): TimeSlot[] => {
    const slots: TimeSlot[] = [
      { time: "09:00", label: "9:00 AM", available: Math.random() > 0.3 },
      { time: "10:00", label: "10:00 AM", available: Math.random() > 0.2 },
      { time: "11:00", label: "11:00 AM", available: Math.random() > 0.4 },
      { time: "14:00", label: "2:00 PM", available: Math.random() > 0.3 },
      { time: "15:00", label: "3:00 PM", available: Math.random() > 0.2 },
      { time: "16:00", label: "4:00 PM", available: Math.random() > 0.3 },
      { time: "17:00", label: "5:00 PM", available: Math.random() > 0.5 },
    ];
    return slots;
  };

  // Load available time slots when date changes
  useEffect(() => {
    if (values.preferredDate) {
      setIsLoadingSlots(true);
      // Simulate API call
      setTimeout(() => {
        const slots = generateTimeSlots(values.preferredDate);
        setAvailableTimeSlots(slots);
        setIsLoadingSlots(false);
      }, 500);
    }
  }, [values.preferredDate]);

  // Show success message only if form is submitted successfully without errors
  useEffect(() => {
    if (isSubmitted && !isSubmitting && Object.keys(errors).length === 0) {
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 5000);
    }
  }, [isSubmitted, isSubmitting, errors]);

  return (
    <div className="appointment-form-wrapper">
      {showSuccessMessage && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Success!</strong> Your appointment request has been submitted successfully.
          <button type="button" className="btn-close" onClick={() => setShowSuccessMessage(false)}></button>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className={`appointment-form ${className}`} noValidate>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              First Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              className={`form-control ${hasError('firstName') ? 'is-invalid' : ''}`}
              placeholder="Enter your first name"
              required
              aria-invalid={hasError('firstName')}
              aria-describedby={hasError('firstName') ? 'firstName-error' : undefined}
            />
            {hasError('firstName') && (
              <ErrorMessage message={getFieldError('firstName')} id="firstName-error" />
            )}
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Last Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              className={`form-control ${hasError('lastName') ? 'is-invalid' : ''}`}
              placeholder="Enter your last name"
              required
              aria-invalid={hasError('lastName')}
              aria-describedby={hasError('lastName') ? 'lastName-error' : undefined}
            />
            {hasError('lastName') && (
              <ErrorMessage message={getFieldError('lastName')} id="lastName-error" />
            )}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={`form-control ${hasError('email') ? 'is-invalid' : ''}`}
              placeholder="Enter your email"
              required
              aria-invalid={hasError('email')}
              aria-describedby={hasError('email') ? 'email-error' : undefined}
            />
            {hasError('email') && (
              <ErrorMessage message={getFieldError('email')} id="email-error" />
            )}
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number <span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              className={`form-control ${hasError('phone') ? 'is-invalid' : ''}`}
              placeholder="Enter your phone number"
              required
              aria-invalid={hasError('phone')}
              aria-describedby={hasError('phone') ? 'phone-error' : undefined}
            />
            {hasError('phone') && (
              <ErrorMessage message={getFieldError('phone')} id="phone-error" />
            )}
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="service" className="form-label">
          Service Type <span className="text-danger">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={handleChange}
          className={`form-control ${hasError('service') ? 'is-invalid' : ''}`}
          required
          aria-invalid={hasError('service')}
          aria-describedby={hasError('service') ? 'service-error' : undefined}
        >
          <option value="">Select a service</option>
          {SERVICES.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
        {hasError('service') && (
          <ErrorMessage message={getFieldError('service')} id="service-error" />
        )}
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="preferredDate" className="form-label">
              Preferred Date <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={values.preferredDate}
              onChange={handleChange}
              className={`form-control ${hasError('preferredDate') ? 'is-invalid' : ''}`}
              min={new Date().toISOString().split('T')[0]}
              required
              aria-invalid={hasError('preferredDate')}
              aria-describedby={hasError('preferredDate') ? 'preferredDate-error' : undefined}
            />
            {hasError('preferredDate') && (
              <ErrorMessage message={getFieldError('preferredDate')} id="preferredDate-error" />
            )}
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="preferredTime" className="form-label">
              Preferred Time <span className="text-danger">*</span>
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={values.preferredTime}
              onChange={handleChange}
              className={`form-control ${hasError('preferredTime') ? 'is-invalid' : ''}`}
              required
              disabled={isLoadingSlots || !values.preferredDate}
              aria-invalid={hasError('preferredTime')}
              aria-describedby={hasError('preferredTime') ? 'preferredTime-error' : undefined}
            >
              <option value="">
                {isLoadingSlots ? 'Loading available times...' : 'Select a time'}
              </option>
              {availableTimeSlots.map((slot) => (
                <option 
                  key={slot.time} 
                  value={slot.time}
                  disabled={!slot.available}
                >
                  {slot.label} {!slot.available && '(Unavailable)'}
                </option>
              ))}
            </select>
            {hasError('preferredTime') && (
              <ErrorMessage message={getFieldError('preferredTime')} id="preferredTime-error" />
            )}
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Additional Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          className="form-control"
          rows={4}
          placeholder="Tell us about your condition or any specific requirements..."
        />
      </div>

      <div className="form-group">
        <div className="appointment-summary">
          <h6>Appointment Summary</h6>
          {values.service && (
            <p><strong>Service:</strong> {SERVICES.find(s => s.id === values.service)?.title || 'Not selected'}</p>
          )}
          {values.preferredDate && (
            <p><strong>Date:</strong> {new Date(values.preferredDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          )}
          {values.preferredTime && (
            <p><strong>Time:</strong> {availableTimeSlots.find(s => s.time === values.preferredTime)?.label || values.preferredTime}</p>
          )}
        </div>
      </div>

      <div className="form-group">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-100"
        >
          {isSubmitting ? (
            <>
              <LoadingSpinner size="sm" className="mr-2" />
              Booking Appointment...
            </>
          ) : (
            'Book Appointment'
          )}
        </Button>
      </div>
      </form>
    </div>
  );
}
