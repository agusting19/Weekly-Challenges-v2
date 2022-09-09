import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week19 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    time: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let result;
    let dd = input.time.substring(0, 2);
    let hh = input.time.substring(3, 5);
    let mm = input.time.substring(6, 8);
    let ss = input.time.substring(9);

    if (isNaN(dd) || isNaN(hh) || isNaN(mm) || isNaN(ss)) {
      return setMessage("Only accept numbers");
    }

    if (mm > 60 || ss > 60) {
      return setMessage("Minutes and seconds has to be lower than 60");
    }

    // everything is passed to milliseconds and added
    dd = dd * 24 * 60 * 60 * 1000;
    hh = hh * 60 * 60 * 1000;
    mm = mm * 60 * 1000;
    ss = ss * 1000;
    result = dd + hh + mm + ss;
    return setMessage(`The time converted is: ${result} miliseconds`);
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 19: Time converter</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Create a function that receives days, hours,
            minutes and seconds (as integers) and returns its result in
            milliseconds
          </p>
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
                name="time"
                placeholder="Insert in format dd:hh:mm:ss"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week18"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week20"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week19;
