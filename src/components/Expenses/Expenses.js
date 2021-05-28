import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
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
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
