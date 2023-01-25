import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import SecondCard from "../../components/SecondCard";

export const getServerSideProps = async (props: any) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${props.query.pokemonId}`
  );
  const data = await res.json();
  return {
    props: {
      pokemon: {
        idPokemon: props.query.pokemonId,
        pokemonData: data,
      },
    },
  };
};

interface pokemonProps {
  pokemon: {
    idPokemon: string;
    pokemonData: {
      name: string;
      weight: number;
      height: number;
    };
  };
}

const individualPokemon = ({
  pokemon: { idPokemon, pokemonData },
}: pokemonProps) => {
  const [cardState, setCardState] = useState(true);
  const [secondCardState, setSecondCardState] = useState(false);
  return (
    <>
      {cardState ? (
        <MainContent
          onClick={() => {
            setSecondCardState((prev) => !prev);
            setCardState((prev) => !prev);
          }}
        >
          <>
            <ImageContainer initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`}
                width={400}
                height={400}
                alt={pokemonData.name}
              />
            </ImageContainer>
            <TitleName>{pokemonData.name}</TitleName>
            <TitleCard>peso:</TitleCard>
            <ParagraphCard>
              {Math.floor(pokemonData.weight / 2.2046)}
            </ParagraphCard>
            <TitleCard>Kg Altura:</TitleCard>{" "}
            <ParagraphCard>{pokemonData.height * 2.54}</ParagraphCard>
          </>
        </MainContent>
      ) : secondCardState ? (
        <SecondCard
          setCardState={setCardState}
          setSecondCardState={setSecondCardState}
          idPokemon={idPokemon}
        />
      ) : null}
    </>
  );
};

export const MainContent = styled(motion.div)`
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  background: #5627ad;
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

export const ImageContainer = styled(motion.div)`
  cursor: default;
  background: #4f20a7;
  border-radius: 100px;
  margin-top: 30px;
`;

export const TitleName = styled.h1`
  color: #1a102b;
  font-size: 3em;
`;

export const TitleCard = styled.h2`
  letter-spacing: 4px;
  cursor: default;
  color: #290761;
`;

export const ParagraphCard = styled.p`
  cursor: default;
  color: #110229;
`;

export default individualPokemon;
