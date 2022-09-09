import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week17 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    runner: "",
    track: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const runnerArray = input.runner.toLocaleLowerCase().split(" ");
    const trackArray = input.track.split("");
    const result = [];

    if (runnerArray.length != trackArray.length) {
      return setMessage(
        "The runner instructions has to be the same lenght of the track"
      );
    }

    for (let i = 0; i < runnerArray.length; i++) {
      switch (runnerArray[i]) {
        case "run":
          if (trackArray[i] == "_") {
            result.push("pass");
          } else {
            result.push("crash");
          }
          break;
        case "jump":
          if (trackArray[i] == "|") {
            result.push("pass");
          } else {
            result.push("crash");
          }
      }

      if (result.indexOf("crash") != -1) {
        return setMessage("The runner did not pass the race");
      }

      return setMessage("The runner overcame the race");
    }
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 17: Obstacle race</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
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
                name="runner"
                placeholder="Insert the runner path"
                onChange={onChange}
                className={styles.input}
              ></input>
              <input
                name="track"
                placeholder="Insert the pattern of the track"
                onChange={onChange}
                className={styles.input}
              ></input>
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week16"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week18"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week17;
