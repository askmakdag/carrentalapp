import React, {useCallback, useEffect, useState} from 'react';
import {Container} from "./components/styles/container.styled";
import {useDispatch} from "react-redux";
import {useAppSelector} from "./hooks/store-hooks";
import {getTheFeed} from "./store/mainSlice";
import Card from "./components/card";
import AlertLine from "./components/alert-line";

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
      if (!cards) {
        // @ts-ignore
        dispatch(getTheFeed());
      }
      generateCards();
  }, [generateCards])

  return (
    <Container style={{paddingTop: 8}}>
        <AlertLine type={'success'} message={'Book today and be confident with our flexible cancellation policy.'} />
        <br />
        {cards}
    </Container>
  );
}

export default App;
