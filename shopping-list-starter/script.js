let shoppingListItems = ["milk", "eggs", "bread"];


const addItem = () => {
    let input = document.getElementById("new-item-text"); // This is a reference to the input element
    let item = input.value; // This is just the string/text value
    shoppingListItems = [...shoppingListItems, item];
    input.value = "";
    updateItems();
    
};

const updateItems = () => {
    // First we get the list element
    let listElement = document.getElementById("shopping-list-items");
    // Then we clear it of any existing items - either of the below works
    listElement.innerHTML = "";
    // listElement.innerText = "";

    // Then we loop through the shopping list items and add them to the list
    for (const shoppingItem of shoppingListItems) {
        let itemElement = document.createElement("li");
        itemElement.innerText = shoppingItem;
        listElement.appendChild(itemElement);
    }    
};

const clearItems = () => {
    shoppingListItems = [];
    updateItems();
}

updateItems();
