import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Areas - HVAC Services in Los Angeles, Glendale, Burbank & More',
  description: 'NorthernWindHVAC serves 50+ cities in Greater Los Angeles: Glendale, Burbank, Pasadena, San Fernando Valley & more. Same-day service, 30-mile radius. Call (818) 555-HVAC!',
  keywords: ['HVAC Glendale', 'HVAC Burbank', 'HVAC Pasadena', 'HVAC Los Angeles', 'San Fernando Valley HVAC', 'HVAC near me', 'local HVAC service'],
  openGraph: {
    title: 'HVAC Service Areas | NorthernWindHVAC',
    description: 'Professional HVAC services in 50+ cities across Greater Los Angeles. Fast response times, same-day service available.',
    type: 'website',
  },
  alternates: {
    canonical: '/serving-areas',
  },
};

export default function ServingAreasPage() {
  const serviceAreas = [
    {
      name: 'Glendale, CA',
      description: 'Providing comprehensive HVAC services to Glendale residents and businesses. From the Americana to Adams Hill, we service all neighborhoods.',
      zipCodes: '91201, 91202, 91203, 91204, 91205, 91206, 91207, 91208, 91209, 91210, 91221, 91222, 91225, 91226',
      highlights: [
        'Residential HVAC services',
        'Commercial building solutions',
        'Same-day emergency service',
        'Energy-efficient upgrades',
      ],
    },
    {
      name: 'Burbank, CA',
      description: 'Serving the beautiful city of Burbank with expert HVAC installation, repair, and maintenance services for homes and businesses.',
      zipCodes: '91501, 91502, 91503, 91504, 91505, 91506, 91510, 91521, 91522, 91523',
      highlights: [
        'Studio and commercial HVAC',
        '24/7 emergency repairs',
        'Residential comfort solutions',
        'Air quality improvements',
      ],
    },
    {
      name: 'Tujunga, CA',
      description: 'Reliable HVAC services for the Tujunga community. We understand the unique climate challenges and provide tailored solutions.',
      zipCodes: '91042, 91043',
      highlights: [
        'Mountain area specialists',
        'Heating system experts',
        'Fast response times',
        'Preventive maintenance',
      ],
    },
    {
      name: 'Pasadena, CA',
      description: 'Trusted HVAC partner for Pasadena homeowners and businesses. From historic homes to modern buildings, we handle it all.',
      zipCodes: '91101, 91102, 91103, 91104, 91105, 91106, 91107, 91108, 91109, 91110, 91114, 91115, 91116, 91117, 91121, 91123, 91124, 91125, 91126, 91129, 91131, 91182, 91184, 91185, 91188, 91189, 91191, 91199',
      highlights: [
        'Historic home expertise',
        'Modern HVAC solutions',
        'Energy efficiency focus',
        'Comprehensive service plans',
      ],
    },
    {
      name: 'Greater Los Angeles Area',
      description: 'Serving the entire Greater Los Angeles metropolitan area with professional HVAC services. From Downtown LA to the San Fernando Valley, we\'ve got you covered.',
      zipCodes: '90001-90089, 90091-90099, 90101-90103, 90174, 90185',
      highlights: [
        'Metro-wide coverage',
        'Commercial & residential',
        'Multi-unit specialists',
        'Rapid response teams',
      ],
    },
    {
      name: 'San Fernando Valley',
      description: 'Complete HVAC coverage for the San Fernando Valley. From Sherman Oaks to Northridge, we provide reliable heating and cooling solutions.',
      zipCodes: '91301, 91302, 91303, 91304, 91306, 91307, 91311, 91316, 91324, 91325, 91326, 91330, 91331, 91335, 91340, 91342, 91343, 91344, 91345, 91352, 91356, 91364, 91367, 91401, 91402, 91403, 91405, 91406, 91411, 91423, 91436',
      highlights: [
        'Valley-wide service',
        'Heat wave specialists',
        'Energy-saving solutions',
        'Same-day availability',
      ],
    },
  ];

  const surroundingAreas = [
    'La Crescenta-Montrose',
    'Sunland',
    'La Cañada Flintridge',
    'Altadena',
    'Sierra Madre',
    'San Marino',
    'South Pasadena',
    'Eagle Rock',
    'Atwater Village',
    'Toluca Lake',
    'Studio City',
    'North Hollywood',
    'Sherman Oaks',
    'Encino',
    'Van Nuys',
    'Northridge',
    'Reseda',
    'Woodland Hills',
    'Canoga Park',
    'Chatsworth',
    'Granada Hills',
    'Sylmar',
    'Pacoima',
    'Arleta',
    'Sun Valley',
    'Valley Village',
    'Hollywood',
    'Los Feliz',
    'Silver Lake',
    'Echo Park',
    'Highland Park',
    'Glassell Park',
    'Mount Washington',
    'Arcadia',
    'Monrovia',
    'Duarte',
    'Azusa',
    'West Covina',
    'Covina',
    'Pomona',
    'Claremont',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Areas We Serve
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Professional HVAC services throughout the Greater Los Angeles area
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg font-semibold">Same-Day Service Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Primary Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We proudly serve these communities with fast, reliable HVAC services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-primary-600 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{area.name}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What We Offer:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {area.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-xs text-gray-600 mb-1">Zip Codes Served:</p>
                  <p className="text-sm text-gray-800">{area.zipCodes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surrounding Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Also Serve Surrounding Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't see your city listed? Give us a call - we service many additional communities throughout the Greater Los Angeles area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {surroundingAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <svg className="w-6 h-6 text-primary-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-800 font-medium text-sm">{area}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Not sure if we service your area? Contact us and we'll let you know!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Service Coverage Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Local HVAC Service?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Response Times</h3>
                    <p className="text-gray-600">
                      Being local means we can get to you quickly. Most service calls are answered the same day.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Climate Expertise</h3>
                    <p className="text-gray-600">
                      We understand the unique climate challenges of Southern California and provide solutions that work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Commitment</h3>
                    <p className="text-gray-600">
                      We're invested in our community. Your comfort and satisfaction directly impact our neighbors and reputation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Better Value</h3>
                    <p className="text-gray-600">
                      Lower overhead costs mean competitive pricing without sacrificing quality or service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Area Coverage</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-4xl font-bold text-primary-600 mb-2">50+</p>
                    <p className="text-gray-700 font-medium">Cities & Communities</p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-4xl font-bold text-primary-600 mb-2">30</p>
                    <p className="text-gray-700 font-medium">Mile Service Radius</p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-4xl font-bold text-primary-600 mb-2">&lt;60</p>
                    <p className="text-gray-700 font-medium">Minute Response Time</p>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-600 mb-3">Emergency Service Available</p>
                  <a href="tel:8185554822" className="text-2xl font-bold text-primary-600 hover:text-primary-700">
                    (818) 555-HVAC
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Consistent Service Excellence Across All Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No matter where you are in our service area, you'll receive the same high-quality service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">On-Time Guarantee</h3>
              <p className="text-gray-600">
                We respect your time. Our technicians arrive within the scheduled window or we'll credit your service.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Certified Technicians</h3>
              <p className="text-gray-600">
                Every technician is fully licensed, certified, and background-checked for your safety and peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                We're not satisfied until you are. 100% satisfaction guarantee on all our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Schedule Your Service Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Experience the NorthernWindHVAC difference in your neighborhood
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request Service
            </Link>
            <a
              href="tel:8185554822"
              className="bg-white hover:bg-gray-100 text-primary-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Call (818) 555-HVAC
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
