'use client';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addComment, getComment, deleteComment } from "/strore/reducers/commentReducer";
import '.././css/contact.css'
import Link from 'next/link'

const Contact = () => {
    
    const dispatch = useDispatch()
    const router = useRouter()
    const comments = useSelector(state => state.comment.comments)
    
    const [state, setState] = useState({
        nom: '',
        prenom: '',
        email: '',
        message: '',
    })

    function handleChange(event) {  
        const { name, value, checked, type } = event.target
        setState(previsouState => ({ ...previsouState, [name]: type === 'checkbox' ? checked : value })) 
    }
    
    function goToEdit(email) {  
        dispatch(getComment(email))
        router.push(`/modifier/${email}`)
    }

    function supprimer(email) {  
        dispatch(deleteComment(email))
    }

    function submit(event) {
        event.preventDefault() // Eviter le rafraichissement de la page ( eviter la soumission)
        dispatch(addComment({ ...state, email: comments.length + 1 }))
        setState(prev => ({
            ...prev,
            prenom: '',
            nom: '',
            email: '',
            message: ''
        }))  // Reinitialiser la forme apres la soumission
    }

    return ( <>

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

        <h2 className='contacter'> CONTACTEZ MOI</h2>

        <form className='form' onSubmit={submit}>   

            <div>
                <label className='label'>
                    <p className='paragraphe'>Nom : </p>  
                    <input  type="text" placeholder="Nom" className='input' value={state.nom} onChange={handleChange} name='nom' id='nom'/> 
                </label>
            </div>      

            <div>
                <label className='label'>
                    <p className='paragraphe'>Prenom :</p> 
                    <input type="text" placeholder="Prenom" className='input' value={state.prenom} onChange={handleChange} name='prenom' id='prenom'/> 
                </label>
            </div>    
            
            <div>
                <label className='label'>
                    <p className='paragraphe'>Adresse courriel :</p> 
                    <input type="text" placeholder="Adresse email" className='input' value={state.email} onChange={handleChange} name='email' id='email'/> 
                </label>
            </div>    
            
            <div>
                <label className='label'>
                    <p className='paragraphe'>Message :</p> 
                    <textarea rows="10" cols="80" maxlength="200" placeholder="Que voulez vous me dire ?" className='input' value={state.message} onChange={handleChange} name='message' id='message'/>        
                </label>
            </div>     
            
            <button type="submit"  className='envoyer' > SOUMETTRE</button>
        </form>   
    </>)
}

export default Contact;