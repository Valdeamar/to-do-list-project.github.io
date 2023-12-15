/* const form = document.querySelector('#form'),
      input = document.querySelector('#taskInput'),
      taskList = document.querySelector('#taskList'),
      deleteIcon = document.querySelector('#wrong'),
      emptyList = document.querySelector('#emptyList'); */

      /* form.addEventListener('submit', addTask);  // пишем просто addTask(без скобок), тк это привидет ее к нимедленому запуску без ожидания клика   

// Добавление задачи
    function addTask (event) {
    
        event.preventDefault();
        const taskText = input.value;

        const taskHTML = `
        <li>
          <div class="">${taskText}</div>
        <svg class="wrong" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path class="wrong" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
        </li>
        `;
        
        taskList.insertAdjacentHTML('beforeend', taskHTML);//метод принимает в себя 2 аргумента, 1 - куда будет добавлен кусок кода (в конец списка = beforeend), 2 - кусок разметки который мы хотим отобразить
    
    // Очищаем поле ввода и возвращаем на него фокус
        input.value = '';
        input.focus();

        if (taskList.children.length >= 1) {
            emptyList.classList.add('none');
        }
}

// так как я использовал function dicloration (обычно вызвал функцию, не через стрелки), я могу ее вызывать раньше нее, тоесть в этом случии на 7 строке, с другими  видами функций так не получиться

// Удаление задачи
    taskList.addEventListener('click', deleteTask);

    function deleteTask (event) {

        if (event.target.dataset.action = 'delete') {
            const parenNode = event.target.closest('li');  // closest ищет среди родителей этой кнопки
            parenNode.remove();
        }
        if (taskList.children.length = 1) {
            emptyList.classList.remove('none');
        }
    } */


    const form = document.querySelector('.form'),
          input = document.querySelector('#taskInput'),
          cardList = document.querySelector('.card__list'),
          cardText = document.querySelector('.card__list-item'),
          closeIcon = document.querySelectorAll('.card__list-action'),
          cardItem = document.querySelector('.card__list-wrapper'),
          noTasksBlock = document.querySelector('.notasks__block'),
          noValueModal = document.querySelector('.modal__error'),
          noValueModalButton = document.querySelector('.modal__error-button');
          
    // Пустая форма при отправке


    noValueModalButton.addEventListener('click', () => {
        noValueModal.classList.remove('active');
    });
    
    form.addEventListener('submit', addTask);

    function addTask (event) {
        event.preventDefault();

        if (input.value == '') {
            noValueModal.classList.add('active');
            return
        }


        const taskText = input.value;

        const taskHTML = `
        <div class="card__list-wrapper">
              <div class="card__list-item">
                <li>${taskText}</li>
              </div>
              <button data-action="delete" class="card__list-actions">
                <img src="img/filled-trash.png" alt="delete">
              </button>
          </div>
        `;

        cardList.insertAdjacentHTML('beforeend', taskHTML);

        // очищаем input
        input.value = '';
        input.focus();

        if (cardList.children.length >= 1) {
            noTasksBlock.style.display = 'none';
        }

        
    }

    // Удаление задачи 

    cardList.addEventListener('click', deleteTask);

    function deleteTask (event) {
        if (event.target.dataset.action === 'delete') { // ищем data-action="delete"
            const parenNode = event.target.closest('.card__list-wrapper');  // closest ищет среди родителей этой кнопки
            parenNode.remove();
        }

        if (cardList.children.length === 0) {
            noTasksBlock.style.display = 'block';
        }
    }

    // Сделанная задача

    cardList.addEventListener('click', doneTask);

    function doneTask(event) {
        const closestNode = event.target.closest('.card__list-item');
        if (closestNode.classList.contains('done')) {
            closestNode.classList.remove('done');
        } else {
            closestNode.classList.add('done');
        }
    }