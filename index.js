    const form = document.querySelector(".form");
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");
    const closePopup = document.getElementById("close-popup");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const rangeFrom = document.getElementById("range-from").value;
        const rangeTo = document.getElementById("range-to").value;
        const selectElement = document.getElementById("select");
        const selectValue = selectElement.options[selectElement.selectedIndex].text;
        const radio =
            document.querySelector("input[name='radio']:checked")?.value ||
            "Не выбрано";
        const fio = document.getElementById("fio").value;
        const age = document.getElementById("age").value;

        const checkboxes =
            Array.from(document.querySelectorAll("input[name='checkbox']:checked"))
                .map((checkbox) => checkbox.nextSibling.textContent.trim())
                .join(", ") || "Не выбрано";

        popupText.innerHTML = `Диапазон: от ${rangeFrom} до ${rangeTo} <br>
        Select: ${selectValue} <br>
        Radio: ${radio} <br>
        ФИО: ${fio} <br>
        Возраст: ${age} <br>
        Выбранные checkbox: ${checkboxes}`;

        popup.classList.add("show");
    });

    closePopup.addEventListener("click", function () {
        popup.classList.remove("show");
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.classList.remove("show");
        }
    });

    const currentYearSpan = document.getElementById("current-year");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }




