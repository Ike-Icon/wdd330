let input = document.querySelector('.input-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');
let filters = document.querySelector('.filters');

    

input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})

addBtn.addEventListener('click', () => {
    if(input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.innerHTML = `<p class="all-items"> ${input.value} </p>

        <div class="item-btn">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>`

        tasks.appendChild(newItem);
        input.value = '';
    } else {
        alert('Please enter a task')
    }
})

// remove list items from the list
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
})


tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-check')
    ) {
        e.target.parentElement.parentElement.classList.
        toggle('completed');
    }
})

// filters.addEventListener('click', (e) => {
//     if (e.target.classList.contains('filters__btn--complete')){
//         e.target.parentElement.parentElement.filter('completed');
//     }
// })

// filterSelection("all")
// function filterSelection(c) {
//     let x, i;
//     x = document.getElementsByClassName('all-items');
//     if (c == 'all') c = '';
//     for (i = 0; i < x.length; i++) {

//     }
// }

