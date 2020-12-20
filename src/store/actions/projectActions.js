export const createProject = (project) => {
    return (dispatch, getState, {getFirebase}) => {

      const firestore = getFirebase().firestore();
      firestore.collection('projects').add({
        ...project,
        authorFirstName: 'Rokan',
        authorLastName: 'Uddin',
        authorId: 17701023,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
    }
  };