import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_DATA = [
    {
        id: 'e1',
        description: 'a pair of shoes',
        amount: 23.50,
        date: new Date('2023-08-05')
    },
    {
        id: 'e2',
        description: 'Mangoes',
        amount: 10.50,
        date: new Date('2023-07-04')
    },
    {
        id: 'e3',
        description: 'shirt',
        amount: 30.99,
        date: new Date('2023-05-05')
    },
    {
        id: 'e4',
        description: 'a pair of khakis',
        amount: 100.50,
        date: new Date('2023-04-15')
    },
];

function ExpensesOutput({expenses, expensesPeriod}) {
    return (
        <View>
            <ExpensesSummary expenses={DUMMY_DATA} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_DATA} />
        </View>
    )
}

export default ExpensesOutput;