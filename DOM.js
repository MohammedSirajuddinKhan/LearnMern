 // 1. SELECTING ELEMENTS
    const title = document.getElementById("title");
    const paragraph = document.querySelector(".text");
    const button = document.getElementById("btn");
    const list = document.getElementById("list");

    // 2. CHANGING TEXT
    title.textContent = "DOM Manipulation Started";

    // 3. CHANGING HTML
    paragraph.innerHTML = "<b>This is updated paragraph!</b>";

    // 4. CHANGING STYLE
    title.style.color = "blue";
    title.style.fontSize = "30px";

    // 5. ADDING / REMOVING CLASS
    paragraph.classList.add("highlight");

    // 6. EVENT HANDLING
    button.addEventListener("click", function () {

      // 7. CREATE NEW ELEMENT
      const newItem = document.createElement("li");
      newItem.textContent = "New Item Added";

      // 8. APPEND ELEMENT
      list.appendChild(newItem);

      // 9. REMOVE FIRST ITEM
      if (list.firstElementChild) {
        list.removeChild(list.firstElementChild);
      }

      // 10. TOGGLE CLASS
      title.classList.toggle("highlight");
    });