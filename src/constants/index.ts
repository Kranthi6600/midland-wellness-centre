// Constants for Midland Wellness Centre
import { ServiceItem, TeamMember, NavigationItem } from '@/types';

export const SITE_CONFIG = {
  name: 'Midland Wellness Centre',
  domain: 'midlandwellness.ca',
  phone: '+1 416-261-7246',
  email: 'info@midlandwellness.ca',
  address: '2555 Eglinton Ave. E, Scarborough, ON',
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
    description: 'Customised rehabilitation for injury recovery, pain relief, and improved mobility.',
    image: '/assets/images/service/physiotherapy2.webp',
    icon: 'icon-18',
    link: '/services/physiotherapy',
  },
  {
    id: 'massage-therapy',
    title: 'Massage Therapy',
    description: 'Relieves muscle tension, reduces stress, and improves circulation.',
    image: '/assets/images/service/massage1.webp',
    icon: 'icon-19',
    link: '/services/massage-therapy',
  },
  {
    id: 'electrotherapy',
    title: 'Electrotherapy',
    description: 'Electrical stimulation to reduce pain and accelerate recovery.',
    image: '/assets/images/resource/electrotherapy2.webp',
    icon: 'icon-20',
    link: '/services/electrotherapy',
  },
  {
    id: 'kinesio-taping',
    title: 'Kinesio Taping',
    description: 'Supports muscles and joints for natural movement during recovery.',
    image: '/assets/images/resource/kinesiotaping2.webp',
    icon: 'icon-20',
    link: '/services/kinesio-taping',
  },
  {
    id: 'orthotics',
    title: 'Custom Orthotics',
    description: 'Corrects foot alignment, improves posture, and reduces joint pain.',
    image: '/assets/images/service/Orthotics1.webp',
    icon: 'icon-20',
    link: '/services/orthotics',
  },
  {
    id: 'chiropractic-adjustments',
    title: 'Chiropractic Care',
    description: 'Improves spinal alignment and reduces pain naturally.',
    image: '/assets/images/resource/chiropracticadjustments1.webp',
    icon: 'icon-19',
    link: '/services/chiropractic-adjustments',
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
  { name: 'Instagram', href: 'https://www.instagram.com/p/DaEoYrBhgkQ/?igsh=NGdlcGU3eXhtZTN0', icon: 'icon-6' },
] as const;

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Our Services', href: '/services' },
  { name: 'About Us', href: '/about' },
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
