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
