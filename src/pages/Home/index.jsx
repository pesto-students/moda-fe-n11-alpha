import React from 'react';
import Categories from '../../components/Categories';
import PopularProductsList from '../../components/PopularProductsList';
import Carousal from '../../components/Carousal';
import withNavbarFooterHOC from '../../hoc/withNavbarFooterHOC';
import { Heading } from './styles';
import useHomeDataHook from './useHomeDataHook';
import { Spinner } from '../../components';
const Home = () => {
  const [show] = useHomeDataHook();
  if (show) {
    return (
      <>
        <Carousal />
        <Heading>Popular Categories</Heading>
        <Categories />
        <Heading>Popular Products</Heading>
        <PopularProductsList />
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default withNavbarFooterHOC(Home);
