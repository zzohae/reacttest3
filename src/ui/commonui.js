import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.version === 'v2' ? '4px' : '0')};
  background-color: ${(props) => props.version==='v1' ? '#ffffff' : '#214AEE'};
  color: ${(props) => (props.version === 'v1' ? '#214AEE' : '#fff')};
  padding: 0 30px;
  height: ${(props) => (props.version === 'v2' ? '45px' : '40px')};
  border: 3px solid;
  border-color: ${(props) => props.version === 'v2' ? '#FFEA7D' : props.version === 'v3' ? '#fff' : '#214AEE'};
  transition-property: color, border-color, background-color;
  word-break: keep-all;
  white-space: nowrap;
  border-radius: 30px;
  font-size: 1.125rem;
  font-weight: ${(props) => props.version === 'v2' ? '700' : '500'};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.version === 'v2' ? '#FFEA7D' : props.version === 'v3' ? '#fff' : '#214AEE'};
    color: ${(props) => (props.version === 'v1' ? '#fff' : '#214AEE')};
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
  color: ${(props) => props.svgcolor || '#214AEE'};
`


export const TagStyle = styled.div`
  margin-left: 0.5rem;
  left: ${(props) => (props.index || 0) * 60}px;
  padding: 0.3rem 0.6rem;
  background-color: ${(props) =>
    props.type === 'hot'
      ? '#FF4500'
      : props.type === 'best'
      ? '#214AEE'
      : '#FFEA7D'};
  color: ${(props) => (props.type === 'new' ? '#214AEE' : 'white')};
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 5px;
`;

export const ProductTag = ({ type, index }) => {
  return <TagStyle type={type} index={index}>{type.toUpperCase()}</TagStyle>;
};

