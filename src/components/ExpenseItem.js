import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2021, 4, 15);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

    return (<div>
                <div className="expense-item">{expenseDate.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{expenseTitle}</h2>
                    <div className="expense-item__price">${expenseAmount}</div>
                </div>
            </div>
    );
}
export default ExpenseItem;