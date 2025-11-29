import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8 animate-fadeInUp">
                        <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                        <span className="text-sm text-gray-300">Est. 2020 • Fine Dining Experience</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                        <span className="gradient-text">Exquisite</span>
                        <br />
                        <span className="text-white">Culinary Journey</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                        Where every dish tells a story of passion, creativity, and the finest ingredients
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                        <button
                            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 group"
                        >
                            Explore Menu
                            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                        <button className="px-8 py-4 glass text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
                            View Gallery
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                        <div className="glass p-6 rounded-2xl card-hover">
                            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                            <div className="text-gray-400 text-sm">Signature Dishes</div>
                        </div>
                        <div className="glass p-6 rounded-2xl card-hover">
                            <div className="text-4xl font-bold gradient-text mb-2">5★</div>
                            <div className="text-gray-400 text-sm">Michelin Rating</div>
                        </div>
                        <div className="glass p-6 rounded-2xl card-hover">
                            <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
                            <div className="text-gray-400 text-sm">Happy Guests</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-primary-500 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
