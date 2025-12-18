import Link from 'next/link';

export const metadata = {
  title: 'About Us - NorthernWindHVAC | Your Trusted HVAC Partner',
  description: 'Learn about NorthernWindHVAC, a family-owned HVAC company serving Glendale, Burbank, Pasadena, and surrounding areas for over 15 years.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About NorthernWindHVAC
            </h1>
            <p className="text-xl text-blue-100">
              Your trusted HVAC partner for over 15 years, delivering comfort and reliability to homes and businesses across the Greater Los Angeles area.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2010, NorthernWindHVAC began with a simple mission: to provide honest, reliable, and professional HVAC services to our community. What started as a small family-owned business has grown into one of the most trusted names in heating and cooling throughout the Greater Los Angeles area.
                </p>
                <p>
                  Over the years, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. We treat every home and business as if it were our own, ensuring that our customers receive the best possible solutions for their heating and cooling needs.
                </p>
                <p>
                  Today, with a team of certified technicians and thousands of satisfied customers, we continue to uphold the values that made us successful: integrity, expertise, and a genuine commitment to customer satisfaction.
                </p>
              </div>
            </div>
            <div className="bg-primary-100 rounded-lg p-8 lg:p-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary-600 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed, bonded, and insured for your protection and peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-600 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Technicians</h3>
                    <p className="text-gray-600">Our team is trained and certified in the latest HVAC technologies and best practices.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-600 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                    <p className="text-gray-600">Emergency service available around the clock because comfort can't wait.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We believe in honest communication, transparent pricing, and doing what's right for our customers, even when no one is watching.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We're committed to delivering superior service and workmanship on every job, no matter how big or small.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Care</h3>
              <p className="text-gray-600">
                Your comfort and satisfaction are our top priorities. We're not satisfied until you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4 text-white text-4xl font-bold">
                JM
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">John Martinez</h3>
              <p className="text-primary-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                20+ years of HVAC experience with a passion for customer service excellence
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4 text-white text-4xl font-bold">
                RL
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Robert Lee</h3>
              <p className="text-primary-600 font-medium mb-2">Lead Technician</p>
              <p className="text-gray-600 text-sm">
                NATE certified with expertise in residential and commercial systems
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4 text-white text-4xl font-bold">
                MJ
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Maria Johnson</h3>
              <p className="text-primary-600 font-medium mb-2">Customer Service Manager</p>
              <p className="text-gray-600 text-sm">
                Dedicated to ensuring every customer experience exceeds expectations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Customers Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start">
              <div className="bg-primary-600 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upfront Pricing</h3>
                <p className="text-gray-600">No hidden fees or surprise charges. You'll know exactly what you're paying before we start.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-600 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Same-Day Service</h3>
                <p className="text-gray-600">When you need HVAC service, you need it now. We offer same-day service for most repairs.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-600 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Satisfaction Guarantee</h3>
                <p className="text-gray-600">We stand behind our work with a 100% satisfaction guarantee on all services.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-600 rounded-full p-2 mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Energy Efficiency Experts</h3>
                <p className="text-gray-600">We help you save money with energy-efficient solutions and expert recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the NorthernWindHVAC Difference
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers who trust us with their comfort
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="bg-white hover:bg-gray-100 text-primary-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
