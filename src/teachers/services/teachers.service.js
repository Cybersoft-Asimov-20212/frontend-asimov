import http from '@/core/http-common'
class TeachersService {
    endpoint = '/teachers';
    getAll(id){
        return http.get(`directors/${id}${this.endpoint}`);
    }

    getById(id){
        return http.get(`${this.endpoint}/${id}`)
    }

    getAllCoursesById(id){
        return http.get(`${this.endpoint}/${id}/courses`)
    }
}

export default new TeachersService();