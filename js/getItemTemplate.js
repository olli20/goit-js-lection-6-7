export const getItemTemplate = ({ task, isDone }) => `
    <li class="list__item">
        <div>
            <input type="checkbox" ${isDone ? 'checked' : ''}>
            <span>${task}</span>
        </div>
        <button type="button">x</button>
    </li>`;