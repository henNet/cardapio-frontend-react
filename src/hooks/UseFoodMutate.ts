import axios, { AxiosPromise } from "axios";
import FoodData from "../interface/FoodData";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/food";

const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(API_URL, data);
    return response;
}

const putData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.put(API_URL + `/${data.id}`, data);
    return response;
}

function useFoodDataMutate(method: string){
    const queryCliente = useQueryClient();

    let mtFn = undefined;
    method === "POST"? mtFn = postData: mtFn = putData;

    const mutate = useMutation({
        mutationFn: mtFn,
        retry: 2,
        onSuccess: () => {
            queryCliente.invalidateQueries(['food-data'])
        }
    })

    return mutate;
}

export default useFoodDataMutate;