import React, {useCallback, useEffect, useState} from 'react';
import {Container} from "./components/styled/Container.styled";
import Card from "./components/Card";
import {useDispatch} from "react-redux";
import {useAppSelector} from "./hooks/store-hooks";
import {getTheFeed} from "./store/mainSlice";
import StyledText from "./components/styled/Text.styled";

function App() {
  const dispatch = useDispatch();
  const {feed} = useAppSelector(s => s.main);
  const [cards, setCards] = useState<JSX.Element[]>();

  const generateCards = useCallback(() => {
      const vehicles: JSX.Element[] = [];
      feed?.forEach((rentalFeed) => {
         rentalFeed.VehAvailRSCore.VehVendorAvails.forEach((vehVendorAvail) => {
             vehVendorAvail.VehAvails.forEach((vehicle) => {
                 vehicles.push(
                     <Card
                         item={vehicle}
                         vendor={vehVendorAvail.Vendor}
                         vehRentalCore={rentalFeed.VehAvailRSCore.VehRentalCore}
                     />
                 );
             });
         });
      });
      setCards(vehicles);
  }, [feed]);

  useEffect(() => {
      // @ts-ignore
      dispatch(getTheFeed());
      generateCards();
  }, [generateCards, dispatch])

  return (
    <Container>
        <StyledText variant={"subtitleMedium"}>sdfsfs</StyledText>
        {cards}
    </Container>
  );
}

export default App;
