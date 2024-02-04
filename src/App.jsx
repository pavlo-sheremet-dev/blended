import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Section, Container } from 'components';
import { Photos } from 'tabs/Photos';
import { Todos } from 'tabs/Todos';

export const App = () => {
  return (
    <Section>
      <Container>
        <Tabs>
          <TabList>
            <Tab>Photos</Tab>
            <Tab>Todos</Tab>
          </TabList>

          <TabPanel>
            <Photos />
          </TabPanel>
          <TabPanel>
            <Todos />
          </TabPanel>
        </Tabs>
      </Container>
    </Section>
  );
};
