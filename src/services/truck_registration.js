import http from "../http-common";
class TruckRegistrationService {
  create(data) {

    return http.post("/login/register", data);
  }
//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }
//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new TruckRegistrationService();
