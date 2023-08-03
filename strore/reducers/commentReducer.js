//1- Les actions 

const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const UPDATE_COMMENT = 'UPDATE_COMMENT'
const LIST_COMMENT = 'LIST_COMMENT'
const CURRENT_COMMENT = 'CURRENT_COMMENT'

//2 - Createurs d'actions 

export const addComment = (comment) => ({ type: ADD_COMMENT, payload: comment })

export const updateComment = (comment, email) => ({ type: UPDATE_COMMENT, payload: { comment, email } })

export const deleteComment = email => ({ type: DELETE_COMMENT, payload: { email } })

export const getAllComment = (comments) => ({ type: LIST_COMMENT, payload: comments })

export const getComment = email => ({ type: CURRENT_COMMENT, payload: { email } })


// Le reducteur pour les etudiants

// --Definir l'etat initial pour l'objet global pour les etudiants

const initialState = {
    comments: [],
    comment: {}
}

// Faites attention aux comparaison == et === car les types son differents des fois
export const commentReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case LIST_COMMENT:
            return { ...state, comments: payload }
        case CURRENT_COMMENT:
            return { ...state, comment: state.comments.find(comment => comment.email === payload.email) }

        case ADD_COMMENT:
            return { ...state, comments: [...state.comments, payload] }

        case UPDATE_COMMENT:
            return { ...state, comments: state.comments.map(comment => comment.email == payload.email ? payload.comment : comment) }

        case DELETE_COMMENT:
            return { ...state,comments: state.comments.filter(comment => comment.email !== payload.email) }

        default:
            return state
    }
}
