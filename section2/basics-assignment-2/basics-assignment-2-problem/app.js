const app = Vue.createApp({
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
        }
    }

});

app.mount ('#assignment');