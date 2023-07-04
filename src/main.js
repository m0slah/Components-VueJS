import { createApp } from "vue";
import App from "./App.vue";
// import Greetig from "@/component/Greetig.vue";

let vm = createApp(App);

// vm.component("Greeting",Greetig);
vm.mount("#app");
