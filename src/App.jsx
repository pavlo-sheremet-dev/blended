import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Container, Header, Section, Text } from './components';
import { Gallery, Todos, FormikTab } from './tabs';

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
              <Tab>
                <Text>Formik</Text>
              </Tab>
              <Tab>
                <Text>Gallery</Text>
              </Tab>
            </TabList>
            <TabPanel>
              <FormikTab />
            </TabPanel>
            <TabPanel>
              <Todos />
            </TabPanel>
            <TabPanel>
              <Gallery />
            </TabPanel>
          </Tabs>
        </Container>
      </Section>
    </>
  );
};
