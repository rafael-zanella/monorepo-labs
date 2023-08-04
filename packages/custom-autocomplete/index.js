
const autocompleteInput = document.getElementById("c-autocomplete__input");
const dropdownList = document.getElementById("c-autocomplete__list");
const inputIcon = document.querySelector(".c-autocomplete__input__icon");
let isDropdownOpen = false;
let currentFocus = -1;

// example of data that can be filtered
const dados = ["A", "B"];


const addOptionsToDropdownList = () => {
  // add items to the list
  dados.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.setAttribute("role", "option");
    li.setAttribute("aria-selected", "false");
    li.addEventListener("click", function () {
      autocompleteInput.value = item;
      closeDropdown();
    });
    dropdownList.appendChild(li);
  });
}

addOptionsToDropdownList()

// on click input
autocompleteInput.addEventListener('click', () => {
  openDropdown()
})

// on type input
autocompleteInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  // filters the data based on the entered value
  const filteredData = dados.filter((item) =>
    item.toLowerCase().includes(value)
  );

  // uses a DocumentFragment to efficiently update the list
  const fragment = document.createDocumentFragment();

  // Adds the filtered items to the fragment
  filteredData.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.setAttribute("role", "option");
    li.setAttribute("aria-selected", "false");
    li.addEventListener("click", function () {
      autocompleteInput.value = item;
      closeDropdown();
    });
    fragment.appendChild(li);
  });

  // removes all existing items from the list before adding new ones
  dropdownList.innerHTML = '';
  dropdownList.appendChild(fragment);

  // displays the list if there are filtered items
  if (filteredData.length > 0) {
    openDropdown();
  } else {
    closeDropdown();
  }
});

const openDropdown = () => {
  autocompleteInput.focus();
  dropdownList.classList.add('c-autocomplete__list--active')
  dropdownList.setAttribute("aria-expanded", "true");
  isDropdownOpen = true;
}

const closeDropdown = () => {
  dropdownList.classList.remove('c-autocomplete__list--active')
  dropdownList.setAttribute("aria-expanded", "false");
  isDropdownOpen = false;
}

// on input keydown
autocompleteInput.addEventListener("keydown", function (event) {
  if(!isDropdownOpen) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      openDropdown();
    }
    return;
  }

  const items = dropdownList.getElementsByTagName("li");

  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    // change item with keyboard arrows
    event.preventDefault();
    if (event.key === "ArrowDown") {
      currentFocus++;
    } else {
      currentFocus--;
    }

    if (currentFocus >= items.length) {
      currentFocus = 0;
    }
    if (currentFocus < 0) {
      currentFocus = items.length - 1;
    }

    updateFocus();
  } else if (event.key === "Enter") {
    // selects the item by pressing Enter
    event.preventDefault();
    if (currentFocus > -1) {
      autocompleteInput.value = items[currentFocus].textContent;
      closeDropdown();
    }
  } else if (event.key === "Tab" || event.key === "Escape") {
    closeDropdown()
  }
});

const updateFocus = () => {
  const items = dropdownList.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    if (i === currentFocus) {
      items[i].setAttribute("aria-selected", "true");
    } else {
      items[i].setAttribute("aria-selected", "false");
    }
  }
}

// close the list when clicking outside
document.addEventListener("click", function (event) {
  const target = event.target;
  if (!target.matches(".c-autocomplete, .c-autocomplete *")) {
    closeDropdown();
  }
});

// cn click icon
inputIcon.addEventListener("click", function (event) {
  if (isDropdownOpen) {
    closeDropdown();
  } else {
    openDropdown();
  }
});
