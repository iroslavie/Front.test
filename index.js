const today_date = document.querySelector(".footer");
const button = document.querySelector("button");
const range_1 = document.querySelector(".first");
const range_2 = document.querySelector(".second");
const select_1 = document.querySelector(".select_1");
const radio = document.querySelector(".radio_inputs");
const fio = document.querySelector(".text1");
const age = document.querySelector(".number");
const checkbox = document.querySelector(".checkbox");

const today = new Date().getFullYear();

today_date.innerText = `© Лебедева Ирина Руслановна, 2001-${today}`



