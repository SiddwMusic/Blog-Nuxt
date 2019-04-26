import axiosrepo from './AxiosRepo'
import { updateLocale } from 'moment';

const resources = '/user'

export default{
    get(){
        return axiosrepo.get(`${resources}`)
    },
    getUser(id){
        return axiosrepo.get(`${resources}/${id}`)
    },
    postUser(user){
        return axiosrepo.post(`${resources}`, user)
    },
    updateuser(id, user){
        return axiosrepo.put(`${resources}/${id}`, user)
    }

}
