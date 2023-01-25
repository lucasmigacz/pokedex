import Image from "next/image";
import charizard from "../public/charizard.png";
import styled from "styled-components";
import { motion } from "framer-motion";

const About = () => {
  return (
    <MainAbout>
      <TitleAbout>About the Project</TitleAbout>

      <TextAbout>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum
        tempor maximus. Etiam tristique lorem sed justo venenatis, mattis
        accumsan enim lacinia. Proin in dictum neque. Phasellus hendrerit, sem
        sed bibendum mattis, nisi lectus dapibus risus, in luctus mi nibh ut
        elit. Integer malesuada augue nisi, id ornare magna laoreet vitae.
        Aliquam feugiat nisl eu leo laoreet, vel rhoncus metus pretium. Mauris
        gravida velit non nisl blandit rutrum. Morbi eget tincidunt nibh. Nulla
        vehicula ultrices arcu. Cras volutpat accumsan velit vel porta. Donec
        iaculis vel leo quis pellentesque. Maecenas pharetra, lacus non
        malesuada imperdiet, lacus mauris aliquam orci, et commodo justo erat
        eget est.
      </TextAbout>
      <ImageDivAnimate
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Image src={charizard} alt="charizard" />
      </ImageDivAnimate>
    </MainAbout>
  );
};

const ImageDivAnimate = styled(motion.div)``;

const TextAbout = styled.p`
  font-size: 1.2em;
`;
const TitleAbout = styled.h1`
  color: #181616;
  margin: 5rem 0 2rem 0;
`;
const MainAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

export default About;
