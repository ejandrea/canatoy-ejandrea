const form = document.getElementById("form");

const handleSubmit = event => {
  event.preventDefault();

  const form = document.querySelector("#form");
  const task = document.querySelector("#task");
  const taskValue = task.value.trim();

  // check for duplicates
  const listItemContainer = document.querySelector("#listItemContainer");
  listItemContainer.className = "w-full container";

  const duplicate = checkDuplicate(taskValue, listItemContainer.children);
  const duplicateAlert = document.createElement("div");

  console.log(duplicate, "DUPLICATE");

  if (!duplicate || duplicate.length < 1) {
    task.style.outline = "1px solid #ced4da";

    const taskItemContainer = document.createElement("div");
    listItemContainer.appendChild(taskItemContainer);
    taskItemContainer.className =
      "d-flex gap-2 align-items-center justify-content-start my-3 list-unstyled";
    taskItemContainer.id = taskValue;

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `${taskValue}`;
    taskItem.className = "px-0";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "btn btn-danger";

    deleteButton.addEventListener("click", () => {
      listItemContainer.removeChild(deleteButton.parentNode);
    });

    const horizontalRule = document.createElement("hr");
    horizontalRule.className = "mt-3 w-full";

    taskItemContainer.appendChild(taskItem);
    taskItemContainer.appendChild(deleteButton);
    taskItemContainer.appendChild(horizontalRule);

    task.value = "";

    const alerts = form.querySelector(".alert-danger");
    if (alerts) {
      alerts.remove();
    }
  } else {
    task.style.outline = "1px solid #FF0000";
    duplicateAlert.role = "alert";
    duplicateAlert.innerHTML = `${taskValue} is duplicate.`;
    duplicateAlert.className = "alert alert-danger mt-3";

    form.appendChild(duplicateAlert);
  }
};

function checkDuplicate(id, listItems) {
  if (listItems.length > 0) {
    const filtered = [...listItems].filter(list =>
      list.id.includes(id.toLowerCase())
    );
    return filtered;
  }
}

form.addEventListener("submit", handleSubmit);
