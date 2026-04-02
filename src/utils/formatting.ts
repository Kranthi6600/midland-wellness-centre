// Formatting utilities for Midland Wellness Centre

export const formatCurrency = (amount: number, currency = 'CAD'): string => {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatDate = (date: Date | string, options?: Intl.DateTimeFormatOptions): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  return new Intl.DateTimeFormat('en-CA', options || defaultOptions).format(dateObj);
};

export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minutes} ${ampm}`;
};

export const formatBusinessHours = (hours: Record<string, string>): string => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Group days by their hours first
  const hoursGroups: Record<string, string[]> = {};
  
  days.forEach((day, index) => {
    const dayHours = hours[day as keyof typeof hours] || 'Closed';
    if (!hoursGroups[dayHours]) {
      hoursGroups[dayHours] = [];
    }
    hoursGroups[dayHours].push(dayNames[index]);
  });
  
  // Format each group into ranges
  const formattedGroups: string[] = [];
  
  Object.entries(hoursGroups).forEach(([dayHours, dayList]) => {
    const ranges: string[] = [];
    let start = dayList[0];
    let end = start;
    
    for (let i = 1; i < dayList.length; i++) {
      const currentDay = dayList[i];
      const prevDay = dayList[i - 1];
      
      // Check if days are consecutive (Mon->Tue, Tue->Wed, etc.)
      const prevIndex = dayNames.indexOf(prevDay);
      const currentIndex = dayNames.indexOf(currentDay);
      
      if (currentIndex === prevIndex + 1) {
        // Consecutive day, extend the range
        end = currentDay;
      } else {
        // Non-consecutive, close current range and start new one
        ranges.push(start === end ? start : `${start}-${end}`);
        start = currentDay;
        end = currentDay;
      }
    }
    
    // Add the last range
    ranges.push(start === end ? start : `${start}-${end}`);
    
    // Format the final string for this hours group
    formattedGroups.push(`${ranges.join(', ')}: ${dayHours}`);
  });
  
  return formattedGroups.join(' | ');
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

export const capitalizeFirst = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const formatServiceName = (service: string): string => {
  return service
    .split('-')
    .map(word => capitalizeFirst(word))
    .join(' ');
};

export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, 2);
};

export const formatRelativeTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  
  return formatDate(dateObj);
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const extractDomain = (url: string): string => {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
};
