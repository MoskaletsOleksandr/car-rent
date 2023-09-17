import React from 'react';
import { Container } from 'components/common/Container';
import { Section } from 'components/common/Section';
import { SectionTitle } from 'components/common/SectionTitle';
import { HomePageContent } from 'components/HomePageContent';

const HomePage = () => {
  return (
    <Section>
      <Container>
        <SectionTitle title="Welcome to Car Rent App" />
        <HomePageContent />
      </Container>
    </Section>
  );
};

export default HomePage;
