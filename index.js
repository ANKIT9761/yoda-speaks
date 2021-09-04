var outputDiv = document.getElementById("output");
var inputText = document.querySelector("#text-box");
var btnTranslate = document.querySelector("#btn-translate");

var translatedText = "";

var translate = (text) => {
  var url = serverUrl + "?text=" + text;
  var data = fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      translatedText = res.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
};

var serverUrl = "https://api.funtranslations.com/translate/yoda.json";
btnTranslate.addEventListener("click", () => {
  var text = inputText.value;
  console.log(text);
  translate(text);
});

var errorHandler = (error) => {
  alert("Some error occured plz try again after some time");
};
