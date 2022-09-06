import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const factorialize = (num) => {
  if (num == 0) return 1;

  return num * factorialize(num - 1);
};

const Week13 = () => {
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

    if (input.number < 0)
      return setMessage("The input has to be a natural number");

    if (input.number == 0) return setMessage("The factorial of 0 is: 1");

    const result = factorialize(input.number);
    return setMessage(`The factorial of ${input.number} is: ${result}`);
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 13: Recursive factorial</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Write a function that computes and returns the
            factorial of a given number recursively.
          </p>
          <form
            className={styles.form}
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
              className={styles.statement__form__input}
            />
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week12"} text={"Back"} />
          <ButtonNextReturn link={"/"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week13;

// * Reto #13
// * FACTORIAL RECURSIVO
// * Fecha publicación enunciado: 28/03/22
// * Fecha publicación resolución: 04/04/22
// * Dificultad: FÁCIL
// *
// * Enunciado: Escribe una función que calcule y retorne el factorial de un número dado de forma recursiva.
