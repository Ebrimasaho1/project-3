import axios from "axios";

export default {
  getLessonPlans: function() {
    return axios.get("http://localhost:3001/api/lessonPlans");
  },
  saveUser: function(userData) {
    return axios.post("/api/login", userData);
  }
};
