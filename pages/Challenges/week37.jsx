import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week37 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    kindRace: "",
    evilRace: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Challenge 37: The realeases of &quot;The Legend of Zelda&quot;
        </h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: Announcement: A new &quot;The Legend of
            Zelda&quot; has been announced! It will be called &quot;Tears of the
            Kingdom&quot; and will be released on May 12, 2023.
          </p>
          <p className={styles.statement__p}>
            Create a program that calculates how many years and days there are
            between 2 Zelda games that you select.
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
              changeModalState();
            }}
          >
            <div className={styles.statement__form}>
              <select
                name="firstGame"
                onChange={onChange}
                className={styles.select}
              >
                <option value="triangle">name 1</option>
                <option value="square">name 2</option>
                <option value="rectangle">name 3</option>
              </select>
              <select
                name="secondGame"
                onChange={onChange}
                className={styles.select}
              >
                <option value="triangle">name 1</option>
                <option value="square">name 2</option>
                <option value="rectangle">name 3</option>
              </select>
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link="/Challenges/week36" text="Back" />
          <ButtonNextReturn link="/" text="Next" />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week37;
