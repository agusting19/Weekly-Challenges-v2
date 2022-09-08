import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week18 = () => {
  // const [showModal, setShowModal] = useState(false);
  // const [message, setMessage] = useState("");
  // const [input, setInput] = useState({
  //   values: "",
  // });

  // const onChange = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = () => {};

  // const changeModalState = () => {
  //   setShowModal(!showModal);
  // };

  return (
    <Layout>
      <div className={styles.container}>
        {/* <h2 className={styles.title}>Challenge 18: tic tac toe</h2> */}
        <div className={styles.statement}>
          {/* <p className={styles.statement__p}>Difficulty: Hard</p>
          <p className={styles.statement__p}>
            Problem statement: Create a function that evaluates if an athlete
            has successfully passed a obstacle race. The function will receive
            two parameters:
          </p>
          <ul className={styles.statement__ul}>
            <li>
              An array that can only contain String with the words
              &quot;run&quot; or &quot;jump&quot;.
            </li>
            <li>
              A String that represents the track and can only contain
              &quot;_&quot; (ground) or &quot;|&quot; (fence)
            </li>
          </ul>
          <p className={styles.statement__p}>
            The function will print how the race has finished. To do this you
            have to make the correct option in each section of the track.
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
                name="values1"
                placeholder={`\xa0\xa0|\xa0\xa0|\xa0\xa0`}
                maxLength="6"
                onChange={onChange}
                className={styles.statement__form__input}
              />
            </div>
            <ButtonSolution />
          </form> */}
          <h3>
            This challenge is broken, it would be uploaded as soon as we fix it
          </h3>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week17"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week19"} text={"Next"} />
        </div>
        {/* <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal> */}
      </div>
    </Layout>
  );
};

export default Week18;
