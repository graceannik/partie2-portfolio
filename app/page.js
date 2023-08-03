import React from 'react'
import Info from '/app/acceuil/Info'
import Toggler from '/app/acceuil/toggler'
import profil from '/app/img/profil.jpg'
import '/app/css/acceuil.css'
import Gallerie from "/app/galleries/page";

const Home = () => {

    const profille = [
        { src: profil , alt: 'profil'}
        
    ];

    return (
        <div>

            <div className="banner">
            <h2>GRACE ANNICK DJUSSI</h2>
            <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>

            <div >

                
                <Toggler titre="A propos" >
                    
                    <div className="presentation">
                        <Gallerie images={profille} />
                        <p> 
                            Je suis actuellement étudiant en programmation informatique à La Cité à Ottawa,
                            avec une date prévue d'obtention du diplôme en septembre 2023. J'ai également obtenu un 
                            baccalauréat scientifique en 2019 à l'I.P.B TATIE à Douala. Mes compétences informatiques
                            comprennent Android Studio, Visual Studio, React, Node.js, et plus encore. Je suis très 
                            ponctuel, respectueux et j'ai une grande facilité d'apprentissage. J'ai de l'expérience de 
                            travail en tant que plongeuse, caissière, aide en cuisine et dans le service à la clientèle.
                        
                        </p>
                    </div>
                    
                </Toggler> 
                    
                <Toggler titre="Mes études" >
                    
                <div className='div' >
                    <Info text="Programmation Informatique (2022 - )" className = {Info.text}/>
                        La Cité, Ottawa (Ontario) <br />
                        Date prévue d'obtention du diplôme : Septembre 2023                 
                </div>

                <div className='div'>
                    <Info text="Baccalauréat Scientifique (2019)" />
                        I.P.B TATIE, Douala (Littoral) <br />
                        (Une année complétée)
                </div>

                </Toggler> 
    
                <Toggler titre="Compétences">
                    <div className='div' >
                        <Info text="Compétences informatique " />
                        Android Studio, Visual Studio, VS Community, React, 
                        Node Js, XCode, java sql, Apache, Inteligi, Azure, WORD, PowerPoint, MongoDB
                    </div>

                    <div className='div' >
                        <Info text="Compétences personnelles " />
                        Très ponctuelle et respectueuse, vous pouvez me faire confiance <br />
                        Très grande facilité d'apprentissage que ce soit pour les technologies, outils spécialisées ou dans l'apprentissage scolaire <br />
                        Ouverture à la critique et capacité d'adaptation
                    </div>

                </Toggler>

            
            </div>

        </div>
    );
}

export default Home;