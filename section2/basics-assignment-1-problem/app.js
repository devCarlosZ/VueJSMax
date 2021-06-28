const app = Vue.createApp({
    data() {
        return {
            name: 'Carlos',
            age: 45,
            imageURL: "https://apod.nasa.gov/apod/image/2106/PaperMoonSolarEclipse_Letian_3000.jpg"
        };
    },
    methods: {
        inFive(){
            return this.age + 5;
        },
        faveNumber(){
            return Math.floor(Math.random() * 13);
        }
    }


});

app.mount("#assignment");