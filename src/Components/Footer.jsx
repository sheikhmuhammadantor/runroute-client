import { Link } from 'react-router-dom'
import logo from '../assets/footerLogo.png'

function Footer() {
  return (
    <section className='bg-base-200 text-base-content '>
      <footer className="footer p-10 max-w-[1380px] mx-auto">
        <aside>
          <img className='max-h-20 border border-dashed border-base-content rounded-md mb-2' src={logo} alt="" />
          <p className="max-w-xs">
            RunRoute connects runners and organizers for seamless marathon events. Join us to manage, participate, and excel in your marathon journey.
          </p>
        </aside>
        <nav className='mx-auto'>
          <h6 className="footer-title">LEARN MORE</h6>
          <Link className="link link-hover">Pricing</Link>
          <Link className="link link-hover">How it works</Link>
          <Link className="link link-hover">APIs</Link>
          <Link className="link link-hover">Support</Link>
        </nav>
        <nav className='mx-auto'>
          <h6 className="footer-title">About</h6>
          <Link className="link link-hover">FAQs</Link>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact us</Link>
        </nav>
      </footer>
      <section className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by RunRoute</p>
        </aside>
      </section>
    </section>
  )
}

export default Footer
