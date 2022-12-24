var todos = [
    {
        text: 'Learn HTML, CSS, Javascript',
        done: true
    },
    {
        text: 'Learn the basic of vuejs',
        done: false
    }
]

const selfReminder = {
    data() {
        return {
            todos: [],
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.text) {
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                }
                localStorage.setItem('todos', JSON.stringify(this.todos));
            } else {
                alert('To-do text is required')
            }
        },
        storeTodos() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
            // console.log('Updated');
        }
    },
    created() {
        this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
    },
    // updated() {
    //     localStorage.setItem('todos', JSON.stringify(this.todos));
    //     console.log('Updated');
    // }
};

Vue.createApp(selfReminder).mount('#app');