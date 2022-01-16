import React, { useEffect, useState } from 'react'
import { getBreed } from '../Providers/Provider'
import { ImageItem } from './ImageItem'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => createStyles({
    loader: {
        display: 'flex',
        justifyContent: 'center',
        padding: '5%'
    },
    'animatedItem': {
        animation: `$spin 2s infinite linear`,
    },
    '@global': {
        '@keyframes spin': {
            '0%': {
                transform: 'rotate(0deg)',
            },
            '100%': {
                transform: 'rotate(360deg)',
            },
        },
    },
}))

export const BreedContainer = ({ breed }) => {
    const classes = useStyles();
    const [error, setError] = useState(false)
    const [breedImage, setBreedImage] = useState([])

    useEffect(() => {
        getBreedSelected()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const getBreedSelected = async () => {
        const response = await getBreed(breed.toLowerCase());
        if (response) {
            setError(false)
            setBreedImage(response.message)
        } else {
            setError(true)
        }
    }

    if (!error) {
        <div className={classes.loader}>
            <h3>Error en la comunicación con el servidor</h3>
        </div>
    }

    return breedImage.length > 0
        ? (
            <ImageItem images={breedImage} title={breed} />
        ) : (
            <div className={classes.loader}>
                <AutorenewIcon className={classes.animatedItem} />
            </div>
        )


}
