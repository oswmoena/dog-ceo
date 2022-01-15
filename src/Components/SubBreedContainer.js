import React, { useState, useEffect } from 'react'
import { getSubBreed } from '../Providers/Provider'
import { ImageItem } from './ImageItem'

export const SubBreedContainer = ({ breed, subbreed }) => {
    const [subBreedImage, setSubBreedImage] = useState([])

    useEffect(() => {
        getSubBreedSelected()
    }, [])

    const getSubBreedSelected = async () => {
        const response = await getSubBreed(breed.toLowerCase(), subbreed.toLowerCase());
        setSubBreedImage(response.message)
    }

    return subBreedImage.length > 0 ? (
        <ImageItem images={subBreedImage} title={subbreed} />
    ) : (
        <h3>Cargando...</h3>
    )
}
