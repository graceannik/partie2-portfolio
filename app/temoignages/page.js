'use client';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { getComment, deleteComment } from "/strore/reducers/commentReducer";
import '.././css/contact.css'
import '.././css/temoignage.css'
import Link from 'next/link'

const Temoignages = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    const comments = useSelector(state => state.comment.comments)
    
    const [state, setState] = useState({
        nom: '',
        prenom: '',
        email: '',
        message: '',
    })

    function goToEdit(id) {  
        dispatch(getComment(id))
        router.push(`/modifier/${id}`)
    }

    function supprimer(id) {  
        dispatch(deleteComment(id))
    }

    return (<>
        {comments.length ? ( <> 
        
            <h1>Liste des commentaires</h1>

            <table className='liste-des-commentaires'>
                <thead>
                    <tr>
                        <td>Nom</td>
                        <td>Prénom</td>
                        <td>Email</td>
                        <td>Message</td>
                        <td>Actions</td>
                    </tr>
                </thead>

                <tbody>
                    {comments.map(comment => <tr key={comment.email}>
                            <td>{comment.nom}</td>
                            <td>{comment.prenom}</td>
                            <td>{comment.email}</td>
                            <td>{comment.message}</td>
                            <td className="actions">
                                <button className='editer' onClick={() => goToEdit(comment.email)}>Modifier</button>
                                <button onClick={() => supprimer(comment.email)} className='supprimer'>Supprimer</button>
                            </td>
                        </tr>
                    )}
                </tbody>
                
        
            </table>
        
            </> ): ''}

            <Link href={{pathname:'/contact'}} className='ajout-commentaire'>
                <button >
                    Ajouter votre contact
                </button>
            </Link>
        </>
    );
}

export default Temoignages;