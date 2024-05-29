import axios, { AxiosPromise } from "axios";
import FoodData from "../interface/FoodData";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/food";

const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(API_URL, data);
    return response;
}

function useFoodDataMutate(){
    const queryCliente = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryCliente.invalidateQueries(['food-data'])
        }
    })

    return mutate;
}

export default useFoodDataMutate;