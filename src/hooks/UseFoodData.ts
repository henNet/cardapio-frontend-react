import axios, { AxiosPromise } from "axios";
import FoodData from "../interface/FoodData";
import { useQuery } from "@tanstack/react-query";

// const API_URL = "http://localhost:8080/food";
const API_URL = "https://cardapio-nodejs-postgres.vercel.app/food";

const fetchData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL);
    return response;
}

function useFoodData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}

export default useFoodData;