import { FileText, Heart, Building, Briefcase, GraduationCap, ShieldCheck, Home, Sprout } from "lucide-react";

export function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Municipal Services</h1>
          <p className="text-xl text-blue-100">Delivering quality public services to all residents of Bonifacio</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl text-center mb-3 text-gray-900">Civil Registry</h3>
              <p className="text-gray-600 mb-4">
                Birth, marriage, and death certificates, as well as other civil registration documents.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Birth Certificate</li>
                <li>• Marriage Certificate</li>
                <li>• Death Certificate</li>
                <li>• CENOMAR</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl text-center mb-3 text-gray-900">Health Services</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive healthcare services for all residents through our Rural Health Unit.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Free Check-ups</li>
                <li>• Vaccination Programs</li>
                <li>• Maternal & Child Care</li>
                <li>• Family Planning</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl text-center mb-3 text-gray-900">Building Permits</h3>
              <p className="text-gray-600 mb-4">
                Processing of building permits and construction-related documents.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Building Permit</li>
                <li>• Occupancy Permit</li>
                <li>• Fencing Permit</li>
                <li>• Demolition Permit</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl text-center mb-3 text-gray-900">Business Permits</h3>
              <p className="text-gray-600 mb-4">
                Business registration and licensing services for entrepreneurs and businesses.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• New Business Permit</li>
                <li>• Permit Renewal</li>
                <li>• Mayor's Permit</li>
                <li>• Business Clearance</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl text-center mb-3 text-gray-900">Education Services</h3>
              <p className="text-gray-600 mb-4">
                Support programs for students and educational institutions in our municipality.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Scholarship Programs</li>
                <li>• School Supplies Aid</li>
                <li>• Educational Assistance</li>
                <li>• Skills Training</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl text-center mb-3 text-gray-900">Public Safety</h3>
              <p className="text-gray-600 mb-4">
                Police assistance and disaster preparedness services for community safety.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Police Clearance</li>
                <li>• Barangay Clearance</li>
                <li>• Disaster Response</li>
                <li>• Emergency Services</li>
              </ul>
            </div>

            {/* Service 7 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl text-center mb-3 text-gray-900">Social Welfare</h3>
              <p className="text-gray-600 mb-4">
                Assistance programs for indigent families and vulnerable sectors.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Financial Assistance</li>
                <li>• Medical Assistance</li>
                <li>• Senior Citizens Program</li>
                <li>• PWD Assistance</li>
              </ul>
            </div>

            {/* Service 8 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Sprout className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl text-center mb-3 text-gray-900">Agriculture Support</h3>
              <p className="text-gray-600 mb-4">
                Programs and assistance for farmers and agricultural development.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Farm Inputs Subsidy</li>
                <li>• Training Programs</li>
                <li>• Equipment Loan</li>
                <li>• Crop Insurance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Office Hours & Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-4 text-gray-900">Office Hours</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Monday - Friday:</strong></p>
                <p>8:00 AM - 12:00 NN</p>
                <p>1:00 PM - 5:00 PM</p>
                <p className="mt-4"><strong>Saturday - Sunday:</strong></p>
                <p>Closed</p>
                <p className="mt-4 text-sm text-gray-600">
                  *Some offices may have different schedules. Please call ahead to confirm.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-4 text-gray-900">General Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Valid government-issued ID</li>
                <li>• Barangay clearance (if required)</li>
                <li>• Proof of residency</li>
                <li>• Filled-out application form</li>
                <li>• Payment of applicable fees</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                *Requirements may vary per service. Please inquire at the respective office for specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">Need Assistance?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Our offices are here to serve you. For inquiries, please visit the Municipal Hall or contact us through the following:
          </p>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-bold mb-2 text-gray-900">Municipal Hall</h3>
                <p className="text-gray-700">Bonifacio, Misamis Occidental</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900">Contact Numbers</h3>
                <p className="text-gray-700">Tel: (088) XXX-XXXX</p>
                <p className="text-gray-700">Mobile: +63 9XX XXX XXXX</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900">Email</h3>
                <p className="text-gray-700">info@bonifacio.gov.ph</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900">Emergency Hotline</h3>
                <p className="text-gray-700">911 / (088) XXX-XXXX</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
