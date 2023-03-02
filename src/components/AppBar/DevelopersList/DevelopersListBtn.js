import React, {useState} from "react";
import icons from "../../../assests/icons/sprite.svg";
import { DevelopersBtn, DevelopersSvg } from "./DevelopersListBtn.styled";
import { DevelopersListWrapper, DeleteMenu, CloseBtn, SvgClose, GithubBtn, SvgGithub } from "./DevelopersListBtn.styled";
import { useCallback, useEffect } from "react";


export const DevelopersListBtn = () => {

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setIsOpen(false)
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
// eslint-disable-next-line
  }, []);
 
  const [isOpen, setIsOpen] = useState(false)


  return(
    <div>
    <div title="Developers List">
      <DevelopersBtn type="button" onClick={() => setIsOpen(!isOpen)}>
        <DevelopersSvg width="46" height="46">
          <use xlinkHref={`${icons}#people`} />
        </DevelopersSvg>
      </DevelopersBtn>
      </div>
      <DevelopersListWrapper style={{display: isOpen ? "flex" : "none"}}>
      <DeleteMenu>
      <CloseBtn type='button' onClick={() => setIsOpen(!isOpen)}>
					<SvgClose width='36' height='36'>
						<use xlinkHref={`${icons}#close-button`} />
					</SvgClose>
				</CloseBtn>
        <p>Developers List</p>
        <div>
        <ul>
          <li>
            <GithubBtn>
            Michał Jarek
            <a href="https://github.com/Michal-Jarek" target="_blank" rel="noreferrer">
					<SvgGithub width='20' height='20'>
						<use xlinkHref={`${icons}#iconmonstr-github`} />
					</SvgGithub>
          </a>
				</GithubBtn>
            </li>
          <li>
          <GithubBtn>
          Dominika Sosnowska
          <a href="https://github.com/Dominika1708" target="_blank" rel="noreferrer">
					<SvgGithub width='20' height='20'>
						<use xlinkHref={`${icons}#iconmonstr-github`} />
					</SvgGithub>
          </a>
				</GithubBtn>
          </li>
          <li>
          <GithubBtn>
          Daria Ośka-Ossowska
					<a href="https://github.com/DariaOskaOssowska" target="_blank"rel="noreferrer">
					<SvgGithub width='20' height='20'>
						<use xlinkHref={`${icons}#iconmonstr-github`} />
					</SvgGithub>
          </a>
				</GithubBtn>
          </li>
          <li>
          <GithubBtn>
          Piotr Zdebski
					<a href="https://github.com/piotrekzd" target="_blank" rel="noreferrer">
					<SvgGithub width='20' height='20'>
						<use xlinkHref={`${icons}#iconmonstr-github`} />
					</SvgGithub>
          </a>
				</GithubBtn>
          </li>
          <li>
          <GithubBtn>
          Marek Kalus
					<a href="https://github.com/Marektg" target="_blank" rel="noreferrer">
					<SvgGithub width='20' height='20'>
						<use xlinkHref={`${icons}#iconmonstr-github`} />
					</SvgGithub>
          </a>
				</GithubBtn>
          </li>
          <li>
          <GithubBtn>
          Paweł Kłodowski
					<a href="https://github.com/AngryFace97" target="_blank" rel="noreferrer">
					<SvgGithub width='20' height='20'>
						<use xlinkHref={`${icons}#iconmonstr-github`} />
					</SvgGithub>
          </a>
				</GithubBtn>
          </li>
        </ul>
        </div>
      
      </DeleteMenu>
    </DevelopersListWrapper>
    </div>
  );
};
