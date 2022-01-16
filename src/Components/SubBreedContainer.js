import { makeStyles, createStyles } from '@mui/styles'
import React, { useState, useEffect } from 'react'
import { getSubBreed } from '../Providers/Provider'
import { ImageItem } from './ImageItem'
import AutorenewIcon from '@mui/icons-material/Autorenew';


const useStyles = makeStyles((theme) => createStyles({
    spacing: {
        display: 'flex',
        justifyContent: 'center',
        padding: '5%',
        fontSize: '20px'
    },
}))

export const SubBreedContainer = ({ breed, subbreed }) => {
    const classes = useStyles();
    const [subBreedImage, setSubBreedImage] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        getSubBreedSelected()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const getSubBreedSelected = async () => {
        const response = await getSubBreed(breed.toLowerCase(), subbreed.toLowerCase());
        if (response) {
            setError(false)
            setSubBreedImage(response.message)
        } else {
            setError(true)
        }
    }

    if (error) {
        return (
            <div className={classes.spacing}>
                <p>Error en la comunicación con el servidor</p>
            </div>
        )
    }

    return subBreedImage.length > 0
        ? (
            <ImageItem images={subBreedImage} title={subbreed} />
        ) : (
            <div className={classes.spacing}>
                <AutorenewIcon className={classes.animatedItem} />
            </div>
        )
}
