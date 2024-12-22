import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="footer p-10 container mx-auto font-semibold">
      <aside className='mx-auto'>
        <Link to='/' className="btn btn-ghost text-xl px-0">
          <img className='h-full bg-white rounded-lg' src={logo} alt="FundFusions Logo" />
        </Link>
        <p>
          An online real estate investing platform
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav className='mx-auto'>
        <h6 className="footer-title">About</h6>
        <a className="link link-hover">About CrowdStreet</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Disclosures</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Company News</a>
      </nav>
      <nav className='mx-auto'>
        <h6 className="footer-title">Invest</h6>
        <a className="link link-hover">Marketplace</a>
        <a className="link link-hover">Ways To Invest</a>
        <a className="link link-hover">Marketplace Performance</a>
        <a className="link link-hover">Investment Screening Process</a>
        <a className="link link-hover">Our Investor Commitments</a>
        <a className="link link-hover">Previous Investment</a>
        <a className="link link-hover">Opportunities</a>
      </nav>
      <nav className='mx-auto'>
        <h6 className="footer-title">INVESTOR RESOURCES</h6>
        <a className="link link-hover">CRE Education</a>
        <a className="link link-hover">CRE Market Outlook</a>
        <a className="link link-hover">New Investor Orientation</a>
        <a className="link link-hover">Help Center</a>
      </nav>
      <nav className='mx-auto'>
        <h6 className="footer-title">FOR SPONSORS</h6>
        <a className="link link-hover">Raise Capital</a>
        <a className="link link-hover">Is Your Deal Right For</a>
        <a className="link link-hover">CrowdStreet?</a>
        <a className="link link-hover">Get On The Marketplace</a>
        <a className="link link-hover">Post Fundraiser Management</a>
        <a className="link link-hover">Results</a>
        <a className="link link-hover">Request Info</a>
      </nav>
    </footer>
  )
}

export default Footer
