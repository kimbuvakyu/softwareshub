export default function CategoryGrid() {
    const categories = [
      { name: 'Business Software', icon: '💼', count: 24 },
      { name: 'Design Tools', icon: '🎨', count: 18 },
      { name: 'Development', icon: '💻', count: 32 },
      { name: 'Security', icon: '🔒', count: 16 },
      { name: 'Productivity', icon: '⚡', count: 28 },
      { name: 'Education', icon: '📚', count: 20 },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div 
                key={category.name}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} Products</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }