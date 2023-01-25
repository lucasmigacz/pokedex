import styled from "styled-components";

// pokemonData: {
//   name: string;
//   weight: number;
//   height: number;
// };

export const pokemon = async ({ idPokemon }: any) => {
  <p>idPokemon</p>;
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${idPokemon}`
  );
  const res = await data.json();
  console.log(res);
  return {
    props: {
      pokemonIndividuals: res,
      pokemonIndividualsId: idPokemon,
    },
  };
};
interface statesProps {
  setCardState: boolean;
  setSecondCardState: boolean;
  idPokemon: string;
  pokemonIndividuals: {};
}
const SecondCard = ({
  setCardState,
  setSecondCardState,
  idPokemon,
  pokemonIndividuals,
}: statesProps) => {
  return (
    <>
      <MainContent
        onClick={() => {
          setCardState((prev: boolean) => !prev);
          setSecondCardState((prev: boolean) => !prev);
        }}
      ></MainContent>
    </>
  );
};

const MainContent = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  background: #b0db13;
  max-width: 500px;
  width: 100%;
  height: 900px;
  padding: 50px;
  margin: 0 auto;
  align-items: center;
  font-size: 1.6em;
  text-transform: capitalize;
  margin-top: 50px;
  border-radius: 40px;
  text-align: center;
`;

export default SecondCard;
