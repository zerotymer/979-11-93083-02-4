import { createWebHistory, createRouter } from "vue-router";

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import TodoList from '../pages/TodoList.vue';
import AddTodo from '../pages/AddTodo.vue';
import EditTodo from '../pages/EditTodo.vue';
import NotFound from "../pages/NotFound.vue";

// 라우팅 정보. 메인 메뉴에 표시할 컴포넌트는 menu: true로 설정
export const routes = [
  { name: 'home', path: '/', description: '홈', component: Home, menu: true },
  { name: 'about', path: '/about', description: '소개', component: About, menu: true },
  { name: 'todos', path: '/todos', description: '일정관리', component: TodoList, menu: true },
  { name: 'todos.add', path: '/todos/add', description: '할일 추가', component: AddTodo },
  { name: 'todos.edit', path: '/todos/edit/:id(\\d+)+', description: '할일 수정', component: EditTodo, props: true },
  { name: 'notfound', path: '/:path(.*)', description: '페이지를 찾을 수 없습니다.', component: NotFound,  },
];

export const createNamedRoute = (route, params) => ({ name: route.name, params: params});


/// region createRouter
const router = createRouter({
  history: createWebHistory(),
  routes
});
/// endregion


export default router;