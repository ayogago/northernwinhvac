import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC Services - AC Repair, Heating Installation & Maintenance',
  description: 'Professional HVAC services in Los Angeles: AC installation & repair, heating systems, furnace maintenance, indoor air quality. 24/7 emergency service. Free estimates. Call (818) 555-HVAC!',
  keywords: ['AC repair Los Angeles', 'heating installation', 'HVAC maintenance', 'furnace repair', 'air conditioning service', 'emergency HVAC', 'indoor air quality'],
  openGraph: {
    title: 'Professional HVAC Services | NorthernWindHVAC',
    description: 'Complete heating and cooling services for homes and businesses. AC repair, heating installation, maintenance plans, and 24/7 emergency service.',
    type: 'website',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional HVAC Services
            </h1>
            <p className="text-xl text-blue-100">
              Comprehensive heating, cooling, and air quality solutions for residential and commercial properties
            </p>
          </div>
        </div>
      </section>

      {/* Air Conditioning Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block bg-primary-100 rounded-full p-4 mb-6">
                <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Air Conditioning Services
              </h2>
              <p className="text-gray-600 mb-6">
                Stay cool and comfortable all summer long with our comprehensive AC services. From installation to repair and maintenance, we've got you covered.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">New AC system installation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">AC repair and diagnostics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">AC maintenance and tune-ups</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Energy-efficient system upgrades</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Refrigerant recharge and leak detection</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our AC Services?</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our certified technicians are trained on all major brands and models, ensuring expert service no matter what system you have.
                </p>
                <p>
                  We offer same-day service for most AC repairs, so you won't have to suffer through the heat for long.
                </p>
                <div className="bg-white rounded-lg p-4 mt-6">
                  <p className="text-sm text-gray-600 mb-2">Average AC installation time:</p>
                  <p className="text-3xl font-bold text-primary-600">4-8 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heating Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Heating System Expertise</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Don't get caught in the cold with a broken furnace. Our heating experts provide fast, reliable service to keep your home warm all winter.
                </p>
                <p>
                  We work with all types of heating systems including furnaces, heat pumps, boilers, and radiant heating.
                </p>
                <div className="bg-white rounded-lg p-4 mt-6">
                  <p className="text-sm text-gray-600 mb-2">Emergency heating repairs:</p>
                  <p className="text-3xl font-bold text-secondary-600">Available 24/7</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-secondary-100 rounded-full p-4 mb-6">
                <svg className="w-12 h-12 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Heating & Furnace Services
              </h2>
              <p className="text-gray-600 mb-6">
                Keep your home warm and cozy with our comprehensive heating services. From furnace installation to emergency repairs, we're here to help.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Furnace installation and replacement</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Heating system repair</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Annual heating maintenance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Heat pump services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Thermostat installation and repair</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional HVAC Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete comfort solutions for your home or business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Maintenance Plans */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preventive Maintenance Plans</h3>
              <p className="text-gray-600 mb-4">
                Regular maintenance keeps your HVAC system running efficiently and prevents costly breakdowns. Our maintenance plans include:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Bi-annual system inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Filter replacement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>System cleaning and tune-up</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Priority emergency service</span>
                </li>
              </ul>
            </div>

            {/* Indoor Air Quality */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Indoor Air Quality</h3>
              <p className="text-gray-600 mb-4">
                Breathe easier with our air quality solutions that remove pollutants, allergens, and contaminants:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Air purification systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>HEPA filtration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>UV air sanitizers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Humidity control systems</span>
                </li>
              </ul>
            </div>

            {/* Duct Services */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Duct Cleaning & Repair</h3>
              <p className="text-gray-600 mb-4">
                Clean, sealed ductwork is essential for efficient HVAC operation and good air quality:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Professional duct cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Duct sealing and repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Duct insulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Airflow optimization</span>
                </li>
              </ul>
            </div>

            {/* Commercial HVAC */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-secondary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial HVAC</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive HVAC solutions for businesses of all sizes:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Commercial system installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Rooftop unit service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Building automation systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Scheduled maintenance programs</span>
                </li>
              </ul>
            </div>

            {/* Emergency Service */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-secondary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600 mb-4">
                HVAC emergencies don't wait for business hours. Neither do we:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Available 24/7/365</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Rapid response times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Fully stocked service vehicles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Expert technicians on call</span>
                </li>
              </ul>
            </div>

            {/* Smart Thermostats */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Thermostat Installation</h3>
              <p className="text-gray-600 mb-4">
                Upgrade to a smart thermostat for better control and energy savings:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Nest, Ecobee, Honeywell installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>WiFi thermostat setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Smart home integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Energy monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Flexible Financing Options</h2>
                <p className="text-blue-100 mb-6">
                  Don't let budget concerns prevent you from getting the HVAC service you need. We offer flexible financing options to make your comfort affordable.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Competitive rates</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Quick approval process</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Multiple payment plans</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-8 text-gray-900">
                  <p className="text-sm text-gray-600 mb-2">Financing starting at</p>
                  <p className="text-5xl font-bold text-primary-600 mb-2">0%</p>
                  <p className="text-xl text-gray-700 mb-4">APR</p>
                  <p className="text-sm text-gray-600">For qualified buyers. Terms and conditions apply.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Schedule Service?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and quote. Our friendly team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:8185554822"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Call (818) 555-HVAC
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
