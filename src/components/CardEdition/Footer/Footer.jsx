import React from 'react';
import { ReactComponent as ArrowIcon } from '../images/arrow.svg';
import { ReactComponent as LineIcon } from '../images/line.svg';
import { ReactComponent as SaveIcon } from '../images/save.svg';
import { ReactComponent as DoneIcon } from '../images/done.svg'
import {
    FooterCardBar,
    CategorySelect,
    StartWrapper,
    StartSpan,
    CancelIconWrapper
} from './Footer.styled'

export const Footer = ({
    action,
    category,
    onClick,
    onCancelClick,
    onStartClick,
}) => {
    return (
        <FooterCardBar>
            <CategorySelect
                category={category}
                onClick={onClick}
            >
                <p>{category}</p>
                <ArrowIcon />
            </CategorySelect>
            <StartWrapper>
                {action === 'Edit' && <SaveIcon />}
                <LineIcon />
                <CancelIconWrapper onClick={onCancelClick} />
                <LineIcon />
                {action === 'Edit' ? (
                    <DoneIcon onClick={onStartClick} />
                ) : <StartSpan onClick={onStartClick}>START</StartSpan>}
            </StartWrapper>
        </FooterCardBar>
    );
};