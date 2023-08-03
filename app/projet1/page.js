import img1 from '.././img/img_projet1.1.png'
import img2 from '.././img/img_projet1.2.png'
import img3 from '.././img/img_projet1.3.png'
import img4 from '.././img/img_projet1.4.png'
import img5 from '.././img/img_projet1.5.png'
import img6 from '.././img/img_projet1.6.png'
import '.././css/projet.css'

import Gallerie from "./../galleries/page";

const Projet1 = () => {

    const gall = [
        { src: img1 , alt: 'projet1', className: 'projet'},
        { src: img2 , alt: 'projet1', className: 'projet'},
        { src: img3 , alt: 'projet1', className: 'projet'},
        { src: img4 , alt: 'projet1', className: 'projet'},
        { src: img5 , alt: 'projet1', className: 'projet'},
        { src: img6 , alt: 'projet1', className: 'projet'}
        
    ];

    return ( <>
        <section>
            <section >
                <h2 className='container'>Projet - Site web de décoration d'intérieur</h2>
                
                <div className='section'>
                 
                    <div>
                        <p className='container'>
                            Mon premier projet consisteras tout simplement à créer un site web de décoration d'intérieur. Pour créer ce type de site web,
                             il me faudras concevoir une interface attrayante en utilisant HTML, CSS, JS. 
                             Pour  créer des composants réutilisables et dynamiques j'utiliserais l'application React, Node JS pour la gestion du backend 
                             et une base de données SQL pour stocker les informations. Mon site web intégreras diverse fonctionnalités 
                             tel que  la visualisation de galeries d'images, la recherche de produits et la possibilité de contacter des designers.
                        </p>
                        <p className='container'>
                            Je compte donc bien évidement me servir du site de la marque Houzz, comme exemple pour le mien. Vous trouverez ci desous les outils que compte utilisé pour la création de mon site.
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
                
        </section>
    </>)
}

export default Projet1;