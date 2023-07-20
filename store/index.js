
export const state = () => ({
   title: "Test",
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
