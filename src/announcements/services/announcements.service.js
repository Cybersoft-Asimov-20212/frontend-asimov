import http from '@/core/http-common'
class AnnouncementsService {
    endpoint = '/announcements';
    getAll(){
        return http.get(this.endpoint);
    }

    create(createAnnouncementDto){
        return http.post(this.endpoint, createAnnouncementDto);
    }

    delete(id){
        return http.delete(`${this.endpoint}/${id}`);
    }
}

export default new AnnouncementsService();