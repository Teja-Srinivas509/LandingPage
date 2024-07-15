import React from 'react'
import '../Footer/Footer.css'

function Footer() {
  return (
    <div className='footer' id='footer'>
       <footer>
        <div class="footer-list-container">
            <div class="footer-list-item">
            <h4>Few Words About Aria</h4>
            <p class="white">We're passionate about delivering the best business growth services for companies just starting out as startups or industry players that have established their market position a long tima ago.</p>
            </div>
           <div className='footer-links'>
           <div class="footer-link-item">
                <h5>LINKS</h5>
                <p>startupguide.com</p>
                <p>Terms</p>
                <p>Privacy Policy</p>
            </div>
            <div class="footer-link-item">
                <h5>TOOLS</h5>
                <p>businessgrowth.com</p>
                <p>influencers.com</p>
                <p>optimizer.net</p>
            </div>
            <div class="footer-link-item">
                <h5>PARTNERS</h5>
                <p>unicorns.com</p>
                <p>association.gov</p>
                <p>staffmanager.com</p>
            </div>
           </div>
        </div>
        <p className='copy'>CopyRight &copy; 20454 ALL Rights are Reserved - By Teja </p>
    </footer> 
    </div>
  )
}

export default Footer
