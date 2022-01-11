const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  },
});

app.mount('#app');

setTimeout(function () {
  app.unmount();
}, 3000);


const app2 = Vue.createApp({
  data() {
    return {
      currentUserInput2: '',
      favoriteMeal: 'Is it Pizza?'
    }
  },
  methods: {
    saveInput2(event) {
      this.currentUserInput2 = event.target.value;
    },
    setText2() {
      this.favoriteMeal = this.currentUserInput2;
    }
  },
  // template: `
  //   <p>{{favoriteMeal}}</p>
  // `,
});

app2.mount('#app2');

// // ....

// const data = {
//   message: 'Hello!',
//   longMessage: 'Hello! World!'
// };

// const handler = {
//   set(target, key, value) {
//     if (key === 'message') {
//       target.longMessage = value + ' World!';
//     }
//     target.message = value;
//   }
// };

// // const proxy = new Proxy(data, handler);

// // proxy.message = 'Hello!!!!';

// // console.log(proxy.longMessage);
