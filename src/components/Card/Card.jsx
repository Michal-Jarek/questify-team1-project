import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { convertDayDisplay } from './helperFunctions/dateAndTime/dayConverter';
import { ReactComponent as FireIcon } from './images/fire.svg';
import { ReactComponent as StarIcon } from './images/star.svg';
import { ReactComponent as TrophyIcon } from './images/trophy.svg';
import { ReactComponent as QuestAwardIcon } from './images/award.svg';
import { ReactComponent as ChallengeAwardIcon } from './images/challenge-award.svg';
import { ReactComponent as ArrowIcon } from './images/arrow.svg';
import {
  CardItem,
  CardType,
  Category,
  DatetimeBar,
  DifficultyBar,
  FlippedCard,
  ContinueBox,
  CardContainer,
  TitleDataWrapper
} from "./Card.styled";
import DeleteModal from '../DeleteModal/DeleteModal';

export const Card = ({
  id,
  title,
  difficulty,
  category,
  date,
  time,
  type,
  status,
}) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const toggleIsFlipped = () => {
    if (status === "Complete") {
      return;
    }
    setIsFlipped((current) => !current);
  };

  const convertedDate = convertDayDisplay(date, type);

  const isChallenge = (type) => type === "Challenge";
  const typeIcon = isChallenge(type) ? (
    <TrophyIcon onClick={toggleIsFlipped} />
  ) : (
    <StarIcon onClick={toggleIsFlipped} />
  );
  const awardIcon = isChallenge(type) ? (
    <ChallengeAwardIcon />
  ) : (
    <QuestAwardIcon />
  );

  const shortenedTitle = (() => {
    if (title.length > 18) {
      return `${title.slice(0, 17)}...`;
    } else if (undefined) {
      return console.log("ERROR")
    } 

    return title;
  })();

  return (
    <CardContainer cardType={type}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <CardItem cardType={type}>
          <DifficultyBar cardType={type} difficulty={difficulty}>
            <p>{difficulty}</p>
            {typeIcon}
          </DifficultyBar>
          <TitleDataWrapper cardType={type}>
            {isChallenge(type) && <CardType>{type}</CardType>}
            <h3>{title}</h3>
            <DatetimeBar>
              <p>
                <span>{convertedDate}</span>, <span>{time}</span>
              </p>
            <FireIcon />
            </DatetimeBar>
          </TitleDataWrapper>
          <Category category={category}>{category}</Category>
        </CardItem>
        <FlippedCard>
          <p>
            COMPLETED: <span onClick={toggleIsFlipped}>{shortenedTitle}</span>
          </p>
          {awardIcon}
          <ContinueBox>
            <p>Continue</p>
            <ArrowIcon />
          </ContinueBox>
        </FlippedCard>
      </ReactCardFlip>
      <DeleteModal />
    </CardContainer>
  );
};