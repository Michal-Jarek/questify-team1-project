// import { useRef, useState } from "react";
// import { ReactComponent as FireIcon } from './images/fire.svg';
import { ReactComponent as StarIcon } from './images/star.svg';
import { ReactComponent as TrophyIcon } from './images/trophy.svg';
// import { ReactComponent as QuestAwardIcon } from './images/award.svg';
// import { ReactComponent as ArrowIcon } from './images/arrow,svg';
import style from './Card.module.css';
import DeleteModal from '../DeleteModal/DeleteModal';

export const Card = ({
    isActive,
    title,
    task,
    isChallenge,
    difficulty,
    group,
}) => {

    // const [isActive, setIsActive] = useState(false);
    
    // const shortenedTitle = (() => {
    //     if (title.length > 18) {
    //         return `${title.slice(0, 17)}...`;
    //     }
    // })();

    // const handleSumbit = (e) => {
    //     e.preventDefault();
    // };

    // const handleUpdate = (e) => {
    //     e.preventDefault();
    // };

    // const handleClick = () => {
    //     !isActive ? setIsActive(true) : setIsActive(false);
    // };

    return (
        <div className={isChallenge ? style.challengeContainer : style.cardContainer}>
         <div className={style.difficultyContainer}>
            <div className={style.difficultyLevel}>
               <div className={style[difficulty]}> </div>
               <h3 className={style.levelName}>{difficulty}</h3>
            </div>
            {isChallenge ? <TrophyIcon /> : <StarIcon />}
         </div>
         {isChallenge && <h3 className={style.isChallenge}>Challenge</h3>}
         <h2 className={isChallenge ? style.chalengeName : style.taskName}>{title}</h2>
         <div className={style[group]}>{group}</div>
         <DeleteModal />
      </div>
    );
};