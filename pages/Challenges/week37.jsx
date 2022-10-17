import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const zeldaGames = {
  theAdventureOfLink: 1987,
  aLinkToThePast: 1991,
  linksAwakening: 1993,
  ocarinaOfTime: 1998,
  majorasMask: 2000,
  oracleOfSeasons: 2001,
  fourSwords: 2002,
  windWaker: 2002,
  fourSwordsAdventures: 2004,
  minishCup: 2004,
  twilightPrinces: 2006,
  phantomHourglass: 2007,
  spiritTracks: 2009,
  skywardSword: 2011,
  aLinkBetweenWorlds: 2013,
  triForceHeroes: 2015,
  breathOfTheWild: 2017,
  tearsOfTheKingdom: 2023,
};

const yearsDifference = (game1, game2) => {
  return Math.abs(zeldaGames[game1] - zeldaGames[game2]);
}

const Week37 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    firstGame: "",
    secondGame: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(input);
    if (!input.firstGame || !input.secondGame) {
      return setMessage("Please select two games");
    }

    const years = yearsDifference(input.firstGame, input.secondGame);
    return setMessage(`There are ${years} years difference`);
  };

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
                <option value="" defaultValue>
                  Select an option
                </option>
                <option value="theAdventureOfLink">
                  The Adventure of Link
                </option>
                <option value="aLinkToThePast">A Link to the past</option>
                <option value="linksAwakening">Links Awakening</option>
                <option value="ocarinaOfTime">Ocarina of Time</option>
                <option value="majorasMask">Majora&apos;s Mask</option>
                <option value="oracleOfSeasons">Oracle of Seasons</option>
                <option value="fourSwords">Four Swords</option>
                <option value="windWaker">Wind Waker</option>
                <option value="fourSwordsAdventures">
                  Four Swords Adventures
                </option>
                <option value="minishCup">Minish Cup</option>
                <option value="twilightPrinces">Twilight Princes</option>
                <option value="phantomHourglass">phantomHourglass</option>
                <option value="spiritTracks">Spirit Tracks</option>
                <option value="skywardSword">Skyward Sword</option>
                <option value="aLinkBetweenWorlds">
                  A Link Between Worlds
                </option>
                <option value="triForceHeroes">TriForce Heroes</option>
                <option value="breathOfTheWild">breathOfTheWild</option>
                <option value="tearsOfTheKingdom">Tears of The Kingdom</option>
              </select>
              <select
                name="secondGame"
                onChange={onChange}
                className={styles.select}
              >
                <option value="" defaultValue>
                  Select an option
                </option>
                <option value="theAdventureOfLink">
                  The Adventure of Link
                </option>
                <option value="aLinkToThePast">A Link to the past</option>
                <option value="linksAwakening">Links Awakening</option>
                <option value="ocarinaOfTime">Ocarina of Time</option>
                <option value="majorasMask">Majora&apos;s Mask</option>
                <option value="oracleOfSeasons">Oracle of Seasons</option>
                <option value="fourSwords">Four Swords</option>
                <option value="windWaker">Wind Waker</option>
                <option value="fourSwordsAdventures">
                  Four Swords Adventures
                </option>
                <option value="minishCup">Minish Cup</option>
                <option value="twilightPrinces">Twilight Princes</option>
                <option value="phantomHourglass">phantomHourglass</option>
                <option value="spiritTracks">Spirit Tracks</option>
                <option value="skywardSword">Skyward Sword</option>
                <option value="aLinkBetweenWorlds">
                  A Link Between Worlds
                </option>
                <option value="triForceHeroes">TriForce Heroes</option>
                <option value="breathOfTheWild">breathOfTheWild</option>
                <option value="tearsOfTheKingdom">Tears of The Kingdom</option>
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
