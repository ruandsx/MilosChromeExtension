let clicked = 0;
let change = document.getElementById('change');

change.style.backgroundColor = "#FF0000";
change.style.backgroundImage = "images/icon128.png";
change.setAttribute('value', 'https://i.kym-cdn.com/entries/icons/original/000/010/843/ricardo.jpg');

change.onclick = function(element) {
  let image = element.target.value;

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if(clicked < 3 ){
      chrome.tabs.executeScript(tabs[0].id,
        {code: 'els = document.getElementsByTagName("img");Array.from(els).forEach((el) => { el.src = "' + image + '";}); '}
      );
    }else{
      chrome.tabs.executeScript(tabs[0].id,
        {code: 'alert("If you are trying to keep back original images, just refresh the page (F5).   :P      Else, ignore this and Milos EVERYTHING!");'}
      );
    }
  });

  clicked += 1;
};