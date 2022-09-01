import type { NextPage } from 'next';

import { Header, Hero } from '../components';
import { Logo } from '../components/common';

const Home: NextPage = () => {
  return (
    <>
      <Header>
        <Logo />
      </Header>

      <Hero bgImage="https://www.meirecortinas.com.br/wp-content/uploads/2021/05/ImageCortinaSala.jpg">
        <h3>aoba 2</h3>
      </Hero>
    </>
  );
};

export default Home;
