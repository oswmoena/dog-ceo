import React, { useEffect, useState } from 'react'
import { getAllBreeds } from '../Providers/Provider'
import { Paper, Grid, Typography, Autocomplete, TextField } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles';
import { BreedContainer } from '../Components/BreedContainer';
import { SubBreedContainer } from '../Components/SubBreedContainer';

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            padding: "1% 5%",
            border: '1px solid #666666',
            color: 'black'
        },
        home: {
            padding: '2% 7% 0% 7%',
            backgroundColor: '#EEEEEE',
            height: '100vh'
        },
        selectBreed: {
            width: '100%',
        },
        grid:{ 
            paddingBottom: '10%'
        },
        title: {
            fontWeight: 'bold',
            padding: '1%',
            color: "#666666"
        },
        autocomplete: {
            cursor: 'pointer'
        },
        imageBlock: {
            maxHeight: '600px',
            overflow: 'auto'
        },
        divider: {
            '& .MuiDivider-root': {
                margin: '0px 50px'
            }
        }
    })
);

export const Home = () => {
    const classes = useStyles();
    const [breedSelected, setBreedSelected] = useState([])
    const [subBreedSelected, setSubBreedSelected] = useState([])
    const [subBreeds, setSubBreeds] = useState([])
    const [breeds, setBreeds] = useState([])

    useEffect(() => {
        bringMeBreeds();
    }, [])

    const bringMeBreeds = async () => {
        let response = await getAllBreeds()
        if (response && response.status) {
            const { message } = response
            let newArrBreeds = []
            let newArrSubBreeds = []
            Object.entries(message).map(([key, val], i) => {
                if (val.length > 0) {
                    val.map(subbreed => {
                        return newArrSubBreeds.push({
                            breed: key.toUpperCase(),
                            subBreed: subbreed.toUpperCase()
                        })
                    })
                }
                return newArrBreeds.push(key.toUpperCase())
            }
            )
            setBreeds(newArrBreeds)
            setSubBreeds(newArrSubBreeds)
        }
    }

    return (
        <div className={classes.home}>
            <Paper elevation={2} className={classes.paper}>
                <Grid container spacing={3} justifyContent="space-between" className={classes.grid}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h3" color="initial" className={classes.title}>Dog-CEO</Typography>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Autocomplete
                            multiple
                            id="breeds"
                            options={breeds}
                            getOptionLabel={(option) => option}
                            onChange={(event, value) => setBreedSelected(value)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    label="Razas"
                                    placeholder="Elige una o más razas"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Autocomplete
                            multiple
                            id="sub-breeds"
                            options={subBreeds}
                            groupBy={(option) => option.breed}
                            getOptionLabel={(option) => option.subBreed}
                            onChange={(event, value) => setSubBreedSelected(value)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    label="Sub Razas"
                                    placeholder="Elige una o más sub razas"
                                />
                            )}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3} justifyContent="space-between" className={classes.imageBlock}>
                    {breedSelected.map(breed => {
                        return (
                            <Grid item md={12} xs={12} key={breed}>
                                <Typography variant="h4" color="initial" className={classes.title}>{breed}</Typography>
                                <BreedContainer breed={breed} />
                            </Grid>
                        )
                    }
                    )}
                    {subBreedSelected.map(({ breed, subBreed }) => {
                        return (
                            <Grid item md={12} xs={12} key={subBreed}>
                                <Typography variant="h4" color="initial" className={classes.title}>{breed} - {subBreed}</Typography>
                                <SubBreedContainer breed={breed} subbreed={subBreed} />
                            </Grid>
                        )
                    }
                    )}
                </Grid>


            </Paper>
        </div>
    )
}
