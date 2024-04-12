/**
 * @author: zzh
 * @description: 入口文件
 */
import axios from "axios";
import "./styles/index.scss";
import * as echarts from "echarts";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store, { key } from "./store";
import globalComponents from "./components";
// import globalDirectives from "./directives";
import { init } from "./utils/date-utils";
// 引入 flexible.js
import "lib-flexible/flexible.js";

init();

export const app = createApp(App);

app.config.globalProperties.$Echarts = echarts;

axios.get("http://localhost:3000/theme/theme.json").then((res) => {
    echarts.registerTheme("customed", res.data);
});
axios.get("http://localhost:3000/theme/chalk.json").then((res) => {
    echarts.registerTheme("chalk", res.data);
});

app.use(store, key);
app.use(router);
// app.use(globalDirectives);
app.use(globalComponents);
app.mount("#app");
