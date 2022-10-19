import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const quickSort = (list) => {
  if (list.length < 1) {
    return [];
  }

  let smaller = [];
  let greater = [];

  for (let i = 1; i < list.length; i++) {
    list[i] < list[0] ? smaller.push(list[i]) : greater.push(list[i]);
  }

  return [].concat(quickSort(smaller), list[0], quickSort(greater));
};

const Week39 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    numbers: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!input.numbers) {
      return setMessage("Please insert a list of numbers");
    }

    const numbers = input.numbers.split(",");

    if (numbers.length <= 1) {
      return setMessage("Please insert a valid list like the example");
    }

    const numbers2 = [];
    numbers.map((element) => {
      numbers2.push(parseInt(element));
    });

    if (numbers.length !== numbers2.length) {
      return setMessage("Please insert a list of numbers like the example");
    }

    const result = quickSort(numbers2);
    return setMessage(`The orderer list is ${result}`);
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 39: Quick sort</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: create a function that receives an unordered list
            of numbers and sorts them using the quick sort algorithm
          </p>
          <p className={styles.statement__p}>
            e.g. of list: 4, 19, 1, 3, 22, 12, 5, 10
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
              changeModalState();
            }}
          >
            <div className={styles.statement__form}>
              <input
                name="numbers"
                placeholder="Insert a list of numbers"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link="/Challenges/week38" text="Back" />
          <ButtonNextReturn link="/" text="Next" />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week39;
