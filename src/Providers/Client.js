import axios from 'axios'

const client = axios.create({
    baseURL: `https://dog.ceo/api`,
})

export const response = async (options) => {
    options.headers = {
        'Content-Type': 'application/json',
    }

    return await client(options)
        .then(response => {
            if (response.data) {
                const { data } = response
                return data
            } else {
                return response
            }
        })
        .catch(error => {
            console.error('error', error)
        })
}