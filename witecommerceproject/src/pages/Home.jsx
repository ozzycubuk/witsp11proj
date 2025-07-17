import { useHistory } from "react-router-dom";
import Swiper from 'swiper';
import 'swiper/css';


export default function Home() {
  const history = useHistory();

  return (
    <main>     
      <section>
        <div class="container">
          <div>
              <div className="navigatetop">
                <h1>Bandage</h1>
                <nav>
                <a href="/">Home</a>
                <div className="navproduct">
                  <a href="/products">Shop</a>
                  <div className="product-dropdown">
                    <div>
                      <a className="product-dropdown-baslik" href="/products/women">Kadın</a>
                      <a href="/products/women/bags">Bags</a>
                      <a href="/products/women/belts">Belts</a>
                      <a href="/products/women/cosmetics">Cosmetics</a>
                      <a href="/products/women/hats">Hats</a>
                    </div>
                    <div>
                      <a className="product-dropdown-baslik" href="/products/men">Erkek</a>
                      <a href="/products/men/bags">Bags</a>
                      <a href="/products/men/belts">Belts</a>
                      <a href="/products/men/cosmetics">Cosmetics</a>
                      <a href="/products/men/hats">Hats</a>
                    </div>
                  </div>
                </div>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
                <a href="/pages">Pages</a>
                </nav>
              </div>
          </div>
          <div className="editorspick">
            <div className="men">
              <button>MEN</button>
            </div>
            <div className="women">
              <button>WOMEN</button>
            </div>
            <div>
              <div className="accessories">
                <button>ACCESSORIES</button>
              </div>
              <div className="kids">
                <button>KIDS</button>
              </div>
            </div>
          </div>
          <div className= "bestsellerproducts">
            <div>
              <h2>BESTSELLER PRODUCTS</h2>
            </div>
            <div>
              <div className="bestsellerimagebar">
                <img alt="Product 1" />
                <img alt="Product 2" />
                <img alt="Product 3" />
              </div>
              <div className="bestsellerimagebar">
                <img alt="Product 4" />
                <img alt="Product 5" />
                <img alt="Product 6" />
              </div>            
            </div>
          </div>
          <div className= "slider"></div>
          <div className="buynow"></div>
          <div className="featuredposts"></div>
          <div className="socialsandinfo">
            <div>
              <div>
                <p>Bandage</p>
              </div>
              <div>Social Pictures and references</div>
            </div>
            <div>
              <div>
                <div>
                  <h3>Company Info</h3>
                </div>
                <div>
                  <a>About Us</a>
                  <a>Career</a>
                  <a>We are hiring</a>
                  <a>Blog</a>
                </div>
              </div>
              <div>
                <div>
                  <h3>Legal</h3>
                </div>
                <div>
                  <a>About Us</a>
                  <a>Career</a>
                  <a>We are hiring</a>
                  <a>Blog</a>
                </div>
              </div>
              <div>
                <div>
                  <h3>Features</h3>
                </div>
                <div>
                  <a>Business Marketing</a>
                  <a>User Analytic</a>
                  <a>Live Chat</a>
                  <a>Unlimited Support</a>
                </div>
              </div>
              <div>
                <div>
                  <h3>Resources</h3>
                </div>
                <div>
                  <a>IOS & Android</a>
                  <a>Watch a Demo</a>
                  <a>Customers</a>
                  <a>API</a>
                </div>
              </div>
              <div>
                <div>
                  <form>
                    <label htmlFor="email">Get In Touch</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
