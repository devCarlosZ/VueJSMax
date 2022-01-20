import { createApp } from 'vue';

import App from './App.vue';
import friendContact from './components/friendContact.vue'
import NewFriend from './components/NewFriend.vue'

const app = createApp(App)

app.component('friend-contact', friendContact);
app.component('new-friend', NewFriend);

app.mount('#app');
