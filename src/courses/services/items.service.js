import http from '@/core/http-common'
class ItemsService {
    endpoint = '/items';
    getAll(){
        return http.get(this.endpoint);
    }

    getByIdCourse(idCourse){
        return http.get(`${this.endpoint}/?idCourse=${idCourse}`)
    }

    update(id, updateItemDto){
        return http.put(`${this.endpoint}/${id}`, updateItemDto);
    }
}

export default new ItemsService();