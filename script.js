//создаем массив с товарами
let goods = [
    // { id: 1, name: 'шапка', category: 'одежда', price: 500 },
    // { id: 2, name: 'шарф', category: 'одежда', price: 400 },
    // { id: 3, name: 'перчатки', category: 'одежда', price: 300 },
    // { id: 4, name: 'барби', category: 'игрушки', price: 600 },
    // { id: 5, name: 'мяч', category: 'игрушки', price: 200 },
    // { id: 6, name: 'робот', category: 'игрушки', price: 700 },
    // { id: 7, name: 'медведь', category: 'игрушки', price: 100 },
];

//отображаем форму добавления товара
function addFormForNewGoods() {
    let formAddGoods = document.querySelector('.form-add-goods');
    formAddGoods.className = 'form-add-goods-new';
    // console.log(formAddGoods);
}
// создаю новый товар путем добавление объекта в массив
function addGoods() {
    event.preventDefault();// обнули стандартные свойства формы, чтоб не происходило переотрисовка дом-дерево
    let newGoods = {};
    let newId;// cоздала переменную для новго идент
    let arrayId = [];// создала переменную под массив с имеющимися уже идент
    for (let i = 0; i < goods.length; i++) {
        arrayId.push(goods[i].id)
    };
    if (arrayId.length == 0) {
        newId = 1
    } else {
        newId = Math.max(...arrayId) + 1;// так как функция макс не работает напрямую с массивами , поэтому ... ставлю
    }
    newGoods.id = newId;
    let productName = document.getElementById('productName');
    newGoods.name = productName.value;
    let productCategory = document.getElementById('productCategory');
    newGoods.category = productCategory.value;

    let productPrice = document.getElementById('productPrice');
    // console.log(productPrice);
    newGoods.price = productPrice.value;

    // console.log(newGoods);
    goods.push(newGoods);
    console.log(goods);
    let newProduct = document.createElement('div');
    newProduct.className = 'new-prod'
    newProduct.textContent = `${productName.value} - ${productCategory.value} - ${productPrice.value}руб.`;
   
   // содание кнопки удаления текущего товара
    let buttonDelete = document.createElement('button');
    buttonDelete.className='delete-product';
    buttonDelete.textContent='удалить';
    newProduct.append(buttonDelete);
    // готовый товар с его кнопкой отоброжаем
    catalog.append(newProduct);
    


    

}
// закрытие формы добавления товара
function closeFormAdd() {
    event.preventDefault();// обнули стандартные свойства формы, чтоб не происходило переотрисовка дом-дерево
    let formAddGoods = document.querySelector('.form-add-goods-new');
    formAddGoods.className = 'form-add-goods';
}
// достаем catalog, в котором буду отрисовывать элементы
let catalog = document.querySelector('.catalog');
console.log(catalog);

