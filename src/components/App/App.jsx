import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import uncomingEvents from 'uncoming-events.json';
import { Container } from 'components/App/App.styled';

export const App = () => {
  return (
    <Container>
      <PageTitle text="24th century " />
      <EventBoard events={uncomingEvents} />
    </Container>
  );
};
