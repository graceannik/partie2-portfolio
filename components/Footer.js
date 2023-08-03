import React from 'react'
import '/app/css/footer.css'

const Footer = () => {

    return (
        <div className='footer'>
            <p className='contain'>  &copy; Copyright Grace Annick Djussi </p>  
            <p className='contain'> 
                <a href='https://github.com/graceannik/partie2-portfolio' className='link' target='_blank' rel='noopener noreferrer'> 
                    Git hub
                </a> 
             </p>
    
            <div className='contain'> 
                <a href='https://www.linkedin.com/in/djussi-grace-43089923b/' className='link' target='_blank' rel='noopener noreferrer'>
                Mon profil linkedin
                </a>
            </div>
        </div>
      )
}

export default Footer;