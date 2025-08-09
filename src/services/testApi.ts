import axios from "axios";
import api from "./api";
import { data } from "react-router-dom";

export const getAllTests = async()=>{
    const res = await api.get('/tests');
    return res.data;
}

export const getTestById = async(id:string)=>{
    const res = await api.get(`/tests/${id}`);
    return res.data;
}

export const submitTest = async(id:string,data:any)=>{
    const res = await api.post(`/tests/${id}/submit`,data)
    return res.data;
}

export const getResult = async(id:string)=>{
    const res = await api.get(`tests/${id}/result`)
    return res.data;
}