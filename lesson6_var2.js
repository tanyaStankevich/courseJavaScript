var item1 = {
    name: "Платье",
    src: "./img1.jpg",
    price: 1500
};
var item2 = {
    name: "Блузка",
    src: "./img2.jpg",
    price: 500
};
var item3 = {
    name: "Костюм",
    src: "./img3.jpg",
    price: 2000
};

catalog = [item1, item2, item3];
console.log(catalog);
var sum = 0;

function init() {

    for (var i = 0; i <= catalog.length; i++) {
        var items = document.querySelector(".items");
        var itemBlock = document.createElement('div');
        itemBlock.appendChild(document.createTextNode(catalog[i].name));
        itemBlock.setAttribute("class", "itemBlock");

        var itemImg = document.createElement('img');
        itemImg.setAttribute("class", "imgs");
        itemImg.src = catalog[i].src;
        itemBlock.appendChild(itemImg);

        itemBlock.appendChild(document.createTextNode(catalog[i].price));

        var itemButton = document.createElement('button');
        itemButton.setAttribute("class", "butBuy");
        itemButton.setAttribute("id", "btn_" + i);
        itemButton.innerText = "Купить";
        itemBlock.appendChild(itemButton);
        items.appendChild(itemBlock);
    }
    itemButton.onclick = Summa;

}


function Summa(event) {
    var button = event.target;
    var mas = button.id.split("_");
    var index = mas[1];
    var korz = document.querySelector(".korz");
    korz.append(document.createTextNode(catalog[index].name));
    korz.append(document.createTextNode(catalog[index].price));
    sum += catalog[index].price;

    korz.createTextNode("Стоимость Вашей покупки" + sum);

    
}



window.onload = init;

