import axios from "axios";

export default {
  getLessonPlans: function(userId) {
    return axios.get("/api/user/"+userId);
  },
  saveUser: function(userData) {
    return axios.post("/api/user/", userData);
  },
  saveLessonPlan: function(lessonPlanData){
    return axios.post("/api/lessonPlans/", lessonPlanData);
  },
  getLessonPlan: function(lessonId){
    return axios.get("/api/lessonPlans/"+lessonId);
  }, 
  getOrganizations: function() {
    return axios.get("/api/organizations");
  }, 
  getOrganizationWithProjects: function(organizationId){
    return axios.get("/api/organizations/"+organizationId);
  }, 
  saveOrganization: function(organizationName){
    console.log("organization name to save: " + organizationName);
    return axios.post("api/organizations/", organizationName);
  }
};
