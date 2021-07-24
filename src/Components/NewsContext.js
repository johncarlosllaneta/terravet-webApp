import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { newsAPI } from "./Host";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = newsAPI;

    useEffect(() => {


        axios
            .get(
                `https://newsapi.org/v2/top-headlines?q=pets&apiKey=${apiKey}`
            )
            .then((response) => { setData(response.data); })
            .catch((error) => console.log(error));
    }, []);

    return (
        <NewsContext.Provider value={{ data }}>
            {props.children}
        </NewsContext.Provider>
    );
};