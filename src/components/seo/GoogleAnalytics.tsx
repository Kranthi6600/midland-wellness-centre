import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

export default function GoogleAnalytics({ measurementId = 'G-XXXXXXXXXX' }: GoogleAnalyticsProps) {
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_title: document.title,
              page_location: window.location.href,
              content_group1: 'Healthcare',
              content_group2: 'Wellness Services',
              custom_map: {
                'custom_parameter_1': 'service_type',
                'custom_parameter_2': 'location'
              }
            });

            // Track custom events
            function trackEvent(eventName, parameters) {
              gtag('event', eventName, parameters);
            }

            // Track form submissions
            document.addEventListener('submit', function(e) {
              const form = e.target;
              if (form.matches('form')) {
                trackEvent('form_submission', {
                  event_category: 'engagement',
                  event_label: form.id || 'contact_form',
                  value: 1
                });
              }
            });

            // Track phone number clicks
            document.addEventListener('click', function(e) {
              const target = e.target.closest('a[href^="tel:"]');
              if (target) {
                trackEvent('phone_click', {
                  event_category: 'contact',
                  event_label: target.href,
                  value: 1
                });
              }
            });

            // Track email clicks
            document.addEventListener('click', function(e) {
              const target = e.target.closest('a[href^="mailto:"]');
              if (target) {
                trackEvent('email_click', {
                  event_category: 'contact',
                  event_label: target.href,
                  value: 1
                });
              }
            });

            // Track appointment bookings
            document.addEventListener('click', function(e) {
              const target = e.target.closest('a[href*="appointment"]');
              if (target) {
                trackEvent('appointment_booking_start', {
                  event_category: 'conversion',
                  event_label: 'appointment_form',
                  value: 1
                });
              }
            });
          `,
        }}
      />
    </>
  );
}
