import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const pokemonTypes = {
  fire: "fire",
  water: "water",
  grass: "grass",
  electric: "electric",
};

const typeValidator = (pokemonType) => {
  if (
    pokemonType !== pokemonTypes.fire ||
    pokemonType !== pokemonTypes.water ||
    pokemonType !== pokemonTypes.grass ||
    pokemonType !== pokemonTypes.electric
  ) {
    return false;
  }
  return true;
};

const effectivityOfAttack = (attacker, defender) => {
  switch (attacker) {
    case pokemonTypes.fire:
      return defender === pokemonTypes.grass ? 2 : 1;
    case pokemonTypes.water:
      return defender === pokemonTypes.fire ? 2 : 1;
    case pokemonTypes.grass:
      return defender === pokemonTypes.water ? 2 : 1;
    case pokemonTypes.electric:
      return defender === pokemonTypes.water ? 2 : 1;
    default:
      return 1;
  }
};

const Week35 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    attackingPokemon: "",
    defendingPokemon: "",
    pokemonDamage: "",
    pokemonDefense: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !input.attackingPokemon ||
      !input.defendingPokemon ||
      !input.pokemonDamage ||
      !input.pokemonDefense
    ) {
      return setMessage("Please fill all inputs");
    }

    const attackingPokemon = input.attackingPokemon.toLowerCase();
    const defendingPokemon = input.defendingPokemon.toLowerCase();

    if (!typeValidator(attackingPokemon) || !typeValidator(defendingPokemon)) {
      return setMessage("Only fire, water, grass and electric are valid types");
    }

    const damage = parseInt(input.pokemonDamage);
    const defense = parseInt(input.pokemonDefense);

    if (isNaN(damage) || isNaN(defense)) {
      return setMessage("Damage and defense must be numbers");
    }

    const effectiveness = effectivityOfAttack(
      attackingPokemon,
      defendingPokemon
    );
    const damageDealt = damage * effectiveness - defense;

    return setMessage(`Damage dealt: ${damageDealt}`);
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 35: Pokemon Battle</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: Create a program that calculates the damage of an
            attack during a Pokémon battle.
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
                name="attackingPokemon"
                placeholder="Insert attack pokemon"
                onChange={onChange}
                className={styles.input}
              />
              <input
                name="defendingPokemon"
                placeholder="Insert the defending pokemon"
                onChange={onChange}
                className={styles.input}
              />
              <input
                name="pokemonDamage"
                placeholder="Pokemon atack"
                onChange={onChange}
                className={styles.input}
              />
              <input
                name="pokemonDefense"
                placeholder="Pokemon defense"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link="/Challenges/week34" text="Back" />
          <ButtonNextReturn link="/Challenges/week36" text="Next" />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week35;
