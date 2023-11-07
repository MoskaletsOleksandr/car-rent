import React from 'react';
import { Section } from 'components/common/Section';
import { SectionTitle } from 'components/common/SectionTitle';
import { HomePageContent } from 'components/HomePageContent';

const HomePage = () => {
  return (
    <Section>
      <SectionTitle title="Welcome to Car Rent App" />
      <HomePageContent />
    </Section>
  );
};

export default HomePage;
