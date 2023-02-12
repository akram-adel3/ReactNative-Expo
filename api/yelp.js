import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:' Bearer uKIEsm_S6Hw1oRcs-nq6hJGyRhDirFfHo-IfGgcmTTtNEV2kGba9RqVsCJVBsKHWJVqaW6seHMeR-gZxQOHwN1J0ePdaWRKO8L37XSPaVt7AIEHOomz13QUIG3hEY3Yx'
    }
})
