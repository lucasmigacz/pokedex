import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

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

// make an swiper

const individualPokemon = ({
  pokemon: { idPokemon, pokemonData },
}: pokemonProps) => {
  return (
    <MainContent>
      <>
        <ImageContainer initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`}
            width={500}
            height={500}
            alt={pokemonData.name}
          />
        </ImageContainer>
        <TitleCard>nome:</TitleCard> {pokemonData.name}
        <TitleCard>peso:</TitleCard> {Math.floor(pokemonData.weight / 2.2046)}{" "}
        <TitleCard>Kg Altura:</TitleCard> {pokemonData.height * 2.54}
      </>
    </MainContent>
  );
};

export const MainContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: #5627ad;
  max-width: 35%;
  padding: 50px;
  margin: 0 auto;
  align-items: center;
  font-size: 1.6em;
  text-transform: capitalize;
  margin-top: 50px;
  border-radius: 40px;
`;

export const ImageContainer = styled(motion.div)`
  background: #4f20a7;
  border-radius: 100px;
  margin-top: 30px;
`;

export const TitleCard = styled.h1`
  letter-spacing: 4px;
  color: #290761;
`;

export default individualPokemon;
