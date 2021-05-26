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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filterState}
          yearSelectHandler={yearSelectHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
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
