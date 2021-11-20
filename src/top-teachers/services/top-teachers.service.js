import http from '@/core/http-common'
class TopTeachersService {
    endpoint = '/teachers';
    getAll(id){
        return http.get(`directors/${id}${this.endpoint}`);
    }
}

export default new TopTeachersService();