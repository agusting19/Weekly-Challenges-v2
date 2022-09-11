import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week21 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    firstValue: "",
    operator: "addition",
    secondValue: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const num1 = parseInt(input.firstValue);
    const num2 = parseInt(input.secondValue);
    const operator = input.operator;

    if (!num1 || !num2) {
      return setMessage("Please enter values");
    }

    if (isNaN(num1) || isNaN(num2)) {
      return setMessage("Only number values accepted");
    }

    switch (operator) {
      case "addition":
        return setMessage(`The result of the sum is: ${num1 + num2}`);
        break;
      case "subtraccion":
        return setMessage(`The result of the subtraction is: ${num1 - num2}`);
        break;
      case "multiplication":
        return setMessage(
          `The result of the multiplication is: ${num1 * num2}`
        );
        break;
      case "division":
        return setMessage(`The result of the division is: ${num1 / num2}`);
    }
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 21: Mini calculator</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: Create a function that receives 2 numbers and an
            operator. Perform this operation between the 2 numbers.
          </p>
          <ul className={styles.statement__ul}>
            <li>Supports integers and decimals.</li>
            <li>
              Supports addition &quot;+&quot;, subtraction &quot;-&quot;,
              multiplication &quot;*&quot; and division &quot;/&quot;
              operations.
            </li>
          </ul>
          <form
            className={styles.form}
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
              changeModalState();
            }}
          >
            <div className={styles.statement__form}>
              <input
                name="firstValue"
                placeholder="Insert first value"
                onChange={onChange}
                className={styles.input}
              />
              <select
                name="operator"
                onChange={onChange}
                className={styles.select}
              >
                <option value="addition">Addition (+)</option>
                <option value="subtraccion">Subtraccion (-)</option>
                <option value="multiplication">Multiplication (*)</option>
                <option value="division">Division (/)</option>
              </select>
              <input
                name="secondValue"
                placeholder="Insert second value"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week20"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week22"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week21;
