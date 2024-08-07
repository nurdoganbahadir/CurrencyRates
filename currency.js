class Currency {
  constructor() {
    this.url =
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_nCp3jhXBV5S1HsGL7AF2LGRmT9ekTRLxE5IUvdSdbase_currency=";
  }

  async exchange(amount, firstCurrency, secondCurrency) {
    const response = await fetch(`${this.url}${firstCurrency}`);
    console.log(response);
  }
}
