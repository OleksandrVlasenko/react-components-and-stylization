import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import uncomingEvents from 'uncoming-events.json';

export const App = () => {
  return (
    <>
      <PageTitle text="24th century " />
      <EventBoard events={uncomingEvents} />
    </>
  );
};
