import React,{useEffect} from 'react';
import './DownloadApp.css';
import playStoreAppImage from '../../assets/play_store.png';
import appStoreImage from '../../assets/app_store.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
function DownloadApp() {
  useEffect(() => {
      AOS.init({ duration: 1000 });
    }, [])
  
  return (
    <div className='app-download' id="app">
      <h2 className='text-center fw-bold' data-aos="fade-down">For Better Experience Download <br/> Tomato App</h2>
      <div className="apps d-flex justify-content-center mt-4" data-aos="fade-up">
        <img src={playStoreAppImage} alt="" />
        <img src={appStoreImage} alt="" />
      </div>
    </div>
  )
}

export default DownloadApp;
