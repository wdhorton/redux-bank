const initialState = [
  {
    type: "Withdrawal",
    date: "12/13/14",
    amount: 250.00
  },
  {
    type: "Deposit",
    date: "1/3/15",
    amount: 1000.00
  }
];

export default function transactions(state = initialState, action) {
  return state;
}
