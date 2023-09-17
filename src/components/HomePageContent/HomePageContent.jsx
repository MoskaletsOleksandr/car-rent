import {
  HomePageButtonWrapper,
  HomePageLink,
  HomePageText,
  HomePageTitle,
  HomePageWrapper,
} from './HomePageContent.styles';

export const HomePageContent = () => {
  return (
    <HomePageWrapper>
      <HomePageTitle>Discover Your Dream Car</HomePageTitle>
      <HomePageText>
        Car rental has become increasingly popular over the years, offering
        people the flexibility and convenience of driving a vehicle without the
        commitments of ownership. Whether you need a car for a weekend getaway,
        a business trip, or simply to explore a new city, car rental services
        have you covered.
      </HomePageText>
      <HomePageText>
        With a wide range of car options to choose from, you can select the
        perfect vehicle to suit your needs and preferences. From compact cars
        for city adventures to spacious SUVs for family road trips, car rental
        platforms provide a variety of choices.
      </HomePageText>
      <HomePageText>
        Renting a car also offers the advantage of avoiding the wear and tear on
        your own vehicle, making it an ideal choice for long journeys. Plus,
        it's a cost-effective solution for occasional drivers who don't want the
        ongoing expenses of car ownership.
      </HomePageText>
      <HomePageButtonWrapper>
        <HomePageLink to="/catalog">Explore Cars</HomePageLink>
        <HomePageLink to="/favorites">My Favourites</HomePageLink>
      </HomePageButtonWrapper>
    </HomePageWrapper>
  );
};
