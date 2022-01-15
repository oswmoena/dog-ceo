import React, { useEffect, useState } from 'react'
import { getBreed } from '../Providers/Provider'
import { ImageItem } from './ImageItem'

export const BreedContainer = ({breed}) => {
    const [breedImage, setBreedImage] = useState([])
    
    useEffect(() => {
        getBreedSelected()
    }, [])

    const getBreedSelected = async () => {
        const response = await getBreed(breed.toLowerCase());
        setBreedImage(response.message)
    }

    return breedImage.length > 0 ? (
        <ImageItem images={breedImage} title={breed} />
    ) : (
        <h3>Cargando...</h3>
    )
}
