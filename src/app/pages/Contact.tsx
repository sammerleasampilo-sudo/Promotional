import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (this is just a demo)
    alert(
      "Thank you for your message! We will get back to you soon.",
    );
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100">
            We're here to help and answer any questions you
            might have
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-8 text-gray-900">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-900">
                      Address
                    </h3>
                    <p className="text-gray-700">
                      Municipal Hall of Bonifacio
                    </p>
                    <p className="text-gray-700">
                      Bonifacio, Misamis Occidental
                    </p>
                    <p className="text-gray-700">
                      Philippines, 7207
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-900">
                      Phone
                    </h3>
                    <p className="text-gray-700">
                      Landline: (088) XXX-XXXX
                    </p>
                    <p className="text-gray-700">
                      Mobile: +63 9XX XXX XXXX
                    </p>
                    <p className="text-gray-700">
                      Emergency: 911
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-900">
                      Email
                    </h3>
                    <p className="text-gray-700">
                      info@bonifacio.gov.ph
                    </p>
                    <p className="text-gray-700">
                      mayor@bonifacio.gov.ph
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-900">
                      Office Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday - Friday
                    </p>
                    <p className="text-gray-700">
                      8:00 AM - 12:00 NN, 1:00 PM - 5:00 PM
                    </p>
                    <p className="text-gray-700">
                      Closed on weekends and holidays
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759860002197-9ef0e886b7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMGdvdmVybm1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzQzMzU2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Municipal Hall"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl mb-6 text-gray-900">
                  Send us a Message
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-8 text-gray-900">
            Find Us
          </h2>
          <div
            className="rounded-lg overflow-hidden shadow-lg"
            style={{ height: "450px" }}
          >
            {/* Google Maps Embed for Bonifacio, Misamis Occidental */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126346.89474845469!2d123.78359893125!3d8.625374599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32551c8d9e9c5f5f%3A0x9e4d0e3f8e0d9e8c!2sBonifacio%2C%20Misamis%20Occidental!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Municipality of Bonifacio Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Department Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                Office of the Mayor
              </h3>
              <p className="text-sm text-gray-700">
                Tel: (088) XXX-XXXX
              </p>
              <p className="text-sm text-gray-700">
                mayor@bonifacio.gov.ph
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                Municipal Treasurer
              </h3>
              <p className="text-sm text-gray-700">
                Tel: (088) XXX-XXXX
              </p>
              <p className="text-sm text-gray-700">
                treasurer@bonifacio.gov.ph
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                Municipal Engineer
              </h3>
              <p className="text-sm text-gray-700">
                Tel: (088) XXX-XXXX
              </p>
              <p className="text-sm text-gray-700">
                engineer@bonifacio.gov.ph
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                Civil Registrar
              </h3>
              <p className="text-sm text-gray-700">
                Tel: (088) XXX-XXXX
              </p>
              <p className="text-sm text-gray-700">
                civilreg@bonifacio.gov.ph
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                Social Welfare Office
              </h3>
              <p className="text-sm text-gray-700">
                Tel: (088) XXX-XXXX
              </p>
              <p className="text-sm text-gray-700">
                mswd@bonifacio.gov.ph
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                Rural Health Unit
              </h3>
              <p className="text-sm text-gray-700">
                Tel: (088) XXX-XXXX
              </p>
              <p className="text-sm text-gray-700">
                health@bonifacio.gov.ph
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}