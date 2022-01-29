var mobile = {
    name: 'Xiaomi',
    price: 29500,
    color: 'Black',
    storage: '64GB'
};

console.log(mobile);

mobile.color = 'red';
console.log(mobile);

mobile['price'] = 23000;
console.log(mobile);

var newStorage = 'storage';
mobile[newStorage] = '128gb';
console.log(mobile);