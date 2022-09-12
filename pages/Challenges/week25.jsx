import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const RockPaperScissors = (player1, player2, result) => {
  if (player1 == "R" && player2 == "S") {
    return (result[0] += 1);
  }

  if (player1 == "P" && player2 == "R") {
    return (result[0] += 1);
  }

  if (player1 == "S" && player2 == "P") {
    return (result[0] += 1);
  }

  return (result[1] += 1);
};

const Week25 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState();
  const [input, setInput] = useState({
    plays: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const games = input.plays.replace(/[^\w]/g, "").toUpperCase().split("");

    if (games.length == 0) {
      return setMessage("Please enter a value");
    }

    if (games.length % 2 != 0) {
      return setMessage(
        "Please enter values in the next format (P1, P2), (P1, P2)"
      );
    }

    let result = [0, 0];
    let i = 0;
    while (i < games.length) {
      if (
        (games[i] != "R" && games[i] != "P" && games[i] != "S") ||
        (games[i + 1] != "R" && games[i + 1] != "P" && games[i + 1] != "S")
      ) {
        break;
      }
      RockPaperScissors(games[i], games[i + 1], result);
      i += 2;
    }

    if (i < games.length) {
      return setMessage(
        "Please enter values in the next format (P1, P2), (P1, P2)"
      );
    }

    if (result[0] > result[1]) {
      return setMessage("Winner: Player 1");
    }

    return setMessage("Winner: Player 2");
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 25: Rock paper scissors</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: Create a program that calculates who wins the
            most games at rock, paper, scissors.
          </p>
          <ul className={styles.statement__ul}>
            <li>
              The result can be: &quot;Player 1&quot;, &quot;Player 2&quot;,
              &quot;Tie&quot;.
            </li>
            <li>
              The pair can contain combinations of &quot;R&quot; (rock),
              &quot;P&quot; (paper) or &quot;S&quot; (scissors).
            </li>
          </ul>
          <p className={styles.statement__p}>
            Input example: (R,S), (S,R), (P,S) - Winner: Player 2
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
                name="plays"
                placeholder="Players moves (P1, P2), (P1, P2)"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week24"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week26"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week25;
