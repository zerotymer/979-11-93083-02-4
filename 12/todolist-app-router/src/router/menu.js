import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import TodoList from '../pages/TodoList.vue';

export default [
  { name: 'Home', path: '/', description: '홈', component: Home },
  { name: 'About', path: '/about', description: '소개', component: About },
  { name: 'TodoList', path: '/todos', description: '일정관리', component: TodoList },
];