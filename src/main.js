import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "sweetalert2/src/sweetalert2.scss";

createApp(App).use(router).mount("#app");
