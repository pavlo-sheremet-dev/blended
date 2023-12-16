import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Container, Header, Section, Text } from './components';
import { Todos } from './tabs';

export const App = () => {
  return (
    <>
      <Header />

      <Section>
        <Container>
          <Tabs>
            <TabList>
              <Tab>
                <Text>Todos</Text>
              </Tab>
            </TabList>

            <TabPanel>
              <Todos />
            </TabPanel>
          </Tabs>
        </Container>
      </Section>
    </>
  );
};
