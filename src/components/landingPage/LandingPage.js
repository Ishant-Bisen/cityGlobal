import React from 'react'
import { Link} from 'react-router-dom'
import AdmLogin from '../AdminDash/AdmLogin'

export default function LandingPage() {
  
  return (
    <div>
       <div className="logo-menu">
                <div className="logo-container">
                    <img
                        src="images/img2/logo.png"
                        alt="Logo of a bank website"
                        className="website-logo"
                        style={{
                        width: "11rem"
                    }}/>
                </div>
                <nav className="main-nav">
                    <ul className="main-nav__item">
                        <li className="main-nav__list">
                            <Link a to="/" className="main-nav__link">Home</Link>
                        </li>
                        <li className="main-nav__list">
                            <Link a to="/" className="main-nav__link">About</Link>
                        </li>
                        <li className="main-nav__list">
                            <Link a to="/" className="main-nav__link">How It Works</Link>
                        </li>
                        <li className="main-nav__list">
                            <Link a  to="/" className="main-nav__link">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <form action="/signin">
                    <button className="main-btn --header">Login</button>
                </form>
                {/* <!-- <img
        src="images/icon-hamburger.svg"
        alt="Hamburger menu icon for mobile devices"
        className="mobile-menu-icon"
      /> --> */}
            </div>
      <header className="header-main">
      <div className="images-wrapper">
        <div className="menu-background"></div>
        <img
        src="images/img2/image-mockups.png"
        alt="Four telephones on a table"
        className="telephones"
      />
        <img
        src="images/img2/bg-intro-desktop.svg"
        alt="Colorful background with abstract shapes"
        className="header-main-background-desktop"
      />
      </div>
      <div className="header__text">
        <h1 className="header-main__heading">
          Save Time and Start Digital Wallet!
        </h1>
        <p className="header-main__subtitle">
          Take your financial life online. Get the world leading system of
          escrow financing!
        </p>
        <form>
          <Link to ="/register">
          <button className="main-btn">Get Started</button>
          </Link>
        </form>
      </div>
    </header>
    {/* <!-- **** END OF HEADER ****  --> */}
    <section className="features">
      <div className="f-wrapper">
        <h2 className="features__heading">Why Choose Us?</h2>
        <p className="features__subtitle">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="features-wrapper">
          <div className="feature">
            <img src="images/img2/icon-online.svg" alt="" className="feature-image" />
            <h3 className="feature-name">Online Banking</h3>
            <p className="feature__subtitle">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="feature">
            <img src="images/img2/icon-budgeting.svg" alt="" className="feature-image" />
            <h3 className="feature-name">Simple Budgeting</h3>
            <p className="feature__subtitle">
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div className="feature">
            <img
              src="images/img2/icon-onboarding.svg"
              alt=""
              className="feature-image"
            />
            <h3 className="feature-name">Fast Onboarding</h3>
            <p className="feature__subtitle">
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="feature">
            <img src="images/img2/icon-api.svg" alt="" className="feature-image" />
            <h3 className="feature-name">Open API</h3>
            <p className="feature__subtitle">
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- **** END OF FEATURES SECTION ****  --> */}
     {/* <section className="articles">
      <h2 className="articles__heading">Latest Articles</h2>
      <div className="articles-wrapper">
        <div className="article">
          <img
            src="images/img2/
            
            image-currency.jpg"
            alt="Picture shows big amount of money"
            className="article__image --normal"
          />
          <p className="article__autor">By Claire Robinson</p>
          <h3 className="article__heading">
            Receive money in any currency with no fees
          </h3>
          <p className="article__subtitle">
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </p>
        </div>
        <div className="article">
          <img
            src="images/image-restaurant.jpg"
            alt="Picture shows big amount of money"
            className="article__image"
          />
          <p className="article__autor">By Wilson Hutton</p>
          <h3 className="article__heading">
            Treat yourself without worrying about money
          </h3>
          <p className="article__subtitle">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </p>
        </div>
        <div className="article">
          <img
            src="images/image-plane.jpg"
            alt="Picture shows big amount of money"
            className="article__image"
          />
          <p className="article__autor">By Wilson Hutton</p>
          <h3 className="article__heading">
            Take your Easybank card wherever you go
          </h3>
          <p className="article__subtitle">
            We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …
          </p>
        </div>
        <div className="article">
          <img
            src="images/image-confetti.jpg"
            alt="Picture shows big amount of money"
            className="article__image"
          />
          <p className="article__autor">By Claire Robinson</p>
          <h3 className="article__heading">
            Our invite-only Beta accounts are now live!
          </h3>
          <p className="article__subtitle">
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site ...
          </p>
        </div>
      </div>
    </section> --> */}
    {/* <!-- **** END OF ARTICLES SECTION ****  --> */}
    <footer className="main-footer">
      <div className="social-media-wrapper">
        <img
          src="images\img2\logo.png"
          alt="Logo of a bank website"
          className="mobile-website-logo"
          style={{width: "11rem"}}
        />
      </div>
      <nav className="footer-nav">
        <ul className="footer-nav__item">
          <li className="footer-nav__list">
            <a href="/" className="footer-nav__link">About us</a>
          </li>
          <li className="footer-nav__list">
            <a href="/" className="footer-nav__link">Contact</a>
          </li>
          <li className="footer-nav__list">
            <a href="/" className="footer-nav__link">How it Works</a>
          </li>
          <li className="footer-nav__list">
            <a href="/" className="footer-nav__link">Support</a>
          </li>
          <li className="footer-nav__list">
            <a href="/" className="footer-nav__link">Privacy Policy</a>
          </li>
        </ul>
      </nav>
      <div className="copyright">
        <form >
          <Link to =  "/register">
          <button className="main-btn-1 main-btn" >SignUp</button>
          </Link>
        </form>
        <p className="main-footer__copyright">© CityGlobaly. All Rights Reserved</p>
      </div>
    </footer>
    </div>
  )
}

