import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.arr[0].title}
        amount={props.arr[0].amount}
        date={props.arr[0].date}
      />
      <ExpenseItem
        title={props.arr[1].title}
        amount={props.arr[1].amount}
        date={props.arr[1].date}
      />
      <ExpenseItem
        title={props.arr[2].title}
        amount={props.arr[2].amount}
        date={props.arr[2].date}
      />
      <ExpenseItem
        title={props.arr[3].title}
        amount={props.arr[3].amount}
        date={props.arr[3].date}
      />
    </Card>
  );
}

export default Expenses;
