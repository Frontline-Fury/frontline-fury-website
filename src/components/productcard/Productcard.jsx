import React from 'react';
import Rating from 'react-rating-stars-component';

const Productcard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <div className="rating">
        <Rating
          count={5}
          value={product.rating}
          size={20}
          activeColor="#ffd700"
          edit={false}
        />
        <span>({product.reviewCount})</span>
      </div>
      <p className="description">{product.description}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default Productcard;