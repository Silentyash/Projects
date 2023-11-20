// importing 3rd party package is done like this
const redux =require('redux');
// if we dont give default property for inital run state will be undefined and we get error 
const counterReducer=(state={counter:0} , action)=>{
    if(action.type=='increment'){
        return {
          // any object any type

          counter: state.counter + 1,
        };
    }
    if(action.type=="decrement"){
        return{
            counter:state.counter-1,
        };
    }
    return state;
     
};

const store= redux.createStore(counterReducer);
console.log(store.getState())
// subscription 
const counterSubscriber=()=>{
    const latestState= store.getState();
    console.log(latestState);
};
// reaching store and calling subscribe method and will get a pointer for subscriber function 
store.subscribe(counterSubscriber);

// defining action 
store.dispatch({type:'increment'});
store.dispatch({ type: "decrement" });

