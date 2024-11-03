export default function FeaturedProducts() {
    const products = [
      {
        name: 'Pro Design Suite',
        description: 'Professional design tools for creative work',
        price: '$99.99',
        category: 'Design',
      },
      {
        name: 'Code Editor Pro',
        description: 'Advanced code editor for developers',
        price: '$79.99',
        category: 'Development',
      },
      {
        name: 'Business Analytics',
        description: 'Powerful business intelligence software',
        price: '$149.99',
        category: 'Business',
      },
    ];
  
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.name}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  {/* Product Image Placeholder */}
                  <div className="h-48 bg-gray-200 rounded-md"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">{product.price}</span>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }