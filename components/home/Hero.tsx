export default function Hero() {
    return (
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Find Your Perfect Software Solution
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Browse through our curated collection of premium software products
            </p>
            <div className="mt-8">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50">
                Browse Products
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }