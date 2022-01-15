import React from 'react'
import { makeStyles, createStyles } from '@mui/styles';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
        },
        imageList: {
            flexWrap: 'nowrap',
            transform: 'translateZ(0)',
        },
        title: {
            color: '#FFFFFF',
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
    }));

export const ImageItem = ({ images, title }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageList className={classes.imageList} cols={3}>
                {images.map((item) => (
                    <ImageListItem key={item}>
                        <img src={item} alt={title} />
                        <ImageListItemBar
                            title={title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )




}
