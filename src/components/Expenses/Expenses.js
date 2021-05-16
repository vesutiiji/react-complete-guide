import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [filterState, setFilterState] = useState("2020");
  const yearSelectHandler = (selectedYear) => {
    setFilterState(selectedYear);
  };
  console.log(filterState);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filterState}
          yearSelectHandler={yearSelectHandler}
        />
        {props.arr.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
