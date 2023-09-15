import { CarsList } from 'components/CarList';
import { SectionTitle } from 'components/common/SectionTitle';

const CarCatalog = () => {
  return (
    <>
      <SectionTitle title="Find a car with this Car Catalog" />
      <CarsList />
    </>
  );
};

export default CarCatalog;
