const redux = require('redux')

const counterReducer =(state ={counter : 0} , action)=>{
    if(action.type=='increment'){
return {
    counter: state.counter + 2,
};
    }
else if(action.type =='decrement'){
     return{
        counter: state.counter - 2,
    };
}
return state;
}



const store = redux.createStore(counterReducer)

// console.log(store.getState())

const counterSubscriber = ()=>{
    const letestState = store.getState()
    console.log(letestState)
}
store.subscribe(counterSubscriber)

store.dispatch({type:'increment'});
store.dispatch({type:'decrement'});