
export const getBillData = function () {
  fetch('https://boiling-hollows-56673.herokuapp.com/utilityData')
    .then(response => response.json())
    .then(response => this.setState({ billData: response}))
    .catch(err => console.log(err))
  }
