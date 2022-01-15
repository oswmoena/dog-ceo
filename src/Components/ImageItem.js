import React, { useState, useCallback } from 'react'
import { makeStyles, createStyles } from '@mui/styles';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import ImageViewer from 'react-simple-image-viewer';

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
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const classes = useStyles();

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div className={classes.root}>
            <ImageList className={classes.imageList} cols={3}>
                {images.map((item, index) => (
                    <ImageListItem key={item}>
                        <img
                            src={item}
                            onClick={() => openImageViewer(index)}
                            width="300"
                            key={index}
                            style={{ margin: '2px' }}
                            alt={title}
                        />
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
            {isViewerOpen && (
                <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                />
            )}
        </div>
    )




}
