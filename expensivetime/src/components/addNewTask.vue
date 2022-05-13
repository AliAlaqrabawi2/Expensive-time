<template>
  <div class="add-task-container">
    <div class="Add-task-btn" v-if="addBtnTask">
      <button class="btn" @click="addTaskButton()">Add New Task</button>
      <span></span>
    </div>
    <form @submit.prevent v-if="showFormTask">
      <input type="text" placeholder="Task Name..." v-model="taskName">
      <textarea placeholder="Task Details ..." v-model="taskDetails"></textarea> 
      <select v-model="project"> 
        <option value="" disabled selected hidden>Choose a Project</option>
        <option v-for="project in projects">{{project.projectName}}</option>
      </select>
      <router-link class="add-project" to="/project">
      <small >Add Project</small>
        
      </router-link>
      <div class="controll-btn">
        <button class="btn add" @click="pushNewTask" type="button">Start Task</button>
        <button class="btn err" @click="canselFormTask" type="button">Cansel Task</button>
      </div>


    </form> 
  </div>
</template>


<script >
import taskLength from "../components/taskLength.vue";
import { mapState ,mapMutations } from "vuex"
  export default{ 
    name:"AddTask" , 
    data(){
      return {
        taskName:"" , 
        taskDetails:"" , 
        project :""  , 
      }
      } , 
      methods:{
        ...mapMutations(["addTaskButton" , "canselFormTask"]) , 
        pushNewTask(){ 

          this.$store.commit("pushNewTask", {
            taskName:this.taskName ,
            taskDetails:this.taskDetails , 
            project:this.project
            })
          this.taskName = "" ; 
          this.taskDetails = "";
          this.project ="";
        }
        } , 

    computed:{
      ...mapState(["addBtnTask" , "showFormTask" , "projects" ])
    }
  }
</script>

<style scoped>

.add-task-container{
 
}

.Add-task-btn{
  text-align:center; 
  padding:10px;
  position:relative;
  width:100%;
}

.Add-task-btn button {
  background:var(--main-color);
  color:#fff;
  font-size:23px;
  font-weight:bold;
}
.Add-task-btn:hover{
  opacity:0.6;
}



form {
  display:flex; 
  flex-direction:column; 
  align-items:center; 
  justify-content:space-evenly;  
  max-width:400px; 
  width:350px;
  height:50vh;
  position:relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius:4px;

}

form input , form textarea , form select {
  width:90%;
 resize:none ; 
 padding:10px; 
 border:none; 
 outline:none; 
 border-radius:4px;
 border:1px solid #ddd;
}
form input:focus , form textarea:focus , form select:focus
{
  border:2px solid #000;
}
.add-project{
  position:absolute;
  color:#000;
  cursor:pointer; 
  opacity:0.7;
  transition:0.3s;
  font-size:12px;
  transform:translate(120px,-10px);

}
.add-project:hover{
  opacity:1;
}
.controll-btn .btn {
  margin:10px;
  opacity:0.7;
  transition:0.3s;
  font-size:17px;

}
.controll-btn .btn:hover{
  opacity:1;
}
.controll-btn .add{
  background:#DFF2BF;
  color:#4F8A10;
}
.controll-btn .err {
  color: #D8000C;
    background-color: #FFD2D2;
}

</style>