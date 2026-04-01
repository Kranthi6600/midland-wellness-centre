// Hook for form validation

import { useState, useCallback } from 'react';
import { validateAppointmentForm, validateContactForm } from '@/utils/validation';

interface UseFormValidationProps<T> {
  initialValues: T;
  validationFn: (values: T) => { isValid: boolean; errors: Record<string, string> };
  onSubmit: (values: T) => void | Promise<void>;
}

export const useFormValidation = <T extends Record<string, any>>({
  initialValues,
  validationFn,
  onSubmit,
}: UseFormValidationProps<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setValue = useCallback((name: keyof T, value: T[keyof T]) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as string]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const processedValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setValue(name as keyof T, processedValue as T[keyof T]);
  }, [setValue]);

  const validate = useCallback(() => {
    const validation = validationFn(values);
    setErrors(validation.errors);
    return validation.isValid;
  }, [values, validationFn]);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    setIsSubmitted(true);
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit(values);
      // Reset form on successful submission
      setValues(initialValues);
      setErrors({});
      setIsSubmitted(false);
    } catch (error) {
      console.error('Form submission error:', error);
      // You could set a global error state here
    } finally {
      setIsSubmitting(false);
    }
  }, [validate, onSubmit, values, initialValues]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitted(false);
    setIsSubmitting(false);
  }, [initialValues]);

  const getFieldError = (fieldName: string) => {
    return isSubmitted ? errors[fieldName] : '';
  };

  const hasError = (fieldName: string) => {
    return isSubmitted && !!errors[fieldName];
  };

  return {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    setValue,
    handleChange,
    handleSubmit,
    validate,
    resetForm,
    getFieldError,
    hasError,
  };
};

// Specific hooks for common forms
export const useAppointmentForm = (onSubmit: (values: any) => void | Promise<void>) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  };

  return useFormValidation({
    initialValues,
    validationFn: validateAppointmentForm,
    onSubmit,
  });
};

export const useContactForm = (onSubmit: (values: any) => void | Promise<void>) => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  return useFormValidation({
    initialValues,
    validationFn: validateContactForm,
    onSubmit,
  });
};
