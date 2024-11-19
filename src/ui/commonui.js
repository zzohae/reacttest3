import styled from 'styled-components';

export const Utilicon = styled.button`
  background-color: ${(props) => props.bgcolor || '#4CAF50'};
  color: ${(props) => props.fontcolor || 'white'};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'bootstrap-icons';

  &:hover {
    background-color: ${(props) => props.hoverBgColor || '#45a049'};
  }
  &::before {
  content: "${(props) => props.icon || '\\f417'}";
    margin-right: 5px; 
  }
`;


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
  border-radius: 30px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s;
  white-space: nowrap;

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
`;
