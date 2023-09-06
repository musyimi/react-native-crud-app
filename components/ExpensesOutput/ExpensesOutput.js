import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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
    {
        id: 'e5',
        description: 'a pair of Socks',
        amount: 10.50,
        date: new Date('2023-04-15')
    },
    {
        id: 'e6',
        description: 'Booties',
        amount: 5.50,
        date: new Date('2023-04-15')
    },
    {
        id: 'e7',
        description: 'Yebo Yebo',
        amount: 70.50,
        date: new Date('2023-04-15')
    },
    {
        id: 'e8',
        description: 'Sandack',
        amount: 90.50,
        date: new Date('2023-04-15')
    },
    {
        id: 'e9',
        description: 'Ngoma',
        amount: 40.50,
        date: new Date('2023-04-15')
    },
];

function ExpensesOutput({expenses, expensesPeriod}) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_DATA} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_DATA} />
        </View>
    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroungColor: GlobalStyles.colors.primary700
    }
});