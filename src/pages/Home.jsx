// styles
import styles from "./Home.module.css";

// icons fixed
import { FaHandPointRight } from "react-icons/fa";

// custom hooks
import { useCollection } from "../hooks/useCollection";

// components
import TransactionsList from "../components/TransactionsList";
import TransactionForm from "../components/TransactionForm";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Home() {
  const { user } = useGlobalContext();
  const { data: transactions } = useCollection("transactions", [
    "uid",
    "==",
    user?.uid,
  ]);
  return (
    <div className={`${styles.home} container`}>
      <div style={{ flexShrink: 0 }}>
        {transactions && <TransactionsList transactions={transactions} />}
        {transactions && transactions.length === 0 && (
          <div className={styles.empty}>
            <h2>No transactions yet.</h2>
            <p>
              Add your first transaction. <FaHandPointRight />
            </p>
          </div>
        )}
      </div>
      <div>
        <h2>Add New Transactions:</h2>
        <TransactionForm />
      </div>
    </div>
  );
}

export default Home;
