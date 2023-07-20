<template>
  <div class="root" >
    <Title title="Home" />
   <div class="container">
      <div class="box box1">
        <div class="boxCounter">
          <span>{{ $store.state.title }}: </span>
          <button @click="increment" >
            Increment me! <span class="spanCounter">{{ $store.state.counter }}</span>
          </button>
        </div>
      </div>
      <div class="box box2"></div>
      <div class="box box3"></div>
      <div class="box box4"></div>
      <div class="box box5">
        <div class="box6">
          <div class="circle circle1"></div>
        </div>
        <div class="box7">
          <div class="circle circle2"></div>
        </div>
        <div class="box8">
          <div class="circle circle3"></div>
        </div>
      </div>
      <Aside />
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import Aside from '@/components/aside/index.vue';

export default {
  name: 'IndexPage',
  comments: {
    Title,
    Aside
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    }
  }
}
</script>

<style>

.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0px 24px;
  margin-bottom: 12px;
  border: solid green;

}





.container {
 border: solid blue;
 width: 100%;
 height: 100%;
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-template-rows: auto auto minmax(auto, 40%);
 grid-template-areas:
 "div1 div2 aside"
 "div3 div4 aside"
 "div5 div5 aside";

 padding: 12px;
}

.box {
  border: solid 1px;
  min-width: 10px;
  min-height: 10px;
}

.box1 {
 grid-area: div1;
 width: auto;
}

.box2 {
  grid-area: div2;

}

.box3 {
 grid-area: div3;
}

.box4 {
 grid-area: div4;
}

.box5 {
  min-width: 50px;
  min-height: 100px;
  grid-area: div5;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.box5 > * {
  border: solid 2px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.box6, .box7, .box8 {
  padding: 10px;
}

.circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.circle1 {
  background: lightblue;
}

.circle2 {
  background: lightpink;
}

.circle3 {
  background: rgb(223, 58, 83);
}


.boxCounter{
  width: 200px;
  border: solid;
  display: absolute;
}

.spanCounter {
  color: green
}
</style>
