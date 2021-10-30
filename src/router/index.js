import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Note from "../views/Note.vue"
import New from "../views/New"
import Edit from "../views/Edit"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/new",
    name: "New",
    component: New
  },
  {
    path: "/note/:id",
    name: "Note",
    component: Note
  }, {
    path: "/note/:id/edit",
    name: "Edit",
    component: Edit
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
