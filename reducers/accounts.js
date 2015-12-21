const initialState = [
  {
    id: 1,
    accountNumber: "121212",
    accountType: "Savings",
    amount: 400.00
  },
  {
    id: 2,
    accountNumber: "232323",
    accountType: "Money market",
    amount: 5000.00
  }
];

export default function accounts(state = initialState, action) {
  return state;
}
