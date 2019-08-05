import axios from "axios";

function convertIntoRegex(words){
  var KeyWords = words.split(" ");
  var regexExpresion = '.*';
  KeyWords.forEach(word => {
    regexExpresion += word + '?.*';
  }); 
  return regexExpresion;
}

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
  updateLessonPlan: function(lessonId, lessonPlanData){
    return axios.put("/api/lessonPlans/"+lessonId, lessonPlanData);
  },
  getLessonPlan: function(lessonId){
    return axios.get("/api/lessonPlans/"+lessonId);
  },
  deleteLessonPlan: function(lessonId){
    return axios.delete("/api/lessonPlans/"+lessonId);
  }, 
  getOrganizations: function() {
    return axios.get("/api/organizations");
  }, 
  getOrganizationWithProjects: function(organizationId){
    return axios.get("/api/organizations/"+organizationId);
  }, 
  saveOrganization: function(organization){
    console.log("organization name to save: " + organization.name);
    return axios.post("api/organizations/", organization);
  }, 
  saveProject: function(project){
    console.log("Project name to save: " + project.name);
    return axios.post("api/projects/", project);
  },
  searchLessonPlansByTitle: function(keyWords){
    return axios.get("api/lessonPlans/titleSearch/"+ convertIntoRegex(keyWords));
  },
  searchLessonsByProjectName: function(keyWords){
    return axios.get("/api/projects/search/" + convertIntoRegex(keyWords));
    //return axios.get("api/lessonPlans/orgSearch/"+keyWords);
  },
  searchLessonsByOrganizationName: function(keyWords){
    return axios.get("/api/organizations/search/"+ convertIntoRegex(keyWords));
    //return axios.get("api/lessonPlans/projSearch/"+keyWords);
  }
};
