const addBtn = document.querySelector(".menu__add");
const deleteAllBtn = document.querySelector(".menu__removeAll");
const saveBtn = document.querySelector(".note-panel__save");
const cancelBtn = document.querySelector(".note-panel__cancel");
const deleteBtns = document.querySelector(".note-list__delete-note");
const noteList = document.querySelector(".note-list");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const textarea = document.querySelector("#textarea");
const error = document.querySelector(".note-panel__error");

let selectedValue;
let cardID = 0;

const openPanel = () => {
  notePanel.style.display = "flex";
};

const closePanel = () => {
  notePanel.style.display = "none";
  category.selectedIndex = 0;
  textarea.value = "";
  error.style.display = "hidden";
};

const createNote = () => {
  const newNote = document.createElement("div");
  newNote.classList.add("note-list__note");
  newNote.setAttribute("id", cardID);

  newNote.innerHTML = `
  <div class="note-list__header">
    <h3 class="note-list__title">${selectedValue}</h3>
    <button class="note-list__delete-note" onClick="deleteNote(${cardID})">
      <i class="fas fa-times icon"></i>
    </button>
  </div>
  <div class="note-list__body">${textarea.value}
  </div>
`;

  noteList.appendChild(newNote);
  cardID++;
  textarea.value = "";
  category.selectedIndex = 0;
  notePanel.style.display = "none";

  changeColor(newNote);
};

const addNote = () => {
  if (
    category.options[category.selectedIndex].value !== "0" &&
    textarea.value !== ""
  ) {
    error.style.visibility = "hidden";
    createNote();
  } else {
    error.style.visibility = "visible";
  }
};

const deleteAllNotes = () => {
  noteList.textContent = "";
};

const deleteNote = (id) => {
  const noteToDelete = document.getElementById(id);
  noteToDelete.remove();
};

const selectValue = () => {
  selectedValue = category.options[category.selectedIndex].text;
};

const changeColor = (note) => {
  switch (selectedValue) {
    case "Zakupy":
      note.style.backgroundColor = "rgb(72, 255, 0)";
      break;
    case "Praca":
      note.style.backgroundColor = "rgb(255, 243, 0)";
      break;
    case "Inne":
      note.style.backgroundColor = "rgb(0, 170, 255)";
      break;
  }
};

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);
deleteAllBtn.addEventListener("click", deleteAllNotes);
