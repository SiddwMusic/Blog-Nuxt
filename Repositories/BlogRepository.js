import axiosrepo from './AxiosRepo'
import { updateLocale } from 'moment';

const resources = '/Blog'

export default{
    get(){
        return axiosrepo.get(`${resources}`)
    },
    getblog(id){
        return axiosrepo.get(`${resources}/${id}`)
    },
    postBlog(blog){
        return axiosrepo.post(`${resources}`, blog)
    },
    updateblog(id, blog){
        return axiosrepo.put(`${resources}/${id}`, blog)
    },
    deleteBlog(id){
        return axiosrepo.delete(`${resources}/${id}`)
    }

}

