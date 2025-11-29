import React from 'react';

const About = () => {
    const features = [
        {
            icon: '👨‍🍳',
            title: 'Master Chefs',
            description: 'Our team of award-winning chefs brings decades of culinary expertise'
        },
        {
            icon: '🌿',
            title: 'Fresh Ingredients',
            description: 'Locally sourced, organic ingredients delivered daily to our kitchen'
        },
        {
            icon: '⭐',
            title: 'Premium Quality',
            description: 'Every dish meets our rigorous standards of excellence and taste'
        },
        {
            icon: '🍷',
            title: 'Fine Wines',
            description: 'Curated wine selection from renowned vineyards around the world'
        }
    ];

    return (
        <section id="about" className="relative py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
                        <h2 className="text-5xl md:text-6xl font-playfair font-bold mt-4 mb-6">
                            <span className="text-white">A Story of</span>
                            <br />
                            <span className="gradient-text">Passion & Flavor</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Since 2020, Gourmet Bistro has been redefining fine dining with our unique blend
                            of traditional techniques and modern innovation. Every dish is a testament to our
                            commitment to culinary excellence.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Our philosophy is simple: use the finest ingredients, respect traditional methods,
                            and never stop innovating. The result is an unforgettable dining experience that
                            delights all your senses.
                        </p>

                        {/* Signature */}
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-3xl">
                                👨‍🍳
                            </div>
                            <div>
                                <div className="text-white font-playfair text-xl font-bold">Chef Marcus Laurent</div>
                                <div className="text-gray-400">Executive Chef & Founder</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="glass p-6 rounded-2xl card-hover"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-playfair font-bold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="mt-20 glass rounded-3xl p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">5+</div>
                            <div className="text-gray-400">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">50+</div>
                            <div className="text-gray-400">Menu Items</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">15</div>
                            <div className="text-gray-400">Expert Chefs</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">98%</div>
                            <div className="text-gray-400">Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
