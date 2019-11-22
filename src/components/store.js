/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 16:33:57
 * @LastEditTime: 2019-11-22 09:56:25
 * @LastEditors: Please set LastEditors
 */
import { createStore } from 'redux';

/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */
function counter(state = 5, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}
const data=[
  '早8点开晨会，分配今天的开发工作',
  '早9点和项目经理作开发需求讨论会',
  '晚5:30对今日代码进行review'
]
function todolist(state = data, action) {
  switch (action.type) {
    case 'ADD':
      return state.concat(action.value);
    case 'MINUS':
      let index = state.indexOf(action.value),
      newState = state;
      newState.splice(index, 1);
        return newState;
    default:
      return state;
  }
}

function toggleSide(state =1, action){
  switch(action.type) {
    case 'open':
      return state +1
    case 'hide':
      return state -1
    default:
      return state
  }
}

function userInformation(state={}, action){
  switch(action.type){
    case 'NEW':
      return action.value
    case 'REMOVE':
      return state
    default:
      return state
  }
}

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(counter);
let itemTodo = createStore(todolist);
let toggleSideBar = createStore(toggleSide);
let userVO = createStore(userInformation);

// 可以手动订阅更新，也可以事件绑定到视图层。

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
// store.dispatch({ type: 'INCREMENT' });
// // 1
// store.dispatch({ type: 'INCREMENT' });
// // 2
// store.dispatch({ type: 'DECREMENT' });
// 1
export default store;
export  {itemTodo, toggleSideBar, userVO};