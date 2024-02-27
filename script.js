const goods = [];
let newId = 1;
const catalog = document.querySelector('.catalog');
const btnAddGoods = document.querySelector('#btnAddGoods');
const name = document.querySelector('#productName');
const category = document.querySelector('#productCategory');
const price = document.querySelector('#productPrice');
const categoryFilter = document.querySelector('#categoryFilter');

// добавление нового товара
btnAddGoods.addEventListener('click', addGoods);
function addGoods(event) {
    event.preventDefault();
    const newGoods = { id: newId++, name: name.value.trim(), category: category.value, price: price.value };
    goods.push(newGoods);
    name.value = '';
    price.value = '';
    console.log(goods);
    displayGoods(categoryFilter.value)
};


// отрисовка товаров в каталоге
function displayGoods(choiceCategory = 'все') {
    catalog.innerHTML = '';
    goods
        .filter((product)=>choiceCategory==='все' || choiceCategory===product.category)
        .map((product) => {
            const containerForProduct = document.createElement('div');
            containerForProduct.textContent = `${product.name}-${product.category}-${product.price}`;
            const btnDelete = document.createElement('button');
            btnDelete.textContent = 'удалить';
            btnDelete.onclick = () => deleteGoods(product.id);
            containerForProduct.append(btnDelete);
            catalog.append(containerForProduct);
        })
};

function deleteGoods(deleteProductId) {
    const needIndex = goods.findIndex(product => product.id === deleteProductId);
    goods.splice(needIndex, 1);
    displayGoods(categoryFilter.value)
};

//фильтрация товаров
categoryFilter.addEventListener('change', ()=>{displayGoods(categoryFilter.value)});

displayGoods()

