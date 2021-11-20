import http from '@/core/http-common'

class LogInService {
    endpoint = '/sign-in'
    postSignIn(item){
        return http.post(this.endpoint, item);
    }
}
export default new LogInService();