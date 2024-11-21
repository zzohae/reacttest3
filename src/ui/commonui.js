import styled from 'styled-components';

export const Btn = styled.button.withConfig({
  shouldForwardProp: (prop) => !['version', 'page'].includes(prop),
})`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.version ?? 'v1') === 'v2' ? '4px' : '0'};
  background-color: ${(props) =>
    props.version === 'v1' ? '#ffffff' : '#214AEE'};
  color: ${(props) => props.version === 'v1' ? '#214AEE' : '#fff'};
  padding: 0 30px;
  height: ${(props) =>
    props.page === 'detail' ? '60px' : props.version === 'v2' ? '45px' : '40px'};
  border: 3px solid;
  border-color: ${(props) =>
    props.version === 'v2' ? '#FFEA7D' : props.version === 'v3' ? '#fff' : '#214AEE'};
  word-break: keep-all;
  white-space: nowrap;
  border-radius: ${(props) => props.page === 'detail' ? '5px' : '30px'};
  font-size: 1.125rem;
  font-weight: ${(props) => props.version === 'v2' ? '700' : '500'};
  cursor: pointer;
  transition: color 0.5s, border-color 0.5s, background-color 0.5s;

  &:hover {
    background-color: ${(props) =>
      props.version === 'v2' ? '#FFEA7D' : props.version === 'v3' ? '#fff' : '#214AEE'};
    color: ${(props) => props.version === 'v1' ? '#fff' : '#214AEE'};
    font-weight: 700;
  }
`;


export const InCartBtn = styled.button.withConfig({
  shouldForwardProp: (prop) => !['svgcolor'].includes(prop),
})`
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

const starSvg = `
<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.97081 0.628738C10.3918 -0.209575 11.6082 -0.209583 12.0292 0.628738L14.0338 4.62047L18.5161 5.26057C19.4575 5.395 19.8333 6.53193 19.1522 7.18444L15.9087 10.2915L16.6744 14.6789C16.8351 15.6003 15.8511 16.303 15.0091 15.8679L11 13.7965L6.99085 15.8679C6.14889 16.303 5.16482 15.6003 5.32563 14.6789L6.09131 10.2915L2.84784 7.18444C2.16667 6.53193 2.54255 5.395 3.4839 5.26057L7.96626 4.62047L9.97081 0.628738Z" fill="#FF4A11"/>
</svg>
`;

export const Starwrap = styled.div`
    width: ${(props) => props.rating * 22}px;
    height: 16px;
    background: url('data:image/svg+xml;charset=UTF-8,${encodeURIComponent(starSvg)}');
    background-repeat: repeat-x;
    background-size: 22px 16px;
    margin: -2.5px;
`