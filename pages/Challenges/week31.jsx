import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

function Week31() {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    year: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const year = parseInt(input.year, 10);

    if (!year) {
      return setMessage("Please insert a valid year");
    }

    let currentYear = year + 1;
    let yearCount = 0;

    while (yearCount < 30) {
      if (
        currentYear % 4 == 0 &&
        (currentYear % 100 != 0 || currentYear % 400 == 0)
      ) {
        console.log(currentYear);
        yearCount += 1;
      }
      currentYear += 1;
    }

    return setMessage("The result is on console");
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 31: Leap years</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Create a function that prints the next 30 leap
            years after a given one.
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
                name="year"
                placeholder="Insert a year"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link="/Challenges/week30" text="Back" />
          <ButtonNextReturn link="/" text="Next" />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
}

export default Week31;
