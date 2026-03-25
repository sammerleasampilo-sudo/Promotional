import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MapPin, Camera, Utensils, Calendar } from "lucide-react";

export function Tourism() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1768639400843-d604ccce9c3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0MzM1NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tourism in Bonifacio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl mb-4">Explore Bonifacio</h1>
            <p className="text-xl">Discover the natural beauty and cultural richness of our municipality</p>
          </div>
        </div>
      </section>

      {/* Tourist Attractions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Attraction 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768639400843-d604ccce9c3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0MzM1NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Beach"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-blue-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Coastal Area</span>
                </div>
                <h3 className="text-xl mb-2 text-gray-900">Pristine Beaches</h3>
                <p className="text-gray-600">
                  Enjoy the clear waters and white sand beaches perfect for swimming, snorkeling, and relaxation.
                </p>
              </div>
            </div>

            {/* Attraction 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1563175544-9759b48523b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMHJpY2UlMjBmaWVsZHMlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzc0MzM1NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Rice Terraces"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-blue-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Highland Areas</span>
                </div>
                <h3 className="text-xl mb-2 text-gray-900">Scenic Rice Terraces</h3>
                <p className="text-gray-600">
                  Marvel at the beautiful rice terraces with stunning mountain backdrops, perfect for photography.
                </p>
              </div>
            </div>

            {/* Attraction 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1716407574854-aabe59ed80e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMHRvd24lMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzc0MzM1NjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Town Center"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-blue-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Town Proper</span>
                </div>
                <h3 className="text-xl mb-2 text-gray-900">Historic Town Center</h3>
                <p className="text-gray-600">
                  Walk through our historic town center and experience the local culture and heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Things to Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Camera className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Photography</h3>
              <p className="text-gray-600">Capture stunning landscapes and natural scenery</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Utensils className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Local Cuisine</h3>
              <p className="text-gray-600">Taste authentic Mindanaoan dishes and delicacies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Calendar className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Festivals</h3>
              <p className="text-gray-600">Join our vibrant local festivals and celebrations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <MapPin className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Island Hopping</h3>
              <p className="text-gray-600">Explore nearby islands and hidden beaches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Local Products & Delicacies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-gray-900">Agricultural Products</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fresh rice and corn</li>
                <li>• Tropical fruits</li>
                <li>• Vegetables and root crops</li>
                <li>• Coconut products</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-gray-900">Seafood</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fresh fish daily catch</li>
                <li>• Prawns and crabs</li>
                <li>• Dried fish products</li>
                <li>• Fish paste (bagoong)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-gray-900">Handicrafts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Handwoven mats</li>
                <li>• Bamboo crafts</li>
                <li>• Native baskets</li>
                <li>• Wood carvings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-8 text-gray-900">
            Travel Tips
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-bold mb-2">How to Get Here</h3>
                <p>Bonifacio is accessible by land via Cagayan de Oro City. Regular bus and van services are available from the city.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Best Time to Visit</h3>
                <p>The best time to visit is during the dry season from November to May. Don't miss our town fiesta on November 30!</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Where to Stay</h3>
                <p>Accommodation options include local inns, homestays, and nearby resorts. Advance booking is recommended during peak season.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">What to Bring</h3>
                <p>Bring comfortable clothing, swimwear, sunscreen, insect repellent, and cash as ATM facilities may be limited.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
