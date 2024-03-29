import styled from 'styled-components';

import Button from '../Button';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        align-items: center;
    }
`;

export const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    width: 49px;
    height: 49px;
    /* background: var(--gray); */
    border-radius: 50%;
    margin-right: 10px;

    > img {
        flex-shrink: 0;
        height: 60px;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    > strong {
        font-size: 14px;
    }
    > span {
        font-size: 14px;
        color: var(--gray);
    }
`;

export const FollowButton = styled(Button)`
    padding: 6px 17px;
`;