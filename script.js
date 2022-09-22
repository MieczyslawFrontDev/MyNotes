const addBtn = document.querySelector(".menu__add");
const deleteAllBtn = document.querySelector(".menu__removeAll");
const saveBtn = document.querySelector(".note-panel__save");
const cancelBtn = document.querySelector(".note-panel__cancel");
const deleteBtns = document.querySelector(".note-list__delete-note");
const noteList = document.querySelector(".note-list");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const textarea = document.querySelector("#textarea");
const error = document.querySelector("note-panel__error");

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

  newNote.innerHTML = `<div class="note-list__note">
  <div class="note-list__header">
    <h3 class="note-list__title">Praca</h3>
    <button class="note-list__delete-note">
      <i class="fas fa-times icon"></i>
    </button>
  </div>
  <div class="note-list__body">Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Vero mollitia nemo alias placeat, autem deleniti
    quis nostrum sit quos facilis optio, quidem vel perferendis neque
    obcaecati. Sint earum voluptatum libero!
  </div>
</div>`;

  noteList.appendChild(newNote);
  cardID++;
  textarea.value = "";
  category.selectedIndex = 0;
  notePanel.style.display = "none";
};

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
