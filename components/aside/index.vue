<template>
 <aside>
  <h3 class="titleAside surprise">Links</h3>
    <ul class="ulAside">
      <li class="liAside" @click="hideLink(index)"  v-for="(link, index) in links" :key="index"  :class="`${ link.isHidden ? 'text-blur-out' : ''}`">
       {{ link.name }}
      </li>
    </ul>
 </aside>
</template>

<script >
export default {
  name: "Aside",

  data() {
    return {
      links: [
        { name: "Link 1", isHidden: false },
        { name: "Link 2", isHidden: false },
        { name: "Link 3", isHidden: false },
        { name: "Link 4", isHidden: false },
        { name: "Link 5", isHidden: false },
        { name: "Link 6", isHidden: false },
        { name: "Link 7", isHidden: false },
      ],
    };
  },
  methods: {
    hideLink(index) {
      this.links[index].isHidden = true;
    },
  }
}
</script>

<style lang="css" scope>

aside {
  border: solid 1px;
  grid-area: aside;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 8px;

}

aside > * {
  border: solid;
  padding: 3px 42px;
}

.titleAside {
  padding: 16px 18px 3px;
  border: solid #48CAE4;
  border-radius: 20px;
  font-size: larger;
  font-weight: 700;
  color: #ade8f4;
}

.titleAside:hover {
  text-decoration: underline;
  cursor: pointer;
}


.surprise:active{
    animation-name: surprise;
        -webkit-animation-name: surprise;
        -moz-animation-name: surprise;
        animation-duration: .8s;
        -webkit-animation-duration: .8s;
        -moz-animation-duration: .8s;
}

@keyframes surprise {
        0% {transform: rotate(0deg) scale(1,1);;}
        10% {transform: rotate(7deg) scale(2,2);}
        20% {transform: rotate(-7deg) scale(2,2);}
        30% {transform: rotate(7deg) scale(2,2);}
        40% {transform: rotate(-7deg) scale(2,2);}
        50% {transform: rotate(7deg) scale(2,2);}
        60% {transform: rotate(-7deg) scale(2,2);}
        70% {transform: rotate(7deg) scale(2,2);}
        80% {transform: rotate(-7deg) scale(2,2);}
        90% {transform: rotate(7deg) scale(2,2);}
        100% {transform: rotate(0deg) scale(1,1);}
    }


.ulAside {
  height: 80%;
  border-radius: 10px;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.liAside {
  cursor: pointer;
  font-family: fantasy;
  position: relative;
  top: 50px;
  color:rgb(53, 135, 189)
}

.liAside:hover {
  color:rgba(53, 135, 189, 0.539)
}

.text-blur-out {
	-webkit-animation: text-blur-out 1.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: text-blur-out 1.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}


@-webkit-keyframes text-blur-out {
  0% {
    -webkit-filter: blur(0.01);
            filter: blur(0.01);
  }
  100% {
    -webkit-filter: blur(12px) opacity(0%);
            filter: blur(12px) opacity(0%);
  }
}
@keyframes text-blur-out {
  0% {
    -webkit-filter: blur(0.01);
            filter: blur(0.01);
  }
  100% {
    -webkit-filter: blur(12px) opacity(0%);
            filter: blur(12px) opacity(0%);
  }
}

</style>
