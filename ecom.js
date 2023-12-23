const INPUT_SEARCH = document.querySelector("input");
const INPUT_SUBMIT = document.getElementById("inputSubmit");
const li = document.querySelectorAll("li");
const main = document.querySelector("main");
const ANCHOR = document.querySelectorAll("a");
const BTN = document.querySelector("button");
const form = document.querySelector("form");
const DisplayText = document.querySelector(".warningText");
const UL = document.querySelector("ul");
const About_text_page = document.querySelector(".About-Page");

const About_text = document.querySelector(".About-the-tool");
const About_text_btn = document.querySelector(".btn2");

/*
 * @param using Dom to add functionality to the tool
 * Using the .forEach() function to call the list of ecommerce companies
 * Getting the input values to help in switching to another tab
 * Using the input values and list items in getting the company by name directly
 */
About_text.addEventListener("click", () => {
  About_text_page.style.display = "block";
});

About_text_btn.addEventListener("click", () => {
  About_text_page.style.display = "none";
});

BTN.addEventListener("click", () => {
  UL.style.display = "block";
});

li.forEach((list_item) => {
  console.log(list_item.innerText);
  list_item.addEventListener("click", () => {
    UL.style.display = "none";

    INPUT_SUBMIT.addEventListener("click", () => {
      if (INPUT_SEARCH.value == "" || INPUT_SEARCH.value < 5) {
        DisplayText.style.display = "block";
        setTimeout(function () {
          DisplayText.style.display = "none";
        }, 4000);
      }
      if (INPUT_SEARCH.value != "") {
        window.location.href = `http://www.${INPUT_SEARCH.value}.com/${list_item.innerText}`;
      }
      if (list_item.innerText == "shopify") {
        window.location.href = `http://www.${INPUT_SEARCH.value}.${shopify}.com`;
      }
      if (list_item.innerText == "Not among the list") {
        window.location.href = `http://www.${INPUT_SEARCH.value}.com`;
      }
    });
  });
});
INPUT_SEARCH.value = "";
