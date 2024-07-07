import { useState, useEffect } from "react";
import { send } from "vite";

async function sentHttpRequest(url, config){
    const response = await fetch(url,config);

    const resData = await response.json();

    if(!response.ok){

        throw new error(resData.message || "something went wrong");
    }

    return resData;
}

export default function useHttp(url, config, initialData){

    const [data, setData] = useState(initialData);
    const[isLoading, setLoading] = useState(false);
    const [error, setError] = useState();

    const sendRequest = useCallback(async function sendRequest(){
        setLoading(true);
    try{
        const resData = sentHttpRequest( url, config);
    }
    catch (error){
     setError(error.message || "something wrong");
    }
    setLoading(false);
} , [url, config]);

 useEffect(() => {
 if (config && config.method === get){
    sendRequest();
 } 
 } ,[sendRequest, config]);

 return {
    data, isLoading,error, sendRequest
 };
}