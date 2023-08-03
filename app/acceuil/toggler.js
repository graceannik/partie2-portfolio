import  '.././css/toggler.css'

const Toggler = ({titre, children}) => {

    return <>
        <div  className='title'>
            {titre}
        </div>
        {
            <div className='contenu'>
                {children}
            </div>
        }
    </>
}

export default Toggler;