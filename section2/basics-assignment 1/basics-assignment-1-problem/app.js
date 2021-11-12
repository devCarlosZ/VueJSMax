const app = Vue.createApp({
    data() {
        return {
            name: 'Carlos',
            age: 45,
            pic: 'https://pbs.twimg.com/media/CsggDViXEAAciLJ.jpg'
        };
    },
    methods: {
        inFive() {
            return this.age + 5;
        },
        rando() {
            return Math.random();
        }
    }
});

app.mount('#assignment');