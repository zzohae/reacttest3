import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.version === 'v2' ? '4px' : '0')};
  background-color: ${(props) => props.bgColor || '#214AEE'};
  color: ${(props) => (props.bgColor === '#fff' ? '#214AEE' : '#fff')};
  padding: 10px 30px;
  height: 40px;
  border: 3px solid;
  border-color: ${(props) =>
    props.version === 'v2'
      ? '#FFEA7D'
      : props.version === 'v3'
      ? '#fff'
      : '#214AEE'};
  transition-property: color, border-color, background-color;
  word-break: keep-all;
  white-space: nowrap;
  border-radius: 30px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) =>
      props.bgColor === '#fff'
        ? '#214AEE'
        : props.version === 'v2'
        ? '#FFEA7D'
        : '#fff'}; /* 조건부 색상 */
    color: ${(props) => (props.bgColor === '#fff' ? '#fff' : '#214AEE')};
    font-weight: 700;
  }
`

export const InCartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 3.125rem;
  max-width: 50px;
  height: 3.125rem;
  padding: 2px 5px 0px 2px;
  border-radius: 30px;
  background: rgba(210, 210, 210, 0.30);
  color: ${(props) => props.strokeColor || '#214AEE'};
`