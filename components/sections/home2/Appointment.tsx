import Image from "next/image";
import Link from "next/link";

export default function Appointment() {
  return (
    <section className="appointment-section sec-pad">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <div className="sec-title mb_30">
                <span className="sub-title mb_5">Book an Appointment</span>
                <h2>Get Your Medical Consultation</h2>
                <p>
                  Schedule your appointment with our experienced medical professionals
                  and get the care you need.
                </p>
              </div>
              <div className="appointment-info">
                <ul>
                  <li>
                    <div className="icon-box">
                      <i className="icon-15"></i>
                    </div>
                    <div className="text">
                      <h4>Emergency Cases</h4>
                      <p>
                        <Link href="tel:+41 416-261-7246">+41 416-261-7246</Link>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-box">
                      <i className="icon-16"></i>
                    </div>
                    <div className="text">
                      <h4>Location</h4>
                      <p>2555 Eglinton Ave. E, Scarborough, Ontario, Canada, M1K 5J1</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-box">
                      <i className="icon-17"></i>
                    </div>
                    <div className="text">
                      <h4>Email Us</h4>
                      <p>
                        <Link href="mailto:info@midlandwellnesscentre.com">info@midlandwellnesscentre.com</Link>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 form-column">
            <div className="form-inner">
              <form method="post" action="contact.html" className="default-form">
                <div className="row clearfix">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="email" name="email" placeholder="Your Email" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="text" name="phone" placeholder="Phone Number" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <select className="selectmenu">
                      <option>Select Service</option>
                      <option>Cardiology</option>
                      <option>Dental</option>
                      <option>Gastroenterology</option>
                      <option>Neurology</option>
                      <option>Orthopaedics</option>
                    </select>
                  </div>
                  <div className="col-md-12 form-group">
                    <textarea name="message" placeholder="Your Message"></textarea>
                  </div>
                  <div className="col-md-12 form-group">
                    <button type="submit" className="theme-btn btn-one">
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
