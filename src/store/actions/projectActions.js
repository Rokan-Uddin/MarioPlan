export const createProject = (project) => {
  console.log(project)
    return (dispatch, getState, {getFirebase}) => {

      const firestore = getFirebase().firestore();
      //getState().firebase() can help to find firstname,lastname,userid 
      firestore.collection('projects').add({
        ...project,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
    }
  };