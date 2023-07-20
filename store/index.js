
export const state = () => ({
   title: "Counter",
   counter: 0
 });

 export const mutations = {
   increment(state) {
     state.counter++;
   },
   decrement(state) {
     state.counter--;
     if(state.counter < 0){
      state.counter = 0;
     };
   },
 };
