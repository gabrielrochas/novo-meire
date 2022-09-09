import type { NextPage } from 'next';

import { Header, Hero } from '../components';
import { Container, Logo, Section } from '../components/common';
import { WidgetOne } from '../components/common/Widgets/WidgetOne';
import { theme } from '../styles/theme';

const Home: NextPage = () => {
  return (
    <>
      <Header>
        <Logo />
      </Header>

      <Hero bgImage="https://www.meirecortinas.com.br/wp-content/uploads/2021/05/ImageCortinaSala.jpg">
        <Container>
          <>
            <div
              style={{
                margin: '8px',
                width: '50%',
                minWidth: '370px',
                backgroundColor: 'red',
              }}
            >
              hero text
            </div>
            <div
              style={{
                margin: '8px',
                width: '50%',
                minWidth: '370px',
                backgroundColor: 'blue',
              }}
            >
              form
            </div>
          </>
        </Container>
      </Hero>

      <Section height="100%">
        <Container containerPadding="16px">
          <>
            <WidgetOne
              bodyContent="body content 1"
              icon="icon"
              headerText="header text 1"
            />
            <WidgetOne
              bodyContent="body content 2"
              icon="icon"
              headerText="header text 2"
            />
            <WidgetOne
              bodyContent="body content 3"
              icon="icon"
              headerText="header text 3"
            />
          </>
        </Container>
      </Section>

      <Section bgColor={theme.colors['primary']} height="100%">
        <Container containerPadding="16px">
          <div style={{ color: '#fff', display: 'flex' }}>
            <div style={{ width: '50%' }}>
              <h2>Benefícios</h2>
              <div style={{ margin: '14px 0' }}>
                <span
                  style={{
                    display: 'block',
                    textTransform: 'uppercase',
                    textDecoration: 'underline',
                    marginBottom: '4px',
                  }}
                >
                  Privacidade
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  laboriosam nihil excepturi saepe voluptatum, perspiciatis
                  soluta libero est, accusantium veniam, corrupti quaerat. Est
                  id iure laboriosam exercitationem harum ad perferendis?
                </p>
              </div>
              <div style={{ margin: '14px 0' }}>
                <span
                  style={{
                    display: 'block',
                    textTransform: 'uppercase',
                    textDecoration: 'underline',
                    marginBottom: '4px',
                  }}
                >
                  Proteção
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  laboriosam nihil excepturi saepe voluptatum, perspiciatis
                  soluta libero est, accusantium veniam, corrupti quaerat. Est
                  id iure laboriosam exercitationem harum ad perferendis?
                </p>
              </div>
              <div style={{ margin: '14px 0' }}>
                <span
                  style={{
                    display: 'block',
                    textTransform: 'uppercase',
                    textDecoration: 'underline',
                    marginBottom: '4px',
                  }}
                >
                  Segurança
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  laboriosam nihil excepturi saepe voluptatum, perspiciatis
                  soluta libero est, accusantium veniam, corrupti quaerat. Est
                  id iure laboriosam exercitationem harum ad perferendis?
                </p>
              </div>

              <button>Solicitar</button>
            </div>
            <div>imagem</div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Home;
