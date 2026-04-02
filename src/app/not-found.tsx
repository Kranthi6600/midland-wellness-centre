
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - 404 | Midland Wellness Centre",
  description: "The page you're looking for doesn't exist. Return to Midland Wellness Centre homepage to find expert physiotherapy and wellness services in Scarborough.",
  robots: "noindex, follow",
};

export default function NotFound() {
  return (
    <>
      <section className="error-section centred pt_130 pb_150">
        <div className="auto-container">
          <div className="content-box">
            <h1>404</h1>
            <h2>Oops! That page can not be found.</h2>
            <p className="error-description">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable. Please check the URL or return to our homepage.
            </p>
            <div className="error-actions">
              <Link href="/" className="theme-btn btn-one">
                <span>Back to Homepage</span>
              </Link>
              <Link href="/contact-us" className="theme-btn btn-two">
                <span>Contact Us</span>
              </Link>
            </div>
            <div className="quick-links">
              <h3>Popular Pages:</h3>
              <ul>
                <li><Link href="/services">Our Services</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/appointments">Book Appointment</Link></li>
                <li><Link href="/doctors">Our Team</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
