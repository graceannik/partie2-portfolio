'use client';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { updateComment} from "/strore/reducers/commentReducer";
import '/app/css/contact.css'
import '/app/css/temoignage.css'

const Modifier = ({params}) => {

    const dispatch = useDispatch()
    const {email} = params
    const router = useRouter()
    const comment = useSelector(state => state.comment.comments)
    
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

    useEffect(() => {
        if (comment) setState(comment)
    }, [comment])

    function submit(event) {
        event.preventDefault() 
        email && dispatch(updateComment(state, email))
        router.push('/temoignages')
    }

    return (<>
        <h2 className='contacter'> Modifier votre message</h2>

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
            <button type="submit"  className='envoyer'> MODIFIER </button> 
        </form>   
        </>
    );
}

export default Modifier;