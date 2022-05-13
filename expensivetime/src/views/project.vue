<template>
  <div class="home">
    <add-project />
  </div>
</template>

<script>
import addProject from "../components/addNewProject.vue";
export default {

  name: 'Home', 
  components:{
    addProject
  }
}
</script>
