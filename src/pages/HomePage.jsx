import { Container } from 'components/common/Container';
import { Section } from 'components/common/Section';
import { SectionTitle } from 'components/common/SectionTitle';

const HomePage = () => {
  return (
    <Section>
      <Container>
        <SectionTitle title="Welcome to Car Rent App" />
      </Container>
    </Section>
  );
};

export default HomePage;
