import logo from '../assets/footerLogo.png'

function Footer() {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <img className='max-h-20 border border-dashed border-black rounded-md' src={logo} alt="" />
          <p className="max-w-xs">
            CrowdStreet is a real estate investing platform access to individual <br /> commercial real estate investment opportunities, your own investment criteria.
          </p>
        </aside>
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
          <a className="link link-hover">Raise Capital</a>
        </nav>
      </footer>
      <section className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by RunRoute</p>
        </aside>
      </section>
    </>
  )
}

export default Footer
