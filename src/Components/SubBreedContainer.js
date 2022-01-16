import { makeStyles, createStyles } from '@mui/styles'
import React, { useState, useEffect } from 'react'
import { getSubBreed } from '../Providers/Provider'
import { ImageItem } from './ImageItem'
import AutorenewIcon from '@mui/icons-material/Autorenew';


const useStyles = makeStyles((theme) => createStyles({
    loader: {
        display: 'flex',
        justifyContent: 'center',
        padding: '5%'
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

    return !error
        ? subBreedImage.length > 0
            ? (
                <ImageItem images={subBreedImage} title={subbreed} />
            ) : (
                <div className={classes.loader}>
                    <AutorenewIcon className={classes.animatedItem} />
                </div>
            ) : (
            <div className={classes.loader}>
                <h3>Error en la comunicación con el servidor</h3>
            </div>
        )
}
