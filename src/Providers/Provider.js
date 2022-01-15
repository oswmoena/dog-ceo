import { response } from './Client'

export const getAllBreeds = () => {
    const options = {
        url: `/breeds/list/all`,
    }
    return response(options)
}

export const getBreed = (breed) => {
    const options = {
        url: `/breed/${breed}/images/random/3`,
    }
    return response(options)
}

export const getSubBreed = (breed, subbreed) => {
    const options = {
        url: `/breed/${breed}/${subbreed}/images/random/3`,
    }
    return response(options)
}