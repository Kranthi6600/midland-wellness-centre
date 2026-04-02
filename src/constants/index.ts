// Constants for Midland Wellness Centre
import { ServiceItem, TeamMember, NavigationItem } from '@/types';

export const SITE_CONFIG = {
  name: 'Midland Wellness Centre',
  domain: 'midlandwellness.ca',
  phone: '+41 416-261-7246',
  email: 'info@midlandwellness.ca',
  address: 'Midland, Ontario, Canada',
} as const;

export const BUSINESS_HOURS = {
  monday: '9AM-5PM',
  tuesday: '9AM-5PM',
  wednesday: '9AM-5PM',
  thursday: '9AM-5PM',
  friday: '9AM-5PM',
  saturday: '10AM-2PM',
  sunday: 'Closed',
} as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'physiotherapy',
    title: 'Physiotherapy',
    description: 'Restoring movement and function.',
    image: '/assets/images/service/physiotherapy2.webp',
    icon: 'icon-18',
    link: '/physiotherapy',
  },
  {
    id: 'chiropractic',
    title: 'Chiropractic Adjustments',
    description: 'Spinal health and pain relief.',
    image: '/assets/images/resource/Chiropractic Adjustments3.webp',
    icon: 'icon-19',
    link: '/chiropractic-adjustments',
  },
  {
    id: 'massage',
    title: 'Massage Therapy',
    description: 'Healing through therapeutic touch.',
    image: '/assets/images/service/massage1.webp',
    icon: 'icon-19',
    link: '/massage-therapy',
  },
  {
    id: 'electrotherapy',
    title: 'Electrotherapy',
    description: 'Electrical stimulation for healing.',
    image: '/assets/images/service/electrotherapy1.webp',
    icon: 'icon-20',
    link: '/electrotherapy',
  },
  {
    id: 'kinesio-taping',
    title: 'Kinesio Taping',
    description: 'Therapeutic taping for support.',
    image: '/assets/images/service/kinesio1.webp',
    icon: 'icon-20',
    link: '/kinesio-taping',
  },
  {
    id: 'orthotics',
    title: 'Orthotics',
    description: 'Custom orthopedic solutions.',
    image: '/assets/images/service/Orthotics1.webp',
    icon: 'icon-20',
    link: '/orthotics',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    role: 'Physiotherapist',
    image: '/assets/images/team/team-1.jpg',
    bio: 'Specializing in sports rehabilitation and movement therapy.',
    specialties: ['Sports Injuries', 'Movement Therapy', 'Rehabilitation'],
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    role: 'Chiropractor',
    image: '/assets/images/team/team-2.jpg',
    bio: 'Expert in spinal health and holistic wellness approaches.',
    specialties: ['Spinal Adjustment', 'Wellness Care', 'Pain Management'],
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Massage Therapist',
    image: '/assets/images/team/team-3.jpg',
    bio: 'Certified massage therapist with expertise in deep tissue and relaxation techniques.',
    specialties: ['Deep Tissue', 'Relaxation', 'Therapeutic Massage'],
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    role: 'Orthotics Specialist',
    image: '/assets/images/team/team-4.jpg',
    bio: 'Specializing in custom orthotic solutions and gait analysis.',
    specialties: ['Custom Orthotics', 'Gait Analysis', 'Foot Care'],
  },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', href: '#', icon: 'icon-4' },
  { name: 'Twitter', href: '#', icon: 'icon-5' },
  { name: 'Instagram', href: '#', icon: 'icon-6' },
] as const;

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Our Services', 
    href: '/services',
    children: SERVICES.map(service => ({
      name: service.title,
      href: service.link,
    }))
  },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Blog', href: '/blog' },
] as const;

export const FORM_VALIDATION = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\d\s\-\+\(\)]+$/,
  name: /^[a-zA-Z\s\-']+$/,
  required: (value: string) => value.trim().length > 0,
} as const;

export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;
