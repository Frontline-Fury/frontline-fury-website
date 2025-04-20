import React, { useState, useEffect } from 'react';
import './Market.css';
import ProductCard from '../productcard/Productcard';
import merchcombo from '../assests/merch.png'
import jacket from '../assests/jacket.png'
import keychains from '../assests/keychains.png'
import lower from '../assests/lower.png'
import whiteshirt from '../assests/whiteshirt.png'
import bottle from '../assests/bottle.png'

const Market = () => {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // In a real app, you would fetch from your API
        // const response = await axios.get('/api/products');
        
        // Mock data for demonstration
        const mockProducts = [
          {
            id: 1,
            name: 'Organic Cotton T-Shirt',
            price: 24.99,
            rating: 4.5,
            reviewCount: 128,
            description: 'Comfortable organic cotton t-shirt in white color',
            image: whiteshirt,
            category: 'T-Shirts'
          },
          {
            id: 2,
            name: 'keychains',
            price: 24.99,
            rating: 4.2,
            reviewCount: 56,
            description: 'Comfortable organic cotton t-shirt in various colors',
            image: keychains,
            category: 'Keychains'
          },
          {
            id: 3,
            name: 'T-Shirt and Keychains Set',
            price: 24.99,
            rating: 4.2,
            reviewCount: 56,
            description: 'Comfortable organic cotton t-shirt in various colors',
            image: merchcombo,
            category: 'Combos'
          },
          {
            id: 4,
            name: 'Jacket',
            price: 59.99,
            rating: 4.2,
            reviewCount: 56,
            description: 'Comfortable organic jacket in various colors',
            image: jacket,
            category: 'Jackets'
          },
          
          {
            id: 5,
            name: 'Organic Cotton lower',
            price: 24.99,
            rating: 4.2,
            reviewCount: 56,
            description: 'Comfortable organic cotton lower in various colors',
            image: lower,
            category: 'Lowers'
          },

          {
            id: 6,
            name: 'Water Bottle',
            price: 24.99,
            rating: 4.2,
            reviewCount: 56,
            description: 'Insulated water bottles in various colors',
            image: bottle,
            category: 'Bottle'
          },
          // Add more products as needed
        ];
        
        setProducts(mockProducts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || product.category === filter;
    return matchesSearch && matchesFilter;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;




  return (
    <div><div className="marketplace">
    <div className="marketplace-header">
      <h1>Marketplace</h1>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="T-Shirts">T-Shirts</option>
          <option value="Keychains">Keychains</option>
          <option value="Jackets">Jackets</option>
          <option value="Lowers">Lowers</option>
          <option value="Bottle">Water Bottle</option>
          <option value="Combos">Combos</option>
        </select>
      </div>
    </div>
    
    <div className="products-grid">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="no-results">No products found matching your criteria.</div>
      )}
    </div>
  </div></div>
  )
}

export default Market;