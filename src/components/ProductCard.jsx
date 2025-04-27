const ProductCard = ({ product }) => {
    if (!product) return null;
  
    return (
      <div data-aos="fade-up" className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400">{product.description}</p>
        <span className="text-green-400 font-semibold">{product.price}</span>
      </div>
    )
  }

  export default ProductCard;