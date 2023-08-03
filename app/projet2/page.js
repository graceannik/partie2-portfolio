import img1 from '.././img/img_projet2.1.png'
import img2 from '.././img/img_projet2.2.png'
import img3 from '.././img/img_projet2.3.png'
import img4 from '.././img/img_projet2.4.png'
import img5 from '.././img/img_projet2.5.png'
import img6 from '.././img/img_projet2.6.png'
import '.././css/projet.css'

import Gallerie from "./../galleries/page";
import Head from "next/head";

const Projet2 = () => {

    const gall = [
        { src: img1 , alt: 'projet2'},
        { src: img2 , alt: 'projet2'},
        { src: img3 , alt: 'projet2'},
        { src: img4 , alt: 'projet2'},
        { src: img5 , alt: 'projet2'},
        { src: img6 , alt: 'projet2'}
        
    ];

    return (<>
        <section>
            <h2 className='container'>Projet - Site web de cours en ligne</h2>
            <div className='section'>
                <div>
                    <p className='container'>
                        Pour mon second projet je compte réalisé un site web offrant des cours en ligne.
                         Ce site web permettras aussi au utilisateurs de créer les leurs.
                          Mon objetcif est de permettre aux utilisateurs d'acquérir de nouvelles connaissances en developement web.
                          Tout comme pour mon premier projet, j'utiliserais pour celui ci les meme outils de developement.
                          Ici les utilisateurs auront la possibilité de prendre des cours personnalisé avec des proffésionnelle pour pouvoir accélérer leurs apprententissage, 
                          ils bénificient également de cours écrit et d'enregistrement de cours.
                          Ils peuvent évoluer à leur rythme sans prise de tete et à tout moment stopper cet apprententissage. 
                    </p>

                    <p className='container'>
                        Ce site seras mon point de départ principal puisque je souhaite devenir programmeur. Il est donc très important pour le début de ùa carrière proffésionnelle. 
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h2 className='container'>Technologies</h2>
            <ul className='technologie'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JSX</li>
                <li>React</li>
                <li>Node Js</li>
                <li>BD SQL</li>
            </ul>
        </section>

        <section>
                <h2 className='container'>Voici quelques images qui illustrent notre projet</h2>
                <section className='image'>          
                    <div >
                        <Gallerie images={gall} />
                    </div>
                </section>
        </section>
      
    </>)
}

export default Projet2;