export const signIn = (credintials) => {
    return (dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(credintials.email,credintials.password)
        .then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        })
        .catch((err)=> {
            dispatch({type:'LOGIN_ERROR', err})
        })
    }
}