import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks:[] ,
    prepareTask:[] ,
    projects:[] , 
    addBtnTask :true, 
    showFormTask:false, 
    TaskLength:true,
        addBtnProject :true, 
    showFormProject:false, 
    projectLength:true,
    taskTimer:false ,
    hour:0 ,
    min : 0,
    sec:0 ,
    err:"" 

  },
  mutations: {
    addTaskButton(state){
      state.addBtnTask=false ; 
      state.TaskLength= false; 
      state.showFormTask =true ;
    } , 
    addProjectButton(state){
      state.addBtnProject=false; 
      state.projectLength= false; 
      state.showFormProject =true ;

    } , 
    canselFormTask(state) {
      state.addBtnTask=true ; 
      state.TaskLength= true; 
      state.showFormTask =false ;
    } ,

    pushNewTask (state,payload){
      if (payload.taskName!=="" && payload.projectDetails!==""){
              state.prepareTask.push({
        taskName:payload.taskName , 
        taskDetails :payload.taskDetails ,
        projectName:payload.project 
      }) 
      state.taskTimer =true ; 
      state.showFormTask=false; 
      state.TaskLength =true ;

      state.err= ""

      }
      else {
        state.err  ="please Fill All Field";
      }

    }  , 
    pushNewProject(state,payload) { 
      if (payload.projectName!=="" && payload.projectDetails !==""){
              state.projects.push({
        projectName:payload.projectName , 
        projectDetails:payload.projectDetails
      })
        state.err= ""; 
        state.addBtnProject =true; 
        state.showFormProject =false; 
        state.projectLength =true; 


      }
       else {
        state.err="Please Fill All field"
       }
    } ,

    cnasle(state){
      state.prepareTask= [];
      state.taskTimer=false; 
      state.showFormTask=false; 
      state.addBtnTask=true ;

    } , 
    finish(state,payload){
      state.taskTimer=false; 
      state.showFormTask=false; 
      state.addBtnTask=true ; 
      state.tasks.push({...state.prepareTask[0] ,...payload});
      state.prepareTask=[]; 



    } ,


  },
  actions: {
  },
  modules: {
  }
})
