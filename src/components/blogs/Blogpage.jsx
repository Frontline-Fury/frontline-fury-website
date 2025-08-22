import React, { useState } from 'react';
import './Blogpage.css';
import spikeRushImg from '../assests/Sr1.jpg';

const Blogpage = () => {
  const [email, setEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  const blogPosts = [
    {
      id: 1,
      title: "New Map Expansion: Desert Strike",
      excerpt: "We're excited to announce the new Desert Strike map expansion, bringing intense close-quarters combat to the arid dunes of the Karakum Desert.",
      date: "June 15, 2023",
      category: "Game Updates",
      image: spikeRushImg,
    },
    {
      id: 2,
      title: "5 Advanced Strategies for Ranked Play",
      excerpt: "Master these advanced strategies to climb the ranks in competitive play and dominate your opponents...",
      date: "June 10, 2023",
      category: "Tips & Tricks",
      image: spikeRushImg,
    },
    {
      id: 3,
      title: "Community Spotlight: Top Content Creators",
      excerpt: "Check out this month's featured content creators who are making amazing Frontline Fury videos and guides...",
      date: "June 5, 2023",
      category: "Community",
      image: spikeRushImg,
    },
    {
      id: 4,
      title: "Behind the Scenes: Weapon Balancing",
      excerpt: "Learn about our process for weapon balancing and how we ensure fair gameplay for all players...",
      date: "May 28, 2023",
      category: "Development",
      image: spikeRushImg,
    },
    {
      id: 5,
      title: "Frontline Fury Championship Announced",
      excerpt: "The first official Frontline Fury championship tournament has been announced with a $500,000 prize pool...",
      date: "May 20, 2023",
      category: "Esports",
      image: spikeRushImg,
    },
    {
      id: 6,
      title: "New Character Class: Medic",
      excerpt: "The new Medic class brings healing and support capabilities to the battlefield, changing team dynamics...",
      date: "May 15, 2023",
      category: "Game Updates",
      image: spikeRushImg,
    }
  ];

  const categories = ["All", "Game Updates", "Tips & Tricks", "Esports", "Community", "Development"];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-page">
      {/* Hero Section */}
     
      <section className="aboutus-header">
          <h1>welcome to our blogs</h1>
          <p>Your Gateway to Frontline Adventures</p>
        </section>

      {/* Blog Content */}
      <div className="blog-container">
        <div className="blog-layout">
          <main className="blog-main">
            {/* Category Filter */}
            <div className="blog-category-filter">
              {categories.map(category => (
                <button
                  key={category}
                  className={activeCategory === category ? 'blog-active' : ''}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Featured Post */}
            <div className="blog-featured-post">
              <div className="blog-post-card">
                <div className="blog-post-image">
                  <div className="blog-post-category">{blogPosts[0].category}</div>
                  <img src={blogPosts[0].image} alt={blogPosts[0].title} />
                </div>
                <div className="blog-post-content">
                  <div className="blog-post-date">{blogPosts[0].date}</div>
                  <h2 className="blog-post-title">{blogPosts[0].title}</h2>
                  <p className="blog-post-excerpt">{blogPosts[0].excerpt}</p>
                  <a href="sds" className="blog-read-more">Read More</a>
                </div>
              </div>
            </div>

            {/* Blog Grid */}
            <div className="blog-grid">
              {filteredPosts.slice(1).map(post => (
                <div key={post.id} className="blog-post-card">
                  <div className="blog-post-image">
                    <div className="blog-post-category">{post.category}</div>
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-post-content">
                    <div className="blog-post-date">{post.date}</div>
                    <h2 className="blog-post-title">{post.title}</h2>
                    <p className="blog-post-excerpt">{post.excerpt}</p>
                    <a href="sds" className="blog-read-more">Read More</a>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* About Widget */}
            <div className="blog-sidebar-widget">
              <h3 className="blog-widget-title">About Frontline Fury</h3>
              <p>Frontline Fury is a competitive first-person shooter game that combines tactical gameplay with intense action. Join millions of players worldwide in epic battles.</p>
            </div>

            {/* Categories Widget */}
            <div className="blog-sidebar-widget">
              <h3 className="blog-widget-title">Categories</h3>
              <ul className="blog-categories-list">
                <li><a href="as">Game Updates <span>12</span></a></li>
                <li><a href="asa">Tips & Tricks <span>24</span></a></li>
                <li><a href="dsd">Esports <span>8</span></a></li>
                <li><a href="sds">Community <span>15</span></a></li>
                <li><a href="sdsd">Development <span>9</span></a></li>
              </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="blog-sidebar-widget">
              <h3 className="blog-widget-title">Recent Posts</h3>
              <div className="blog-recent-post">
                <div className="blog-recent-post-img">
                  <img src={blogPosts[1].image} alt="Recent Post" />
                </div>
                <div className="blog-recent-post-content">
                  <h4><a href="sds">{blogPosts[1].title}</a></h4>
                  <div className="blog-recent-post-date">{blogPosts[1].date}</div>
                </div>
              </div>
              <div className="blog-recent-post">
                <div className="blog-recent-post-img">
                  <img src={blogPosts[2].image} alt="Recent Post" />
                </div>
                <div className="blog-recent-post-content">
                  <h4><a href="sds">{blogPosts[2].title}</a></h4>
                  <div className="blog-recent-post-date">{blogPosts[2].date}</div>
                </div>
              </div>
              <div className="blog-recent-post">
                <div className="blog-recent-post-img">
                  <img src={blogPosts[3].image} alt="Recent Post" />
                </div>
                <div className="blog-recent-post-content">
                  <h4><a href="sds">{blogPosts[3].title}</a></h4>
                  <div className="blog-recent-post-date">{blogPosts[3].date}</div>
                </div>
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="blog-sidebar-widget">
              <h3 className="blog-widget-title">Newsletter</h3>
              <p>Subscribe to our newsletter to receive updates about new content, events, and more.</p>
              <form className="blog-newsletter-form" onSubmit={handleSubscribe}>
                <div className="blog-form-group">
                  <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <button type="submit" className="blog-subscribe-btn">Subscribe</button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
