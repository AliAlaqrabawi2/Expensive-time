<template>
  <div class="timer">
    <div class="time-container">
          <div class="time-content">
        <span>{{hour}}</span>
        <p>Hours</p>
      </div>
      <div class="time-content">
        <span>{{min}}</span>
        <p>Min</p>
      </div>
      <div class="time-content">
        <span>{{sec}}</span>
        <p>Sec</p>
      </div>
        </div>

    <div class="task-container">
      <p>Task Name: <span>{{prepareTask.taskName}}</span></p>
      <p>Task Details: <span>{{prepareTask.taskDetails}} </span> </p>
      <p>Project: <span>{{prepareTask.projectName}}</span></p>

    </div>
    <div class="controll-timer">
      <button class="btn" @click="cnasle">Cansel</button>
      <button class="btn" @click="finish">Finish</button>
      <button class="btn" @click="stop" v-if="!stopTimer">Stop</button>
      <button class="btn" @click="resum" v-if="stopTimer">Resum</button>

    </div>


  </div>
</template>

<script>
  import { mapState,mapMutations} from "vuex";
export default {
  name: 'Home', 
  data(){
    return {
      sec: 0, 
      min:0, 
      hour: 0 , 
      stopTimer:false ,
    }
  } ,
  methods:{

    ...mapMutations(["cnasle" ]) ,
    start(){
      this.t = setInterval(this.timeCount,1000)
    } ,
    finish(){
      this.$store.commit("finish" ,{
        sec:this.sec , 
        min:this.min , 
        hour:this.hour 
      })
    }, 


    timeCount(){
      this.sec++;
              if (this.sec===60){
          this.sec=0 ; 
          this.min++; 
        }
        if (this.min===60){
          this.min = 0 
          this.hour++ ;
        }
 

    } , 
    stop(){
      clearInterval(this.t);
      this.stopTimer = true; 
    } , 
    resum (){
      this.start();
      this.stopTimer = false; 
    } ,
  } , 
  computed:{
      ...mapState(["prepareTask"])
  } , 
  
  created(){
    this.start();  
  }
}
</script>
<style scoped>
.time {
  display:flex;
    flex-direction:column; 
  align-items:center; 
  position:relative;

}
.time-container{
  display:flex; 
  align-items:center; 
}
 .time-content {
    display:flex; 
  flex-direction:column; 
  align-items:center; 
  justify-content:space-between;
  background:#ccc;
  margin-left:10px;
    color:#fff;
  min-width:100px;
  height:80px;

}
.time-content span {
  font-size:25px;
  margin-top:15px;
}
.time-content:last-child{
  background:#ff006a;
}
.time-content:not(:last-child) {
    background:var(--main-color);

}
.time-content p {
  width:100%;
  font-size:16px;
  text-align:center;
}
.time-content:not(:last-child) p {
  background:#05aef5;
}

.time-content:last-child p{
  background:#f20467;
}
.task-container{
  display:flex; 
  flex-direction:column;
  padding:10px; 
}
.task-container p {
  font-size:20px;
  max-width:330px;
  width:100%;
}
.task-container p span {
  font-size:15px; 
  opacity:0.7;
}


.controll-timer{
  display:flex; 
  justify-content: space-evenly;
  align-items: center;
}
.controll-timer .btn{ 
  min-width:100px;
}
</style>