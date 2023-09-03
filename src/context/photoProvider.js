import { createContext, useState } from "react"
import {
    createPhoto,
    getPhoto,
    updatePhoto,
    deletePhoto
} from "../context/API Photo/index"

export const photoContext = createContext();

export const PhotoProvider = ({children}) => {
    const [dataPhoto, setDataPhoto] = useState('');
    console.log(dataPhoto);
    return(
        <PhotoContext.Provider
        value={{
            dataPhoto,
            setDataPhoto,
            createPhoto,
            getPhoto,
            updatePhoto,
            deletePhoto,
        }}
        >
            {children}
        </PhotoContext.Provider>

    )
}