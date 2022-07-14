import Text from "./text.styled";
import React from "react";
import Title from "./title.styled";
import {StyledCardRight} from "./styles/CardRight.styled";
import {Button} from "./Button.styled";
import {TotalChargeModel} from "../types/models";
import getSymbolFromCurrency from 'currency-symbol-map'
import {formatMoney} from "../helpers/format";
import Subtitle from "./subtitle.styled";
import {Envelope} from "phosphor-react";
import {MilesAndMore} from "../assets/other";

export default function CardRight({charge}: {charge: TotalChargeModel }) {
    return (
        <StyledCardRight>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Text size={'small'} weight={'bold'} className={'title'}>Earn 500 Miles</Text>
                <img src={MilesAndMore} alt={''} />
            </div>

            <div>
                <div style={{display: 'flex'}}>
                    <Title size={'small'} weight={'semiBold'}>
                        {formatMoney(+charge['@RateTotalAmount'], charge['@CurrencyCode'])}
                    </Title>
                    <Subtitle size={'small'} weight={'regular'} style={{alignSelf: 'flex-end', paddingBottom: 4, marginLeft: 4}}>{' /  day'}</Subtitle>
                </div>

                <Text size={'medium'} weight={'regular'}>
                    Total {getSymbolFromCurrency(charge['@CurrencyCode'])} {charge['@EstimatedTotalAmount']}
                </Text>
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Button fontSize={20}> Select </Button>

                <div className={'bottom__button_container'}>
                    <Envelope size={20} weight={'fill'} style={{marginRight: 4}}/>
                    <Text size={'medium'} weight={'semiBold'}>Email Quote</Text>
                </div>
            </div>
        </StyledCardRight>
    );
}
