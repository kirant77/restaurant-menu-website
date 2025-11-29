import React, { useState } from 'react';

const Navbar = ({ scrolled }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-lg py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">G</span>
                            </div>
                            <span className="text-2xl font-playfair font-bold gradient-text">
                                Gourmet Bistro
                            </span>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['home', 'menu', 'about', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="text-gray-300 hover:text-white transition-colors duration-300 capitalize font-medium animated-underline pb-1"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="hidden md:block px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
                        >
                            Reserve Table
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-white z-50"
                        >
                            {mobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <div className="absolute inset-0 bg-dark-900/95 backdrop-blur-lg" onClick={() => setMobileMenuOpen(false)} />
                <div className="relative h-full flex flex-col items-center justify-center space-y-8">
                    {['home', 'menu', 'about', 'contact'].map((item, index) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="text-3xl font-playfair font-bold text-white hover:text-primary-400 transition-colors duration-300 capitalize"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {item}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
                    >
                        Reserve Table
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
