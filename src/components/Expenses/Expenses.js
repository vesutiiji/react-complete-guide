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
  const filteredExpenses = props.arr.filter((expense) => {
    return expense.date.getFullYear().toString() === filterState;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filterState}
          yearSelectHandler={yearSelectHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
