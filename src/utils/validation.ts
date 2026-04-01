// Validation utilities for Midland Wellness Centre

import { FORM_VALIDATION } from '@/constants';

export const validateEmail = (email: string): boolean => {
  return FORM_VALIDATION.email.test(email);
};

export const validatePhone = (phone: string): boolean => {
  return FORM_VALIDATION.phone.test(phone);
};

export const validateName = (name: string): boolean => {
  return FORM_VALIDATION.name.test(name) && name.trim().length >= 2;
};

export const validateRequired = (value: string): boolean => {
  return FORM_VALIDATION.required(value);
};

export const validateAppointmentForm = (formData: any): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!validateRequired(formData.firstName)) {
    errors.firstName = 'First name is required';
  } else if (!validateName(formData.firstName)) {
    errors.firstName = 'Please enter a valid first name';
  }

  if (!validateRequired(formData.lastName)) {
    errors.lastName = 'Last name is required';
  } else if (!validateName(formData.lastName)) {
    errors.lastName = 'Please enter a valid last name';
  }

  if (!validateRequired(formData.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!validateRequired(formData.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!validateRequired(formData.service)) {
    errors.service = 'Please select a service';
  }

  if (!validateRequired(formData.preferredDate)) {
    errors.preferredDate = 'Preferred date is required';
  }

  if (!validateRequired(formData.preferredTime)) {
    errors.preferredTime = 'Preferred time is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '');
};

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

export const validateContactForm = (formData: any): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!validateRequired(formData.name)) {
    errors.name = 'Name is required';
  } else if (!validateName(formData.name)) {
    errors.name = 'Please enter a valid name';
  }

  if (!validateRequired(formData.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!validateRequired(formData.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!validateRequired(formData.message)) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
