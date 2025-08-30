import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <strong>Rae Shop</strong>
          </Link>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <input type="text" className="input" placeholder="Search..." />
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <Link className="navbar-item" to="/shop">
            Shop
          </Link>
          <Link className="navbar-item" to="/cart">
            🛒
          </Link>
        </div>
      </nav>

      {/* Featured Banner */}
      <section className="hero is-info is-medium">
        <div className="hero-body has-text-centered">
          <h1 className="title">FEATURED BANNER</h1>
          <h2 className="subtitle">Your tagline or promotion goes here</h2>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="button is-centered">
          <button className="button is-light">Category</button>
          <button className="button is-light">Category</button>
          <button className="button is-light">Category</button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section">
        <div className="columns is-multiline is-centered">
          <div className="dolum is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image is4by3">
                  {" "}
                  <img src="https://via.placeholder.com/150" alt="Product" />
                </figure>
              </div>
              <div className="card-content has-text-centered">
                <p className="title is-6">Product Name</p>
                <p>$19.99</p>
                <button className="button is-primary mt-2">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="https://via.placeholder.com/150" alt="Product" />
                </figure>
              </div>
              <div className="card-content has-text-centered">
                <p className="title is-6">Product Name</p>
                <p>$24.99</p>
                <button className="button is-primary mt-2">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer has-text-centered">
        <p>
          <a href="/about">About Us</a> | <a href="/contact">Contact</a> |{" "}
          <a href="/privacy">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
