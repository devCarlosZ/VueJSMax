const app = Vue.createApp({
<<<<<<< HEAD
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
=======
    data(){
        return{
            name: '',
            lastName: ''
        };
    },
    methods: {
        popUp(){
            alert("Hello World! I'm learning Vue!");
        },
        name(){
            return this.name;
        },
        last(e){
            this.lastName = e.target.value;
            e.target.value= ''
>>>>>>> cff15cb15ceda61607f7eb74548697026e6dbbf7
        }
    }

});

<<<<<<< HEAD
app.mount('#assignment');
=======
app.mount ('#assignment');
>>>>>>> cff15cb15ceda61607f7eb74548697026e6dbbf7
