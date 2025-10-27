import api from './axios'

export const fetchManhwas=()=>{
    return api.get(`/manhwa/get`)
}

export const fetchManhwa=()=>{
    return api.get(`URL`)
}

export const fetchChapter=(manhwaID,chapterID)=>{
    return api.get('Url')
}

export const createNewManhwa=(data)=>{
    return api.post('url',data)
}
