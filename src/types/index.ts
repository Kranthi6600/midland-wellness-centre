// Type definitions for Midland Wellness Centre

export interface LayoutProps {
  headerStyle?: 1 | 2 | 3;
  footerStyle?: 1;
  breadcrumbTitle?: string;
  children: React.ReactNode;
  wrapperCls?: string;
}

export interface HeaderProps {
  scroll: boolean;
  handleMobileMenu: () => void;
  isMobileMenu?: boolean;
  handlePopup?: () => void;
  isSidebar?: boolean;
  handleSidebar?: () => void;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  link: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  specialties?: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  hours: string;
}

export interface BannerProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      alt: string;
    }>;
  };
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: Array<{
    value: string;
    label: string;
  }>;
}

export interface AppointmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  id: string;
  createdAt: Date;
  status: 'pending' | 'processed' | 'archived';
  source: string;
  userAgent?: string;
  ipAddress?: string;
}

export interface EmailProvider {
  name: 'sendgrid' | 'resend' | 'smtp';
  apiKey?: string;
  host?: string;
  port?: number;
  user?: string;
  pass?: string;
  from: string;
  to: string[];
}

export interface ContactEmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  skipSuccessfulRequests?: boolean;
  message?: string;
}

export interface SecurityConfig {
  enableCSRF: boolean;
  enableRateLimit: boolean;
  enableInputSanitization: boolean;
  maxMessageLength: number;
  allowedDomains?: string[];
}
