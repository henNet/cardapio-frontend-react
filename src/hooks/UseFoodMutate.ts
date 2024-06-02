import axios, { AxiosPromise } from "axios";
import FoodData from "../interface/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// const API_URL = "http://localhost:8080/food";
const API_URL = "https://cardapio-nodejs-postgres.vercel.app/food";

const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(API_URL, data);
    return response;
}

const putData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.put(API_URL + `/${data.id}`, data);
    return response;
}

const deleteData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.delete(API_URL + `/${data.id}`);
    return response;
}

function useFoodDataMutate(method: string){
    const queryCliente = useQueryClient();

    let mtFn = undefined;
    if(method === "POST"){
        mtFn = postData
    }else if(method === "PUT"){
        mtFn = putData;
    }else{
        mtFn = deleteData;
    }

    const mutate = useMutation({
        mutationFn: mtFn,
        retry: 2,
        onSuccess: () => {
            queryCliente.invalidateQueries({queryKey:['food-data']})
        }
    })

    return mutate;
}

export default useFoodDataMutate;