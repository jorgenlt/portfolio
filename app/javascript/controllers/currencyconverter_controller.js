import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="currencyconverter"
export default class extends Controller {
  static targets = ['fromcurrency', 'tocurrency', "amount", "result"]
  static values = []

  connect() {
    console.log('currencycontroller connected');
    // this.convert()
  }

  convert() {
    console.log('convert executed');
    const fromCurrency = this.fromcurrencyTarget.value
    this.#convertCurrency(fromCurrency);
  }

  #convertCurrency(from) {
    fetch(`https://open.er-api.com/v6/latest/${from}`)
      .then(response => response.json())
      .then((data) => {
        const amount = this.amountTarget.value;
        const toCurrency = this.tocurrencyTarget.value;
        const rate = data.rates[toCurrency];
        const result = amount * rate;

        this.resultTarget.parentNode.classList.remove("d-none");
        this.resultTarget.innerHTML = result;
      })
  }
}
