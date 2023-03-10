import styled from "styled-components";
import { ReactComponent as CancelIcon } from "../images/cancel.svg";

const categoryBgColor = (category) => {
  switch (category.toUpperCase()) {
    case "WORK":
      return "#D3F6CE";

    case "FAMILY":
      return "#FFE6D3";

    case "HEALTH":
      return "#CDF7FF";

    case "LEARNING":
      return "#FFF6C0";

    case "LEISURE":
      return "#F8D2FF";

    case "STUFF":
      return "#B9C3C8";

    default:
      return "transparent";
  }
};

export const FooterCardBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  & svg {
    margin-right: 7px;
    @media screen and (max-width: 768px) {
      height: 15px;
      width: 15px;
    }
  }
  & svg:nth-child(3),
  svg:nth-child(5) {
    cursor: pointer;
  }
  & svg:nth-child(5) {
    @media screen and (max-width: 768px) {
      width: 20px;
    }
  }
`;
export const CategorySelect = styled.div`
  display: flex;
  align-items: center;
  max-width: ${(props) => (props.category === "Learning" ? "130px" : "120px")};
  width: 100%;
  padding: 10px 0 11px 21px;
  border-radius: 0px 25px 25px 0px;
  font-size: 14px;
  text-transform: uppercase;
  background-color: ${(props) => categoryBgColor(props.category)};
  cursor: pointer;
  & svg {
    margin-left: 7px;
    width: 8px;
    height: 4px;
  }
  @media screen and (min-width: 768px) {
    max-width: ${(props) => (props.category === "Learning" ? "100px" : "88px")};
    padding: 8px 0 6px 21px;
    border-radius: 0px 15px 15px 0px;
    font-size: 11px;
  }
`;
export const StartSpan = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0.02em;
  color: #00d7ff;
  cursor: pointer;
`;
export const CancelIconWrapper = styled(CancelIcon)`
  cursor: pointer;
`;