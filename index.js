let items = [
    { 'name': 'd', price: 121 },
    { 'name': 'c', price: 150 },
    { 'name': 'a', price: 103 },
    { 'name': 'a', price: 107 },
    { 'name': 'd', price: 87 },
    { 'name': 'b', price: 99 },
];

items.sort((a,b) => {
    
    if(a.name === b.name){
        return a.price - b.price;
    }
    return a.name > b.name ? 1: -1;
});
console.log(items);
