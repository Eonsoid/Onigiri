import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';
import logo from './assets/logo.png';

const Homepage = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('food-order');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Get user data from localStorage
  const userData = JSON.parse(localStorage.getItem('user')) || {};
  const userName = userData.name || 'Guest';
  
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Vegan Pizza Dough', quantity: 1, price: 120.00, icon: '🍕' },
    { id: 2, name: 'Pepperoni Pizza', quantity: 1, price: 180.00, icon: '🍕' },
    { id: 3, name: 'Fish Burger & Vege', quantity: 1, price: 150.00, icon: '🍔' },
  ]);

  // Navigation items
  const navItems = [
    { id: 'food-order', label: 'Food Order', icon: '🍔' },
    { id: 'favorite', label: 'Favorite', icon: '❤️' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'order-history', label: 'Order History', icon: '📋' },
    { id: 'others', label: 'Others', icon: '⚙️' },
  ];

  // Categories
  const categories = [
    { id: 'indian', name: 'Indian', icon: '🍛' },
    { id: 'japanese', name: 'Japanese', icon: '🍣' },
    { id: 'chinese', name: 'Chinese', icon: '🍲' },
    { id: 'burger', name: 'Burger', icon: '🍔' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'french-fries', name: 'French Fries', icon: '🍔' },
    { id: 'rolls', name: 'Rolls', icon: '🍱' },
    { id: 'beverage', name: 'Beverages', icon: '🥤' },
     
    
  ];

  // Popular dishes
  const popularDishes = [
    { id: 1, name: 'Butter Chicken', price: '₹189', discount: '15% Off', icon: '🍗' },
    { id: 2, name: 'Sushi Platter', price: '₹259', discount: '10% Off', icon: '🍣' },
    { id: 3, name: 'Spring Rolls', price: '₹149', discount: '20% Off', icon: '🍱' },
    { id: 4, name: 'Manchurian Soup', price: '₹119', discount: '25% Off', icon: '🍜' },
    { id: 5, name: 'Dim Sum', price: '₹289', discount: '25% Off', icon: '🥟' },
    { id: 6, name: 'Peking Duck', price: '₹329', discount: '15% Off', icon: '🦆' },
    { id: 7, name: 'Kung Pao', price: '₹179', icon: '🥟' },
    { id: 8, name: 'Tempura', price: '₹99', discount: 'Buy 2 Get 1', icon: '🍤' },
    { id: 9, name: 'Biryani', price: '₹349', discount: 'Special', icon: '🍛' },
  ];

  // Recent orders
  const recentOrders = [
    { id: 1, name: 'Spicy Ramen', time: '10:30 AM', icon: '🍜' },
    { id: 2, name: 'Salmon Sushi', time: 'Yesterday', icon: '🍣' },
    { id: 3, name: 'Chocolate Cake', time: 'Dec 12', icon: '🍰' },
  ];

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 40.00;
  const total = subtotal + deliveryFee;

  // Handlers
  const handleAddToCart = (dish) => {
    alert(`Added ${dish.name} to cart!`);
  };

  const handleCheckout = () => {
    alert(`Proceeding to checkout! Total: ₹${total.toFixed(2)}`);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="homepage-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="Onigiri Logo" className="logo-image" />
          <h1>ONIGIRI</h1>
        </div>
        
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
              onClick={() => setActiveNav(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="main-header">
          <div className="user-profile">
            <div className="profile-image">👤</div>
            <div className="user-info">
              <h3>Welcome back, {userName}!</h3>
              <p>Ready to order delicious food?</p>
            </div>
          </div>
          <button className="notification-btn">🔔</button>
        </header>

        {/* Discount Banner */}
        <section className="discount-banner">
          <div className="banner-content">
            <h2>Get Up To 20% Discount On Your First Order</h2>
            <p>
              Get the absolute best out of the main dishes that are prepared by the top 1% of chefs 
              around the world. Don't hesitate to get started now!
            </p>
            <button className="order-btn" onClick={() => alert('Order now!')}>
              Order Now
            </button>
          </div>
          <div className="banner-image">🍣</div>
        </section>

        {/* Categories */}
        <section className="categories-section">
          <h2 className="section-title">Category</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="category-icon">{category.icon}</div>
                <div className="category-name">{category.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="content-columns">
          {/* Left Column - Popular Dishes */}
          <div className="left-column">
            <section className="dishes-section">
              <h2 className="section-title">
                Popular Dishes
                <a href="#" className="view-all">View all</a>
              </h2>
              <div className="dishes-grid">
                {popularDishes.map((dish) => (
                  <div key={dish.id} className="dish-card">
                    <div className="dish-image">
                      <span className="dish-badge">{dish.discount}</span>
                      <span className="dish-emoji">{dish.icon}</span>
                    </div>
                    <div className="dish-info">
                      <h3 className="dish-name">{dish.name}</h3>
                      <div className="dish-price">{dish.price}</div>
                      <button 
                        className="order-btn"
                        style={{marginTop: '15px', width: '100%'}}
                        onClick={() => handleAddToCart(dish)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Order Menu */}
            <section className="order-menu">
              <h2 className="section-title">Order Menu</h2>
              <div className="menu-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="menu-item">
                    <span className="item-name">
                      {item.icon} {item.name}
                    </span>
                    <span className="item-quantity">X{item.quantity}</span>
                    <span className="item-price">+₹{item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="delivery-row">
                <span>Delivery</span>
                <span>+₹{deliveryFee.toFixed(2)}</span>
              </div>
              
              <div className="total-row">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </section>

            {/* Checkout Section */}
            <section className="checkout-section">
              <a href="#" className="coupon-link">Get a coupon code?</a>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="right-sidebar">
            {/* Recent Orders */}
            <section className="recent-orders">
              <h2 className="section-title">
                Recent Order
                <a href="#" className="view-all">View all</a>
              </h2>
              <div className="orders-list">
                {recentOrders.map((order) => (
                  <div key={order.id} className="order-item">
                    <div className="order-icon">{order.icon}</div>
                    <div className="order-details">
                      <h4>{order.name}</h4>
                      <p>{order.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Balance Card */}
            <section className="balance-card">
              <h2 className="section-title" style={{color: 'white'}}>Your Balance</h2>
              <div className="balance-amount">₹20.04</div>
              <div className="balance-actions">
                <button className="balance-btn">
                  <span>💳</span>
                  <span>Transfer</span>
                </button>
                <button className="balance-btn">
                  <span>➕</span>
                  <span>Add</span>
                </button>
                <button className="balance-btn">
                  <span>₿</span>
                  <span>Crypto</span>
                </button>
              </div>
            </section>

            {/* Address Card */}
            <section className="address-card">
              <div className="address-header">
                <h2 className="section-title">Your Address</h2>
                <button className="change-btn">Change</button>
              </div>
              <h3 style={{marginBottom: '10px', color: 'var(--text-dark)'}}>
                Plot No. 42, Sector 5, CDA Building
              </h3>
              <p className="address-text">
                Saheed Nagar, Bhubaneswar, Odisha 751019, India
              </p>
              <button className="add-details-btn">
                <span>➕</span>
                <span>Add Details</span>
              </button>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="homepage-footer">
          <p>© 2026 Onigiri - Delicious Food Delivery</p>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </footer>
      </main>
    </div>
  );
};

export default Homepage;