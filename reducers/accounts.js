const initialState = [
  {
    id: 1,
    accountNumber: "121212",
    accountType: "Savings"
  },
  {
    id: 2,
    accountNumber: "232323",
    accountType: "Money market"
  }
];

export default function accounts(state = initialState, action) {
  return state;
}
