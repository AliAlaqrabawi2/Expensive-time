<template>
  <div class="add-task-container">
    <div class="Add-task-btn" v-if="addBtnProject">
      <button class="btn" @click="addProjectButton()">Add New Project</button>
      <span></span>
    </div>
    <form @submit.prevent v-if="showFormProject">
      <input type="text" placeholder="Task Name..." v-model="projectName">
      <textarea placeholder="Task Details ..." v-model="projectDetails"></textarea> 
        
      <div class="controll-btn">
        <button class="btn add" @click="pushNewProject">Add</button>
        <button class="btn err">Cansel</button>
      </div>


    </form> 
    <project-length class="task-length" v-if="projectLength" />
  </div>
</template>


<script >
import projectLength from "../components/projectLength.vue";
import { mapState , mapMutations  } from "vuex"
  export default{ 
    name:"AddTask" , 
    data(){
      return {
        projectName:"" , 
        projectDetails:"" , 
      }
      } ,  
      methods: {
        ...mapMutations(["addProjectButton"]) , 
        pushNewProject(){
          this.$store.commit("pushNewProject", {
            projectName:this.projectName ,
            projectDetails:this.projectDetails , 
            }) 
          this.projectName = "" ;
          this.projectDetails = "" ;
        }
        } , 
    components:{
      projectLength
      } , 
    computed:{
      ...mapState(["addBtnProject" , "showFormProject" , "projectLength"])
    }
  }
</script>

<style scoped>

.add-task-container{
  position:absolute; 
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}

.Add-task-btn{
  text-align:center; 
  padding:10px;
  transform:translateY(-200px);
  position:relative;
}
.Add-task-btn span {
  width:100%;
  height:2px; 
  margin-top:10px; 
  background:#ccc; 
  position:absolute ;
  top:100%;
  left:0;

}

.Add-task-btn button {
  background:var(--main-color);
  color:#fff;
  font-size:20px;
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
.task-length {
  transform:translateY(-100px);

}

</style>