import React from 'react';
import './Footer.css'
import footer from '../images/footer.svg'

const Footer = () => {
  return (
    <div className='footer-main-container'>
      <div className='footer-img-container'>
        <img src={footer} className='main-footer-img' alt=''></img>
      </div>
      <div className='footer-middle'></div>
      <div className='footer-lower'>
        <div className='socials-main'>
          <div className='footer-middle-left'>
            <div className='footer-happily-header'>© 2022 Anya</div>
            <div className='footer-happily-description'>An e-commerce site for demonstration purposes only.</div>
          </div>
          <div className='footer-middle-right'>
            <div className='socials-inner'>
              <div><i class="fa-brands fa-github"></i></div>
              <div>
                <a href='https://github.com/andreazwu/anya-etsy.git' className="social-link" target="_blank" >Github</a>
              </div>
            </div>
            <div className='socials-inner'>
              <div><i class="fa-brands fa-linkedin"></i></div>
              <div>
                <a href='https://www.linkedin.com/in/yashayang/' className="social-link" target="_blank">Aijia</a>
              </div>
            </div>
            <div className='socials-inner'>
              <div><i class="fa-brands fa-linkedin"></i></div>
              <div>
                <a href='https://www.linkedin.com/in/yashayang/' className="social-link" target="_blank">Nannan</a>
              </div>
            </div>
            <div className='socials-inner'>
              <div><i class="fa-brands fa-linkedin"></i></div>
              <div>
                <a href='https://www.linkedin.com/in/yashayang/' className="social-link" target="_blank">Yasha</a>
              </div>
            </div>
            <div className='socials-inner'>
              <div><i class="fa-brands fa-linkedin"></i></div>
              <div>
                <a href='https://www.linkedin.com/in/yashayang/' className="social-link" target="_blank">Andrea</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer
