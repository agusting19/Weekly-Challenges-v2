import { useState } from "react";
import {
  Modal,
  Layout,
  ButtonSolution,
  ButtonNextReturn,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week08 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    decimal: 0,
    binary: 0,
  });

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    let number = input.decimal;
    let binary = "";

    if (number < 0) {
      return setMessage("No negative numbers accepted");
    }

    if (!number) {
      return setMessage("No values entered");
    }

    if (isNaN(number)) return setMessage("Only accept numbers");

    while (number > 0) {
      const result = number % 2;
      binary = result.toString() + binary;
      number = Math.floor(number / 2);
    }
    input.binary = binary;
    return setMessage(
      `The number ${input.decimal} to binary is: ${input.binary}`
    );
  };

  return (
    <Layout>
      <section className={styles.container}>
        <h2 className={styles.title}>Challenge 08: Decimal to Binary</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Crea un programa se encargue de transformar un
            número decimal a binario sin utilizar funciones propias del lenguaje
            que lo hagan directamente.
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
              changeModalState();
            }}
          >
            <input
              name="decimal"
              placeholder="Enter a decimal number"
              onChange={onChange}
              className={styles.statement__form__input}
            />
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week07"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week09"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </section>
    </Layout>
  );
};

export default Week08;
