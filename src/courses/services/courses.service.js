import http from '@/core/http-common'
class CoursesService {
    endpoint = '/courses';
    getAll(){
        return http.get(this.endpoint);
    }
}

export default new CoursesService();