<template>
  <div class="home">
    <add-task />
    <timer  v-if="taskTimer" />
    <span v-if="TaskLength"></span>

    <task-length class="task-length" v-if="TaskLength" />

  </div>
</template>

<script>
import addTask from "../components/addNewTask.vue";
import taskLength from "../components/taskLength.vue";
import timer from "../components/timer.vue";
import {mapState} from "vuex"
export default {

  name: 'Home', 
  components:{
    addTask, 
    timer  , 
    taskLength
  } , 
  computed:{
    ...mapState(["taskTimer" ,"TaskLength"])
  }
}
</script>


<style scoped>
.home {
  display:flex;
  flex-direction:column;
  align-items:center;
  min-height:40vh;
  justify-content:space-evenly;
  transform:translateY(100px);
}
span {
  width:80%;
  height :3px; 
  background:#ccc; 
  margin:20px 0 ;
}

</style>