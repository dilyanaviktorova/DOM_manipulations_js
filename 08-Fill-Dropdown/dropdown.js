function addItem() {

    let text = document.getElementById("newItemText");
    let value = document.getElementById("newItemValue");

    let select = document.getElementById("menu");

    let newOption = document.createElement("option");

    newOption.textContent = text.value;
    newOption.value = value.value;
     
    select.appendChild(newOption);

    text.value = '';
    value.value = '';
   
}