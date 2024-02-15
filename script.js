//массив с товарами
let goods = [];

//отображаем форму добавления товара
function addFormForNewGoods() {
    let formAddGoods = document.querySelector('.form-add-goods');
    formAddGoods.className = 'form-add-goods-new';
    // console.log(formAddGoods);
};
// достаем catalog, в котором буду отрисовывать элементы
let catalog = document.querySelector('.catalog');

// создаю новый товар 
function addGoods() {
    event.preventDefault();// обнули стандартные свойства формы, чтоб не происходило переотрисовка дом-дерево
    let newGoods = {};
    let newId;// cоздала переменную для новго идент
    let arrayId = [];// создала переменную под массив с имеющимися уже идент
    // собираем все имеющиеся идент
    for (let i = 0; i < goods.length; i++) {
        arrayId.push(goods[i].id)
    };
    // ставлю идент 1 или следующий за максимальным
    if (arrayId.length == 0) {
        newId = 1
    } else {
        newId = Math.max(...arrayId) + 1;// так как функция макс не работает напрямую с массивами , поэтому ... ставлю
    }
    //собираю все свойства объекта товара
    newGoods.id = newId;
    let productName = document.getElementById('productName');
    newGoods.name = productName.value;
    let productCategory = document.getElementById('productCategory');
    newGoods.category = productCategory.value;
    let productPrice = document.getElementById('productPrice');
    newGoods.price = productPrice.value;
    //все товары собираем в массив
    goods.push(newGoods);
    //создаю и заполняю div для нового товара
    let newProduct = document.createElement('div');
    newProduct.className = 'new-prod'
    newProduct.textContent = `${productName.value} - ${productCategory.value} - ${productPrice.value}руб.`;
    // содание кнопки удаления текущего товара
    let buttonDelete = document.createElement('button');
    buttonDelete.className = 'delete-product';
    buttonDelete.textContent = 'удалить';
    // присваиваю кнопке удалить id равный идентификатору в объекте товар
    newProduct.append(buttonDelete);
    // готовый товар с его кнопкой отоброжаем
    catalog.append(newProduct);
    // навешиваю функционал на кнопку удаления
    let butDelete = document.querySelectorAll('.delete-product');
    // функционал кнопок удаления товара
    for (let i = 0; i < goods.length; i++) {
        butDelete[i].addEventListener('click', deleteProduct);
        function deleteProduct() {
            let currentGoods = document.querySelectorAll('.new-prod');
            currentGoods[i].classList.add('delete');//убираю отображение
            delete goods[i].name;
            delete goods[i].category;
            delete goods[i].price;
            console.log(goods)
        };
    }
    console.log(goods)
}

// закрытие формы добавления товара
function closeFormAdd() {
    event.preventDefault();// обнули стандартные свойства формы, чтоб не происходило переотрисовка дом-дерево
    let formAddGoods = document.querySelector('.form-add-goods-new');
    formAddGoods.className = 'form-add-goods';
}
// фильтр отображения добавленных товаров
let filterGoods = document.querySelector('.filter-goods');
console.log(filterGoods.value);
filterGoods.addEventListener('change', filterCategory);

function filter(categoryProd) {
    choice = filterGoods.value;
    let containerForGoods = document.querySelectorAll('.new-prod');
    if (choice === categoryProd) {
        for (let i = 0; i < containerForGoods.length; i++) {
            containerForGoods[i].classList.remove('display-none')
        }
        for (let i = 0; i < goods.length; i++) {
            if (goods[i].category !== categoryProd) {
                containerForGoods[i].classList.add('display-none')
            }
        }
    }
};

function filterCategory() {
    let containerForGoods = document.querySelectorAll('.new-prod');
    filter('одежда');
    filter('электроника');
    filter('бытовая техника');
    filter('игрушки');
    if (filterGoods.value === 'все') {
        for (let i = 0; i < containerForGoods.length; i++) {
            containerForGoods[i].classList.remove('display-none')
        }
    }
}