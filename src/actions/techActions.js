import {GET_TECHS,ADD_TECH,DELETE_TECH,TECHS_ERROR,SET_LOADING} from './types';


export const getTechs = () =>async dispatch =>{
    try{
        setLoading();

        const res = await fetch('/techs');
        const data = await res.json();
        dispatch({
            type:GET_TECHS,
            payload: data
        });
    } catch(err){
        dispatch({
            types: TECHS_ERROR,
            payload:err.response.statusText
        })
    }
}

// Add tech
export const addTech = (tech) =>async dispatch =>{
    try{
        setLoading();

        const res = await fetch('/techs',{
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type:ADD_TECH,
            payload: data
        });

    } catch(err){
        dispatch({
            type: TECHS_ERROR,
            payload:err.response.statusText
        });
    }
};

export const setLoading = () =>{
    return{
        type: SET_LOADING
    }
}