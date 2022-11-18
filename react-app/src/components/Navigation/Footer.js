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
              <div><i className="fa-brands fa-github"></i></div>
              <div>
                <a href='https://github.com/andreazwu/anya-etsy.git' className="social-link" target="_blank" >Project Repo</a>
              </div>
            </div>
            <div className='socials-inner'>
              {/* <div><i className="fa-brands fa-linkedin"></i></div> */}
              <div><i className="fa-brands fa-github"></i></div>
              <div>
                <a href='https://github.com/wangaijia618' className="social-link" target="_blank">Aijia Wang</a>
              </div>
            </div>
            <div className='socials-inner'>
              {/* <div><i className="fa-brands fa-linkedin"></i></div> */}
              <div><i className="fa-brands fa-github"></i></div>
              <div>
                <a href='https://github.com/codeznn' className="social-link" target="_blank">Nannan Zhang</a>
              </div>
            </div>
            <div className='socials-inner'>
              {/* <div><i className="fa-brands fa-linkedin"></i></div> */}
              <div><i className="fa-brands fa-github"></i></div>
              <div>
                <a href='https://github.com/yashayang' className="social-link" target="_blank">Yasha Yang</a>
              </div>
            </div>
            <div className='socials-inner'>
              {/* <div><i className="fa-brands fa-linkedin"></i></div> */}
              <div><i className="fa-brands fa-github"></i></div>
              <div>
                <a href='https://github.com/andreazwu' className="social-link" target="_blank">Andrea Wu</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer
