import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

function bubbleSort(arr, order) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j] && order == "asc") {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
      if (arr[j + 1] > arr[j] && order == "desc") {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

const Week29 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    numbers: "",
    order: "asc",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!input.numbers) {
      return setMessage("Please enter a list of numbers");
    }

    let inputArray = input.numbers.split(",");
    const order = input.order;
    let valid = true;

    inputArray = inputArray.map((number) => {
      if (isNaN(parseInt(number))) {
        valid = false;
      }
      return parseInt(number);
    });

    if (!valid) {
      return setMessage("Please enter a list of numbers (n1, n2, n3...)");
    }

    let orderedArray;
    orderedArray = bubbleSort(inputArray, order);
    console.log(orderedArray);
    return setMessage(orderedArray);
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 29: Order the list</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Create a function that sorts and returns an array
            of numbers. (It is not possible to use functions of the language
            that resolve it automatically)
          </p>
          <p>
            (It is not possible to use functions of the language that resolve it
            automatically)
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
                placeholder="List of numbers (n1, n2,...)"
                onChange={onChange}
                className={styles.input}
              />
              <select
                name="order"
                onChange={onChange}
                className={styles.select}
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week28"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week30"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week29;
