import Link from 'next/link'
import '/app/css/layout.css'

const Header = () => {
    return (

      <header className='nav'>
            <div className="ul">
                <Link href='/' className='portfolio'>
                    <h1 > Grace Portofolio </h1>
                </Link>
            </div>

            <nav>
              <ul className='ul'>
                <li> 
                  <Link href='/projet1' className='lien'>
                    Projet 1
                  </Link> 
                </li>

                <li> 
                  <Link href='/projet2' className='lien'>
                    Projet 2
                  </Link> 
                </li>

                <li> 
                  <Link href='/temoignages' className='lien'>
                    Contact
                  </Link> 
                </li>
              </ul>
            </nav>     
      </header>
      
    );
}

export default Header;