import React from 'react'
import styled from 'styled-components'

const Head = () => {
    return (
        <Container>
            <H1 className="MuiTypography-root MuiTypography-h1 css-18mqlzt">
                Dig. Apply <br className="MuiBox-root css-0" /> Prepare Your Future
            </H1>

            <P>
                Hiring Mine connects employer and job seekers, where employers are the source of the resources and the job seeker can find and apply for their targeted job.
            </P>
        </Container>
    )
}

export default Head

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 300px;
`;

const H1 = styled.h1`
    font-style: normal;
    font-weight: 800;
    font-size: 80px !important;
    line-height: 100px;
    text-align: center;
    letter-spacing: -.02em;
    background: linear-gradient(106.43deg, #522fd4, #6bdcff 95.12%);
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const P = styled.p`
    margin: 16px 0px 0px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    letter-spacing: 0.00938em;
    text-align: center;
    font-size: 20px;
    line-height: 32px;
`;

