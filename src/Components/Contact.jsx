import React from 'react';

const Contact = () => {
    return (
        <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Left Side */}
          <div className="bg-blue-600 text-white p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">
              Get In Touch
            </h2>

            <p className="text-blue-100 mb-8">
              Have questions about jobs, hiring, or our platform?
              We'd love to hear from you. Fill out the form and our
              team will get back to you as soon as possible.
            </p>

            <div className="space-y-5">
              <div>
                <h4 className="font-semibold">📍 Address</h4>
                <p className="text-blue-100">
                  Agrabad, Chattogram, Bangladesh
                </p>
              </div>

              <div>
                <h4 className="font-semibold">📧 Email</h4>
                <p className="text-blue-100">
                  support@jobportal.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold">📞 Phone</h4>
                <p className="text-blue-100">
                  +880 1234-567890
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Us
            </h2>

            <form className="space-y-5">

              <div>
                <label className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
    );
};

export default Contact;