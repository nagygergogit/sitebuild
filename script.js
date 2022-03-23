function currencies(currency, i) {
  return `
            <div class="card">
                <div class="title"><h2>${currency.title}</h2></div>
                <div class="sub"><p>${currency.sub}</p></div>
                <p class="text">${currency.text}</p>
              <button>Save<span class="material-icons arrow">arrow_forward</span>
            </button>   
            </div>
            
        `;
}

function loadEvent() {
  const mainElement = document.querySelector("main");
  for (let i = 0; i < data.length; i++) {
    const currency = data[i];
    mainElement.insertAdjacentHTML("beforeend", currencies(currency, i));
  }
}

window.addEventListener("load", loadEvent);
