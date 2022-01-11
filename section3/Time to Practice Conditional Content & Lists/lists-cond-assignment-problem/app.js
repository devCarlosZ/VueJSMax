const app = Vue.createApp({
    data() {
        return {
            enteredValue: '',
            tasks: [],
            taskListIsVisible: true,
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredValue);
        },
        toggleTaskList() {
            this.taskListIsVisible = !this.taskListIsVisible;
        }
    },
    computed: {
        buttonCaption() {
            return this.taskListIsVisible ? 'Hide List' : ' Show List';
        }
    }

});
app.mount('#assignment');