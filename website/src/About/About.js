import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about'>
        <div className='container'>
            <div className='about-section'>
                <div className='about-img'>
                    <img src='https://fuodborne-react-next-js.vercel.app/assets/images/about.jpg'></img>
                </div>
                <div className='about-p'>
                      <p>Welcome To Our Fuodborne Farms</p>
                      <h1>Organic Food - Farm Fresh Produce Right To Your Door</h1>
                      <div className='natural'>
                      <h3>Natural Products</h3>
                      <p>Organically grown crops tend to use natural fertilizers like manure to improve plant growth. 
                        Animals raised 
                        organically are also not given antibiotic organic hormones most commonly purchased organic .</p>
                        </div>
                        <div className='wheat'>
                       <h3>Wheat Cultivation</h3>
                       <p>Organically grown crops tend to use natural fertilizers like manure to improve plant growth. 
                        Animals raised
                        organically are also not given antibiotic organic hormones most commonly purchased organic .</p> 
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About