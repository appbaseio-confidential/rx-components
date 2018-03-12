import styled, { css } from 'react-emotion';

const Banner = styled.a`
    border-radius: 2px;
    position: relative;
    display: inline-flex;
    overflow: hidden;
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow};
`;

const image = css`
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: relative;
`;

export default Banner;
export { image };
