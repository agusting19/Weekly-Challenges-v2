import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week14 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    number: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isNaN(input.number) || !input.number)
      return setMessage("The input has to be a natural number");

    if (input.number.length !== 3)
      return setMessage("Armstrong numbers has 3 digits");

    const num1 = input.number[0];
    const num2 = input.number[1];
    const num3 = input.number[2];

    const result = num1 ** 3 + num2 ** 3 + num3 ** 3;
    if (result == input.number) {
      return setMessage("It is an Armstrong number");
    }

    return setMessage("Its not an Armstrong number");
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Challenge 14: Is it an Armstrong number?
        </h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Write a function that calculates if a given
            number is an Armstrong (also called narcissistic) number. An
            Armstrong number of three digits is an integer such that the sum of
            the cubes of its digits is equal to the number itself.
          </p>
          <p>
            For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 =
            371.
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
              changeModalState();
            }}
          >
            <input
              type="text"
              name="number"
              placeholder="Insert a number"
              onChange={onChange}
              className={styles.input}
            />
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week13"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week15"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week14;
