import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Internet Shop <i>CODE WANTS TO BE SIMPLE </i> Our team at Internet Shop ensures a complete and rewarding personal shopping experience, addressing all your needs. With our open availability seven days a week, you can enjoy the full range of features and benefits we offer.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="/">Products</a></li>
              <li><a href="/">Categories</a></li>
              <li><a href="/">Market</a></li>
              <li><a href="/">Create Your Product</a></li>
              <li><a href="/">Buy Product</a></li>
              <li><a href="/">Free Account</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Contribute</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by
              <a href="/">Aziz</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}