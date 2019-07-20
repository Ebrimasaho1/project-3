import axios from "axios";

export default {
  getLessonPlans: function() {
    return axios.get("http://localhost:3001/api/lessonPlans");
  }
};
