import React, { useState } from 'react';

const menuData = {
    appetizers: [
        {
            id: 1,
            name: 'Truffle Bruschetta',
            description: 'Artisan bread topped with black truffle, ricotta, and honey drizzle',
            price: '$18',
            image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop',
            tags: ['Vegetarian', 'Popular']
        },
        {
            id: 2,
            name: 'Seared Scallops',
            description: 'Pan-seared scallops with cauliflower purée and crispy pancetta',
            price: '$24',
            image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop',
            tags: ['Seafood', 'Chef Special']
        },
        {
            id: 3,
            name: 'Caesar Salad',
            description: 'Classic Caesar with crispy romaine, parmesan, and house-made dressing',
            price: '$14',
            image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
            tags: ['Vegetarian']
        }
    ],
    mains: [
        {
            id: 4,
            name: 'Wagyu Beef Steak',
            description: 'Premium wagyu ribeye with roasted vegetables and red wine reduction',
            price: '$65',
            image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop',
            tags: ['Premium', 'Chef Special']
        },
        {
            id: 5,
            name: 'Lobster Risotto',
            description: 'Creamy saffron risotto with fresh lobster and microgreens',
            price: '$48',
            image: 'https://images.unsplash.com/photo-1476124369491-c4cc9b41b94a?w=400&h=300&fit=crop',
            tags: ['Seafood', 'Popular']
        },
        {
            id: 6,
            name: 'Truffle Pasta',
            description: 'Fresh tagliatelle with black truffle, parmesan, and butter sauce',
            price: '$38',
            image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
            tags: ['Vegetarian', 'Popular']
        }
    ],
    desserts: [
        {
            id: 7,
            name: 'Chocolate Lava Cake',
            description: 'Warm chocolate cake with molten center, vanilla ice cream',
            price: '$16',
            image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop',
            tags: ['Popular']
        },
        {
            id: 8,
            name: 'Crème Brûlée',
            description: 'Classic French custard with caramelized sugar and fresh berries',
            price: '$14',
            image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=300&fit=crop',
            tags: ['Chef Special']
        },
        {
            id: 9,
            name: 'Tiramisu',
            description: 'Traditional Italian dessert with espresso-soaked ladyfingers',
            price: '$15',
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
            tags: ['Popular']
        }
    ]
};

const MenuCard = ({ item }) => {
    return (
        <div className="glass rounded-2xl overflow-hidden card-hover group">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60"></div>

                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-primary-500/90 backdrop-blur-sm text-white text-xs rounded-full font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-playfair font-bold text-white group-hover:text-primary-400 transition-colors">
                        {item.name}
                    </h3>
                    <span className="text-2xl font-bold gradient-text">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                </p>

                {/* Add to Order Button */}
                <button className="mt-4 w-full py-2 border border-primary-500/50 text-primary-400 rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300 font-medium">
                    Add to Order
                </button>
            </div>
        </div>
    );
};

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('appetizers');

    const categories = [
        { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
        { id: 'mains', name: 'Main Courses', icon: '🍽️' },
        { id: 'desserts', name: 'Desserts', icon: '🍰' }
    ];

    return (
        <section id="menu" className="relative py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Menu</span>
                    <h2 className="text-5xl md:text-6xl font-playfair font-bold mt-4 mb-6">
                        <span className="gradient-text">Culinary</span> <span className="text-white">Masterpieces</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Each dish is crafted with passion, using only the finest seasonal ingredients
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/50 scale-105'
                                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            <span className="mr-2">{category.icon}</span>
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuData[activeCategory].map((item) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                </div>

                {/* Download Menu CTA */}
                <div className="text-center mt-16">
                    <button className="glass px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                        Download Full Menu
                        <span className="inline-block ml-2 group-hover:translate-y-1 transition-transform">↓</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Menu;
