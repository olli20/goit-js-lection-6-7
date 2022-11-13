// console.table(document.querySelector('body').childNodes);
import { getItemTemplate } from './getItemTemplate.js';
import { tasks } from './tasks.js';

const refs = {
    list: document.querySelector('.list'),
    form: document.querySelector('.form'),
}

const listRender = () => {
    const lis = tasks.map((task) => getItemTemplate(task));

    refs.list.innerHTML = '';
    refs.list.insertAdjacentHTML('beforeend', lis.join(''));
}

listRender();

const addTask = (task) => {
    
    const newItem = {
        task,
        isDone: false,
    };

    tasks.push(newItem);
}

const handleSubmit = (event) => {
    event.preventDefault();

    const { value } = event.target.elements.task;

    addTask(value);
    listRender(); 
    refs.form.reset();
};

refs.form.addEventListener('submit', handleSubmit);