import Head from "next/head";
import Card from "../components/Card";

export interface pokemonProps {
  name: string;
  url: string;
}

export const getStaticProps = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const data = await fetch(`${api}/?limit=${maxPokemons}`);
  const res = await data.json();
  return {
    props: {
      pokemons: res.results,
      maxPokemons,
    },
  };
};

interface HomeProps {
  pokemons: pokemonProps[];
}

export default function Home({ pokemons }: HomeProps) {
  return (
    <>
      <Head>
        <title>PokeNext</title>
      </Head>
      <Card pokemons={pokemons} />
    </>
  );
}
