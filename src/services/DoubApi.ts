import api from '../services/api'

export const getMyDoubts = async()=>{
    const res = await api.get('/doubts/my')
    return res.data;
}

//backend is handling the the student Id and all.
export const createDoubt = async (question:string)=>{
    const res = await api.post('/doubts',{question});

    return res.data;
}

export const deleteDoubt = async (id:string)=>{
    const res = await api.delete(`/doubts/my/${id}`)
    return res.data
}