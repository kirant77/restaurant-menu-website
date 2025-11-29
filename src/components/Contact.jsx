import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Reservation request submitted! We will contact you shortly.');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="relative py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Reserve a Table</span>
                    <h2 className="text-5xl md:text-6xl font-playfair font-bold mt-4 mb-6">
                        <span className="gradient-text">Join Us</span> <span className="text-white">Tonight</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Book your table now and experience culinary excellence
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="glass rounded-3xl p-8">
                        <h3 className="text-2xl font-playfair font-bold text-white mb-6">Reservation Details</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                                    placeholder="+1 (555) 123-4567"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Time</label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Guests</label>
                                    <select
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                            <option key={num} value={num} className="bg-dark-800">{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Special Requests</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors resize-none"
                                    placeholder="Any dietary restrictions or special occasions?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
                            >
                                Confirm Reservation
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="space-y-6">
                        {/* Contact Cards */}
                        <div className="glass rounded-3xl p-8">
                            <h3 className="text-2xl font-playfair font-bold text-white mb-6">Get in Touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold mb-1">Location</div>
                                        <div className="text-gray-400">123 Gourmet Street, Culinary District<br />New York, NY 10001</div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">📞</span>
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold mb-1">Phone</div>
                                        <div className="text-gray-400">+1 (555) 123-4567</div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">✉️</span>
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold mb-1">Email</div>
                                        <div className="text-gray-400">reservations@gourmetbistro.com</div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">🕐</span>
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold mb-1">Hours</div>
                                        <div className="text-gray-400">
                                            Mon-Thu: 5:00 PM - 10:00 PM<br />
                                            Fri-Sat: 5:00 PM - 11:00 PM<br />
                                            Sunday: 4:00 PM - 9:00 PM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass rounded-3xl p-8">
                            <h3 className="text-xl font-playfair font-bold text-white mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                {['Instagram', 'Facebook', 'Twitter', 'TikTok'].map((social) => (
                                    <button
                                        key={social}
                                        className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg hover:bg-gradient-to-br hover:from-primary-400 hover:to-primary-600 hover:border-transparent transition-all duration-300 flex items-center justify-center text-xl"
                                    >
                                        {social[0]}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
