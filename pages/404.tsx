import Link from "next/link";
import styled from "styled-components";

const pagenotfound = () => {
  return (
    <>
      <MainNotFound>
        <TitleNotFound>Ops! Nada por aqui</TitleNotFound>
        <Link href="/">
          <TitleGoHome>Go back home</TitleGoHome>
        </Link>
      </MainNotFound>
    </>
  );
};

const MainNotFound = styled.div`
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleNotFound = styled.h1`
  font-size: 4em;
  color: white;
`;

const TitleGoHome = styled.h1`
  font-size: 2em;
  color: black !important;
  font-weight: bold;
  transition: 0.2s;
  :hover {
    color: #1d1c1c;
    transform: scale(1.02);
  }
`;

export default pagenotfound;
