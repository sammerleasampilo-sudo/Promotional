import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Flag, MapPin, Calendar, Users } from "lucide-react";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-4">
            About Bonifacio
          </h1>
          <p className="text-xl text-blue-100">
            Learn about our history, vision, and the people who
            make our municipality great!
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                Our History
              </h2>
              <p className="text-gray-700 mb-4">
                The Municipality of Bonifacio, named after the
                great Filipino hero Andres Bonifacio, has a rich
                history dating back to its foundation. Located
                in the province of Misamis Occidental, our
                municipality has grown from a small rural
                community into a progressive town.
              </p>
              <p className="text-gray-700 mb-4">
                Our 28 barangays work together to create a
                vibrant and united community, preserving our
                cultural heritage while embracing modern
                development and progress.
              </p>
              <p className="text-gray-700">
                Through the years, Bonifacio has maintained its
                agricultural roots while diversifying into
                tourism, commerce, and other industries that
                contribute to the economic growth of our
                municipality.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/474043958_591793780226703_1547711372083149121_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEBDRSVRfy4tvlZFrF6mUfk6SqXZmfSS9rpKpdmZ9JL2h0UbH1f0J6DfQPmtIndwssAR3xPsNPAm97jLMyFgvK5&_nc_ohc=emziVoftXcIQ7kNvwECYI8u&_nc_oc=AdoHlS3uaKvOxJ7P98pO3eUqw_dkDwiqZD9LpGVKrDNcbcmx7P2lqho9uYSDBZRtbUg&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=gKfqjwJ0k0YP5-hCnLGQ0Q&_nc_ss=7a32e&oh=00_AfzAABOyoTIJ5ZGTPBq-FWzoN1FU9hf4Fogi4H-jcNOiDA&oe=69C809ED"
                alt="Municipal Hall"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Quick Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">
                Location
              </h3>
              <p className="text-gray-600">
                Misamis Occidental, Northern Mindanao
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">
                Population
              </h3>
              <p className="text-gray-600">
                Over 34,942 residents
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Flag className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">
                Barangays
              </h3>
              <p className="text-gray-600">28 Barangays</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Calendar className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">
                Town Fiesta
              </h3>
              <p className="text-gray-600">
                Kutsitsa Festival usually celebrated with a
                special non-working day in early December
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl mb-4 text-blue-900">
                Vision
              </h2>
              <p className="text-gray-700">
                The Municipality of Bonifacio in Misamis
                Occidental adheres to the provincial vision of
                becoming a top tourism, agriculture, and
                investment hub in Mindanao. The local government
                focuses on the 5 Ms thrust: "Mga Misamisnon
                Magpuyong Malinawon, Malambuon, ug Malipayon,"
                which strives for a peaceful, prosperous, and
                happy community through inclusive development
                and good governance.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl mb-4 text-blue-900">
                Mission
              </h2>
              <p className="text-gray-700">
                To deliver excellent public service through
                transparent and accountable governance, promote
                sustainable development, provide quality
                education and healthcare, support local economy,
                and preserve our cultural heritage for future
                generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Municipal Officials */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Municipal Officials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1648448942225-7aa06c7e8f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDMzODI2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Municipal Mayor"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl mb-1 text-gray-900">
                Hon. Mayor Ricky R. Bulahan
              </h3>
              <p className="text-blue-600 mb-2">
                Municipal Mayor
              </p>
              <p className="text-gray-600 text-sm">
                Leading Bonifacio towards progress and
                development
              </p>
            </div>
            <div className="text-center">
              <ImageWithFallback
                src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/536276304_122112798140959637_5151344270441913417_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFFVF4Fl02HG7UEovc3wN6qaC-WdGZwF69oL5Z0ZnAXr3jdWb6pyefHTwxlknHwwNzhej0C1bXcnT_WRDQlsppB&_nc_ohc=VjlT3TMOHeAQ7kNvwFkmMJL&_nc_oc=AdrlbOG8azK9OIktE8Mwv5a8x8npDFCbDUsU9ZYOdkgIkqW2PCzkh2AbY2RAl5sDjIY&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=W2wquT6O4ih_USidg1v_Ow&_nc_ss=7a32e&oh=00_AfwZLMOuVi_BwAnUPUFcWdJ37Jdy2kvzJgn7uY2yX4i5GA&oe=69C814FD"
                alt="Vice Mayor"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl mb-1 text-gray-900">
                Hon. Vice Mayor Fe B. Manzo
              </h3>
              <p className="text-blue-600 mb-2">Vice Mayor</p>
              <p className="text-gray-600 text-sm">
                Supporting initiatives for community welfare
              </p>
            </div>
            <div className="text-center">
              <ImageWithFallback
                src="https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/536275873_122112798080959637_6358669883712742750_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFTtyDl_Vrmm532qHZ9vC5UYrLhlOd5fgpisuGU53l-Ck9X5evOEDq2AcjYOzSS6LFiiDwZd1-P7FNRpSpWfEUf&_nc_ohc=1Yv1CJTnsRIQ7kNvwETmII0&_nc_oc=AdqAeDLdnNcrk3HGpaJYAHu2lmfHt3whoLE5JWOhoqz1IXPngAQlKOv2LEbkq-g6t74&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=4enE9ldGeeP8VK4kZwS7aQ&_nc_ss=7a32e&oh=00_AfyIHaqxEtYqqF6YRNymnjU58h-XDAvSg3aI8m7gHkHUsg&oe=69C81F46"
                alt="Sangguniang Bayan"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl mb-1 text-gray-900">
                Sangguniang Bayan Gilbert A. Aljas{" "}
              </h3>
              <p className="text-blue-600 mb-2">
                Municipal Council
              </p>
              <p className="text-gray-600 text-sm">
                Legislative body serving the people
              </p>
            </div>
            <div className="text-center">
              <ImageWithFallback
                src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/536278116_122112798104959637_5738547057523290845_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGeED6774oX_dhhSBZ9vkxu3g0RzMOvdrjeDRHMw692uDu9Gnj41ONgMlxXADD_dmncqPGmU3potzgoSGe1CnFQ&_nc_ohc=4iiq7exIcaIQ7kNvwHNjlvk&_nc_oc=AdrlFNpIfuZdSKrt6XiTJ58nLWMdsLWadow0l0Q3k6lkh-98jfQMpEpaZc5C0_s62q0&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=opz456rXg0hywWYE3AOxWw&_nc_ss=7a32e&oh=00_AfzJCWI2Vw1MVVl_Ml1BLCXFkVQENKu04PHBg-2le4R8zg&oe=69C82156"
                alt="Sangguniang Bayan"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl mb-1 text-gray-900">
                Sangguniang Bayan Charlex G. Chatto
              </h3>
              <p className="text-blue-600 mb-2">
                Municipal Council
              </p>
              <p className="text-gray-600 text-sm">
                Legislative body serving the people
              </p>
            </div>
            <div className="text-center">
              <ImageWithFallback
                src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/536261401_122112798182959637_5300521840773857653_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGpYbHXzaFnPKRSr95SQ6iJS8pe3_2PZNRLyl7f_Y9k1Ok9_dVNbNIwpBtxWZ3bA81qVo-TYgz51v3PLR15Hh4R&_nc_ohc=k9tCcYLqW_EQ7kNvwFJ2J87&_nc_oc=Adp4T407ZT9-ksQYwDhoieUTtB-bM2RY7mvC3P_7a5n8izpTebVn7zlvsU88mQhNgas&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=bLHLxuNNw2mCuEJhrVbNxQ&_nc_ss=7a32e&oh=00_AfxcXpr0MYWMTIH6jIxxh8SHbuh6cgUI-2O0402rAv_mQg&oe=69C83109"
                alt="Sangguniang Bayan"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl mb-1 text-gray-900">
                Sangguniang Bayan Emmanuel D. Cuizon
              </h3>
              <p className="text-blue-600 mb-2">
                Municipal Council
              </p>
              <p className="text-gray-600 text-sm">
                Legislative body serving the people
              </p>
            </div>
            <div className="text-center">
              <ImageWithFallback
                src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/536282792_122112798248959637_1017233035186052906_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFW-12QMXNU1Y-okh1QvEaptbYUS2OR5_61thRLY5Hn_n-jxGJPKZgccAlsBXpZhcdRjwivEJUtgXIbciImgxSa&_nc_ohc=aaiSyNSaoa8Q7kNvwFZWqKD&_nc_oc=AdpHrNm7ZGFx3fXW8dGy-wOLa_7KGpLLcxntgLrHEbQLw-BIazq_JLDsRGJUb972dn8&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=hqzYR8A5NwdR0-1levGVtQ&_nc_ss=7a32e&oh=00_AfxuSHDPm9e9P2f-nk7nn-imx3z_L6_kRsO_-pW6TBzoYg&oe=69C80702"
                alt="Sangguniang Bayan"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl mb-1 text-gray-900">
                Sangguniang Bayan Aldy L. Arado
              </h3>
              <p className="text-blue-600 mb-2">
                Municipal Council
              </p>
              <p className="text-gray-600 text-sm">
                Legislative body serving the people
              </p>
            </div>
            <div className="text-center">
              <ImageWithFallback
                src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/536254772_122112798224959637_4034396464788651580_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG9L9nW8MnfuX43VQrSY1a3ByCj5HgvBrMHIKPkeC8Gs5AOiRFPRuaKGINnW9w9xU3Rhv0QHNY_KMhzOHYvDt8D&_nc_ohc=zD0LbbsafkwQ7kNvwFe2Fj0&_nc_oc=Adp9gDCmO_7vNGe3qoZjBZcaST58KaSlAPqIRlmJsHUEGG6t1swPpxXOzG0uk0AIYDM&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=8iy7w2UNIpHnXjp3VcKg4w&_nc_ss=7a32e&oh=00_AfzxlbCkvmBWFw4Pb1J7LlJMIFmVs8y5mEzt6yskF4IXLg&oe=69C82AE3"
                alt="Sangguniang Bayan"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl mb-1 text-gray-900">
                Sangguniang Bayan Jeffy A. Tillor
              </h3>
              <p className="text-blue-600 mb-2">
                Municipal Council
              </p>
              <p className="text-gray-600 text-sm">
                Legislative body serving the people
              </p>
            </div>
            <div className="text-center">
              <ImageWithFallback
                src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/536280959_122112798332959637_3283333859054650469_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHDBICDhZsWH1kEOzsKpMNw_7phH312i8z_umEffXaLzAE1WBkbG1l3jOq6kdu8LUchyRIIRcTyWSiLBDU1W6mV&_nc_ohc=m4WDCDqDsEMQ7kNvwG5y1xz&_nc_oc=Ado6KY6SkPj-cUdzFi6smdpmkOTs209hYySAn4Q2wRE77WIKDi2XoMi4EnY3fueEn1A&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=isxseIRtUeqpdbUWy13z-w&_nc_ss=7a32e&oh=00_AfyNFjV1fiTRmsRa03iViXdvUh7vKEnhUNH3zeGKBKeBww&oe=69C80645"
                alt="Sangguniang Bayan"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl mb-1 text-gray-900">
                Sangguniang Bayan Sylvia B. Cabuguas
              </h3>
              <p className="text-blue-600 mb-2">
                Municipal Council
              </p>
              <p className="text-gray-600 text-sm">
                Legislative body serving the people
              </p>
            </div>
            <div className="text-center">
              <ImageWithFallback
                src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/536282091_122113056134959637_5417653370508759009_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH3frOrzTwKsCdXxpesLVb8R9E7t2kw3J5H0Tu3aTDcns_KDKca-60Cw5fGpp_2cqTNq8iPTEhMT-wGhZoba5gi&_nc_ohc=WGAtW3X-szQQ7kNvwGtZ75Z&_nc_oc=AdrStkIxrmimXOJ-Gk1hJoeVCZGUeRzoWyfPNGe7fJTG_yzRrsWk82KxHsn7mRSqCJw&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=YvlMV351aPASmb9IxtUCpQ&_nc_ss=7a32e&oh=00_AfzrcVT4-t7ZvlubLQdYob6AJ0ayTDxwmME2oB_hE2xrRg&oe=69C82E67"
                alt="Sangguniang Bayan"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl mb-1 text-gray-900">
                Sangguniang Bayan Joseph Jessie A. Diamante, MD
              </h3>
              <p className="text-blue-600 mb-2">
                Municipal Council
              </p>
              <p className="text-gray-600 text-sm">
                Legislative body serving the people
              </p>
            </div>
            <div className="text-center">
              <ImageWithFallback
                src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/536329058_122112798404959637_748274168901537334_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGX74WJosWNoaFtzy5qjStW29lrzGQ_Gw3b2WvMZD8bDZMUfvX_IjruEe5bJtS3YkPvIRHNxpZTb2_CiQDP6xax&_nc_ohc=rXLO8oREJ9kQ7kNvwF-eWQX&_nc_oc=AdpxBmfyIPCIY_qAqrzQoUDsan8N0aiF-5Y3aLuERwSxG0YdbJRQG-_Hk7mqEhHQYDc&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=QfnQSTfddA-eY9m7TRPlFA&_nc_ss=7a32e&oh=00_AfxiJhGttZLx47CiN7Gw8U61XmJZVfq4FshuX0TjYqIcKw&oe=69C80648"
                alt="Sangguniang Bayan"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl mb-1 text-gray-900">
                Sangguniang Bayan Carmelita A. Dago-oc
              </h3>
              <p className="text-blue-600 mb-2">
                Municipal Council
              </p>
              <p className="text-gray-600 text-sm">
                Legislative body serving the people
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}