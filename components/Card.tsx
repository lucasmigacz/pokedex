import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { pokemonProps } from "../pages/index";

interface CardProps {
  pokemons: pokemonProps[];
}
const Card = ({ pokemons }: CardProps) => {
  const [idPokemon, setIdPokemon] = useState(Number);
  return (
    <MainContent>
      <Cards>
        {pokemons.map((pokemon, i) => (
          <>
            <Link href={`/pokemon/${i + 1}`}>
              <CardItem key={i}>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    i + 1
                  }.png`}
                  width={200}
                  height={250}
                  alt="image"
                />
                {pokemon.name}
              </CardItem>
            </Link>
          </>
        ))}
      </Cards>
    </MainContent>
  );
};

const MainContent = styled.div``;
const Cards = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;
const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #3f3e3e;
  margin: 10px;
  border-radius: 10px;
  font-size: 1.6em;
  color: #f6f6f6;
  text-transform: capitalize;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    transform: scale(1.03);
  }
`;

export default Card;
