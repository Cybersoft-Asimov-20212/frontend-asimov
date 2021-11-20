import http from '@/core/http-common'
class CoursesService {
    endpoint = '/courses';
    getAll(id){
        return http.get(`teachers/${id}${this.endpoint}`);
    }

    getById(id){
        return http.get(`${this.endpoint}/${id}`)
    }

    getByIdCourse(idCourse){
        return http.get(`${this.endpoint}/${idCourse}/items`)
    }

    getCompetencesByIdCourse(idCourse){
        return http.get(`${this.endpoint}/${idCourse}/competences`)
    }

    updateCourse(id, updateCourseDto){
        return http.put(`${this.endpoint}/${id}`, updateCourseDto);
    }
}

export default new CoursesService();