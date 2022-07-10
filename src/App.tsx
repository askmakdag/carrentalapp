import React, {useEffect} from 'react';
import {Container} from "./components/styled/Container.styled";
import {Button} from "./components/styled/Button.styled";
import Card from "./components/Card";
import {useDispatch} from "react-redux";
import {useAppSelector} from "./hooks/store-hooks";
import {getTheFeed} from "./store/mainSlice";

function App() {
  const dispatch = useDispatch();
  const {feed} = useAppSelector(s => s.main);

  useEffect(() => {
      // @ts-ignore
      dispatch(getTheFeed());
  }, [])

  const handleClick =()=> {}

  return (
      <Container>
        <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {feed?.[0]?.VehAvailRSCore?.VehVendorAvails?.[0].VehAvails.map((item) => {
            return <Card item={item} />
        })}

        <Button bg={'red'} color={'#fff'} onClick={handleClick}>Tsmsm La</Button>
      </Container>
  );
}

export default App;
