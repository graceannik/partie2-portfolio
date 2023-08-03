import Image from 'next/image'
import styles from '.././css/galeries.css'
import css from '.././css/projet.css';

const  Gallerie = ({images}) =>  {
    return <div className='gallerie'>
        {images.map((element, index) => 
            <Image 
                src={element.src} 
                alt={element.alt} 
                width={element.width} 
                height={element.height} 
                key={index} />
        )}
    </div>
}

export default Gallerie;