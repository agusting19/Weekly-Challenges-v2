import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week41 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    voltage: "",
    current: "",
    resistance: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const current = parseFloat(input.current);
    const resistance = parseFloat(input.resistance);
    const voltage = parseFloat(input.voltage);
    let valuesFilled = 0;
    let result = "";

    if (current) {
      valuesFilled += 1;
    }

    if (resistance) {
      valuesFilled += 1;
    }

    if (voltage) {
      valuesFilled += 1;
    }

    if (valuesFilled !== 2) {
      return setMessage("Please insert 2 values (leave one unfilled)");
    }

    if (current && resistance) {
      result = current * resistance;
      return setMessage(`The value of the voltage is: ${result}`);
    }

    if (current && voltage) {
      result = voltage / current;
      return setMessage(`The value of the resistance is: ${result}`);
    }

    if (resistance && voltage) {
      result = voltage / resistance;
      return setMessage(`The value of the current is: ${result}`);
    }
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 41: Ohm&apos;s law</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Create a function that calculates the value of
            the missing parameter corresponding to Ohm&apos;s law.
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
                name="voltage"
                placeholder="Insert the voltage"
                onChange={onChange}
                className={styles.input}
              />
              <input
                name="resistance"
                placeholder="Insert the resistance"
                onChange={onChange}
                className={styles.input}
              />
              <input
                name="current"
                placeholder="Insert the electric current"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link="/Challenges/week40" text="Back" />
          <ButtonNextReturn link="/" text="Next" />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week41;
