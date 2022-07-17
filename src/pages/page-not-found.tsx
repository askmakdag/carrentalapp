import React, {useEffect} from "react";
import AlertLine from "../components/alert-line";
import {Container} from "../components/styles/container.styled";
import lottie from "lottie-web";
import {Lottie404} from "../assets";

export default function PageNotFound() {

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#not-found"),
            animationData: Lottie404,
        });
    }, []);

    return (
        <Container>
            <AlertLine type={'error'} message={'Page Not Found!'} />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div id="not-found" style={{ width: '40%' }} />
            </div>
        </Container>
    )
}
