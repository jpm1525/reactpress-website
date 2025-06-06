import Axios from 'axios';
// since this particular API doesn't require you to be authenticated, then all we need to specify is the base url
// of the api. Other APIs will require you to add headers, auth methods, etc.
export default Axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "a36639dfd3c7d5066e908473382dd1b7",
    }
});