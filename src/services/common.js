export function getProduct(id, productsArr) {
    for( var i = 0; i< productsArr.length; i++) {
        if(productsArr[i]["price"] == id)
        return productsArr[i];
    }
}