const app = Vue.createApp({
    data() {
        return {
            userFirst: '',
            userLast: ''
        }
    },
    methods: {
        showAlert() {
            alert("Hello There. Thank you for using Vue!");
        },
        firstName() {
            this.userFirst = event.target.value;
        },
        lastName() {
            this.userLast = event.target.value;
        }
    }

});

app.mount('#assignment');