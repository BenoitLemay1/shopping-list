const list = document.querySelector("ul");
const newItem = document.getElementById("new-item");
const addBtn = document.querySelector("button");

function addItem() {
    const itemToAdd = newItem.value;
    newItem.value = "";
    const listEl = document.createElement("li");
    const addedItem = document.createElement("span");
    const deleteBtn = document.createElement("button");
    listEl.appendChild(addedItem);
    listEl.appendChild(deleteBtn);
    addedItem.textContent = itemToAdd;
    deleteBtn.textContent = "Delete";
    list.appendChild(listEl);
    deleteBtn.addEventListener("click", ()=> {listEl.remove()});
    newItem.focus();
    return
}

addBtn.addEventListener("click", addItem);



