import styled from 'styled-components';

export const Div = styled.div`
  overflow: hidden;
`;

export const GroupTitle = styled.div`
  position: relative;
  display: flex;
  margin-left: 72px;
  cursor: pointer;
  & p {
    margin-bottom: 25px;
    margin-top: 30px;
    font-weight: 300;
    font-size: 15px;
    line-height: 1;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #282828;
  }
  & svg {
    position: absolute;
    top: 36px;
    margin-left: 4px;
  }
  & span {
    position: absolute;
    top: 50px;
    display: block;
    border-top: 3px dashed #b9c3c8;
    width: 100%;
  }
`;