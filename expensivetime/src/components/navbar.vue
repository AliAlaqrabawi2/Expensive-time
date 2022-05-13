<template>
  <div class="navbar">
    <div class="container">
        <div class="logo">
          <h3>
          <router-link to="/" >Expensive<span>Time</span></router-link>
            
          </h3>
        </div> 
        <i class= "fa fa-bars menuIcons"></i>
        <ul class="menu">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/">Task</router-link>
          </li>
          <li>
            <router-link to="/project">Project</router-link>
          </li>
        </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
}
</script>

<style scoped>
.navbar {
  width:100%;
  height:60px;
}
.container {
  display:flex; 
  justify-content:space-between;
  align-items:center;
  height:100%;
  position:relative;


}
.logo h3 {
  font-size:22px;
} 
.logo h3 a {
  color:#000;
}
.logo span {
  color:var(--main-color);
  font-size:24px;
}

.menuIcons{
  font-size:25px; 
  cursor:pointer;
}
.menu{
  position:absolute;
  left:95%;
  top:80%;
  max-width:150px;
  background:#fefefe;
  width:100%;
  z-index:2;
  text-align:center;
}
.menu li a  {
  display:inline-block;
  padding:10px;
  transition:0.3s;
  color:#000;


}
.menu a:hover{
  margin-left:10px;
  color:#999;
}

.menu li {
  border-bottom:1px solid #ddd;
}
</style>
