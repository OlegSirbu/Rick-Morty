import React from 'react';
import styled from 'styled-components';

const LinkCreate = () => (
    <a
        href="https://mernjs.github.io/create-mern-app"
        target="_blank"
        rel="noreferrer"
    >
        {' '}
        Create MERN App
    </a>
);

const LinkSign = () => (
    <a
        href="https://vijay-pratap-singh.netlify.app"
        target="_blank"
        rel="noreferrer"
    >
        {' '}
        Singh
    </a>
);

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="container">
                <div className="row">
                    <WrapperStyle>
                        <CenterSpan>
                            ©2021 <LinkCreate />
                            <span>Some new text</span>
                        </CenterSpan>
                        <SignStyle>
                            <b>By:</b> <LinkSign />
                        </SignStyle>
                    </WrapperStyle>
                </div>
            </div>
        </FooterWrapper>
    );
};

export default Footer;

const WrapperStyle = styled.p`
    text-align: center;
    line-height: '60px';
`;
const SignStyle = styled.span`
    float: 'right';
    line-height: '60px';
`;
const CenterSpan = styled.span`
text-align: 'center',
 line-height: '60px'
`;

const FooterWrapper = styled.footer`
    background-color: #fff;
    width: 100%;
`;
