import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Building2,
  Users,
  Heart,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <ImageWithFallback
          src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/61586685_1305846839566197_4720917546549641216_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeE_xrt68l_zOpqEbbwekiYs8ypI1-GiSFLzKkjX4aJIUrgK7rSLEfl8rY8jZopEZOgIY96kCddF8Ub-Qjy11lwL&_nc_ohc=VmcyDBPPP60Q7kNvwG1ZIdr&_nc_oc=AdqlctRmir7-QJPA90lglzED6hAM7DzRDoFKW8EPcFff9Bxi3hOIFtADo-58MozGBLo&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=wWaNYpzqI6tUfVlgaGzUWg&_nc_ss=7a32e&oh=00_AfzLeoN8K7rK2_WSo6-qD-_J-X4sJ_H7s-ETMmDAiZUCdg&oe=69E99F7B"
          alt="Bonifacio Municipality"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl mb-4">
              Welcome to Bonifacio
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              A Progressive Municipality in Misamis Occidental
            </p>
            <Link
              to="/about"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Building2 className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <div className="text-2xl md:text-4xl mb-1">
                28
              </div>
              <div className="text-sm md:text-base text-blue-100">
                Barangays
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <div className="text-2xl md:text-4xl mb-1">
                34,942
              </div>
              <div className="text-sm md:text-base text-blue-100">
                Population
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Heart className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <div className="text-2xl md:text-4xl mb-1">
                100%
              </div>
              <div className="text-sm md:text-base text-blue-100">
                Service
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <div className="text-2xl md:text-4xl mb-1">
                Growing
              </div>
              <div className="text-sm md:text-base text-blue-100">
                Economy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Discover Bonifacio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1563175544-9759b48523b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMHJpY2UlMjBmaWVsZHMlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzc0MzM1NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Agriculture"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">
                  Rich Agriculture
                </h3>
                <p className="text-gray-600">
                  Known for our fertile lands producing rice,
                  corn, and various crops that sustain our
                  community.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767990375778-feed20362a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMGNvbW11bml0eSUyMGZlc3RpdmFsJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc0MzM1NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Culture and Festivals"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">
                  Vibrant Culture
                </h3>
                <p className="text-gray-600">
                  Experience our colorful festivals and rich
                  cultural heritage that bring our community
                  together.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768639400843-d604ccce9c3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0MzM1NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tourism"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">
                  Natural Beauty
                </h3>
                <p className="text-gray-600">
                  Explore pristine beaches, scenic landscapes,
                  and natural attractions that make Bonifacio
                  special.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Latest Announcements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-blue-600 mb-2">
                March 20, 2026
              </div>
              <h3 className="text-xl mb-3 text-gray-900">
                Community Health Program
              </h3>
              <p className="text-gray-600 mb-4">
                Free health check-ups and vaccinations will be
                available at the Municipal Health Center this
                weekend.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700"
              >
                Read more →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-blue-600 mb-2">
                March 18, 2026
              </div>
              <h3 className="text-xl mb-3 text-gray-900">
                Agricultural Training Seminar
              </h3>
              <p className="text-gray-600 mb-4">
                Learn modern farming techniques and sustainable
                practices. Register now at the Municipal
                Agriculture Office.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700"
              >
                Read more →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}