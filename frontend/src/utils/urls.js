export const HOST = 'http://localhost:1337'


export const VIDEOS = `${HOST}/api/videos?populate=video&populate=category&populate=user&populate=likes&populate=views&populate=dislikes`
export const VIDEO = `${HOST}/api/videos/id?populate=video&populate=likes&populate=user&populate=category&populate=views&populate=dislikes`
export const CATEGORIES = `${HOST}/api/categories`
export const REVIEWS_OF_VIDEO = `${HOST}/api/reviews?populate=video&populate=customer&filters[video][id]=videoId`
export const SUBSCRIBES = `${HOST}/api/users/id?populate=subscribes`