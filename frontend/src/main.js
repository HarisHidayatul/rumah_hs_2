import { createApp } from 'vue';
import App from './App.vue';

// Import Bootstrap and BootstrapVue CSS files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

// Import BootstrapVueNext
import BootstrapVueNext from 'bootstrap-vue-next';

// Create Vue app
const app = createApp(App);

// Use BootstrapVueNext plugin
app.use(BootstrapVueNext);

// Mount the app
app.mount('#app');
