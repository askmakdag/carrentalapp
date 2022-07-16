import Text from "../text.styled";
import React from "react";
import {StyledCardMiddle} from "../styles/card/card-middle.styled";
import {Check} from "phosphor-react";

export default function CardMiddle() {
    return (
        <StyledCardMiddle>
            <div>
                <Text size={'small'} weight={'regular'} className={'title'}>Pre-Registration available</Text>

                <div className={'body'}>
                    <Text size={'medium'} weight={'semiBold'} className={'body__title'}>Included for Free</Text>
                    <div className={'body__body'}>
                        <AttributeText text={'Collision Damage Waiver'}/>
                        <AttributeText text={'Theft Protection'}/>
                        <AttributeText text={'Third Party Protection'}/>
                        <AttributeText text={'Cancellation'}/>
                        <AttributeText text={'Amendments'}/>
                    </div>
                </div>
            </div>


            <div className={'bottom'}>
                <Text size={'medium'} weight={'semiBold'}>Important Information</Text>
            </div>
        </StyledCardMiddle>
    );
}

export const AttributeText = ({text}: {text: string}) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', paddingLeft: 2}}>
            <Check size={14} weight={'bold'} color={'#157F41'} />
            <Text size={'small'} weight={'large'} className={'body__body__attribute'}>{text}</Text>
        </div>
    );
}
