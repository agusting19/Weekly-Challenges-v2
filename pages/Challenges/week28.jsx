import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week28 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({});

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setMessage("This challenge still not resolved");
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 28: Vending machine</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Simulate the operation of a vending machine by
            creating an operation that receives money (array of coins) and a
            number that indicates the selection of the product.
          </p>
          <ul className={styles.statement__ul}>
            <li>
              The program will return the name of the product and an array with
              the money returned (with the least number of coins).
            </li>
            <li>
              If the money is insufficient or the product number does not exist,
              it must be indicated with a message and all the coins must be
              returned.
            </li>
            <li>
              If there is no money back, the array will be returned empty.
            </li>
            <li>
              To make it simpler, we will work in cents with 5, 10, 50, 100 and
              200 coins.
            </li>
            <li>
              We must control that the currencies sent are within those
              supported.
            </li>
          </ul>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
              changeModalState();
            }}
          >
            <div className={styles.statement__form}>
              <input
                name="firstVector"
                placeholder="Item number"
                onChange={onChange}
                className={styles.input}
              />
              <input
                name="secondVector"
                placeholder="Amount of money"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week27"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week29"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week28;
