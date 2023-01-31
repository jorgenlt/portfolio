import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="currencyconverter"
export default class extends Controller {
  static targets = ['fromcurrency', 'tocurrency', "amount", "result", "resultTop", "resultBottom"]
  static values = []

  connect() {
    console.log('currencycontroller connected');
    // this.convert()
  }

  convert() {
    console.log('convert executed');
    this.resultTarget.parentNode.classList.remove("slideDown");
    this.resultTarget.parentNode.classList.add("d-none");
    const fromCurrency = this.fromcurrencyTarget.value
    this.#convertCurrency(fromCurrency);
  }

  #convertCurrency(from) {
    fetch(`https://open.er-api.com/v6/latest/${from}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data.rates);
      const amount = this.amountTarget.value;
      const toCurrency = this.tocurrencyTarget.value;
      const rate = data.rates[toCurrency];
      const result = `${amount * rate} ${toCurrency}`;

      this.resultTopTarget.innerHTML = `${amount} ${from} =`
      this.resultTarget.innerHTML = `${this.#roundOff(parseFloat(result), 2)} ${toCurrency}`;
      this.resultBottomTarget.innerHTML = `1 ${from} = ${this.#roundOff(parseFloat(rate), 2)} ${toCurrency}`;
      this.resultTarget.parentNode.classList.add("slideDown");
      this.resultTarget.parentNode.classList.remove("d-none");
    })
  }

  #roundOff(num, decimals) {
    const x = Math.pow(10, decimals);
    return Math.round(num * x) / x;
  }
}
