import axios from 'axios'

export const getData = async (URL) => {
    return (await axios.get(URL)).data
}
