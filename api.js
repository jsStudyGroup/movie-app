import axios from 'axios'

const api = axios.create({
    baseUrl = 'https://api.themoviedb.org/3/',
    params: {
        api_key: '3ded7c8e091738c371096ded2bdc186b',
        language: 'en-US',
    }
})

api.get('tv/popular')

export const MovieApi ={
    nowPlaying: () => api.get('/movie/now_playing'),
    upComming: () => api.get('/movie/upcumming'),
    popular: () => api.get('/movie/popular'),
    movieDetail: id => api.get(`/movie/${id}`, {
        params: {
            apend_to_response: 'videos'
        }
    }),
    search: (term) => api.get('/search/movie', {
        params: {
            query: encodeURIComponent(term)
        }
    })
}
export const TvApi ={
    topRated: () => api.get('/tv/top_rated'),
    popular: () => api.get('/tv/popular'),
    airingToday: () => api.get('/tv/airing_today'),
    showDetail: id => api.get(`/tv/${id}`, {
        params: {
            apend_to_response: 'videos'
        }
    }),
    search: (term) => api.get('/search/tv', {
        params: {
            query: encodeURIComponent(term)
        }
    })
}
