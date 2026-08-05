import styled from "styled-components";

export const AppStyled = styled.div`
    display: flex;
    gap: 20px;
    height: 100vh;
    background-color: #e0ded0;
    padding: 20px;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;
    export const StickerListStyled = styled.ul`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        width: 100%;
        height: 100%;
        background-color: #f0f0f0;
        border-radius: 20px;
        align-content: start;
        padding: 10px;
        overflow: auto;
        scrollbar-color: #ddd transparent;
        scrollbar-width: thin;
    `;
        export const StickerStyled = styled.li`
            width: 100px;
            height: 100px;
            background-size: 80px;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 20px;
            cursor: pointer;
            transition: all 200ms ease-out;
            &:hover, &:focus {
                background-color: #ddd;
                transform: scale(110%);
            }
        `;
    export const ChoiceStyled = styled.div`
        min-width: 400px;
        background-color: #f0f0f0;
        border-radius: 20px;
        padding: 20px;
        @media (max-width: 700px) {
            width: fit-content;
            min-width: unset;
            max-height: 400px;
            margin: 0 auto;
        }
    `;
        export const ChoiceImgStyled = styled.img`
            width: 100%;
            border-radius: 20px;
            padding-bottom: 20px;
        `;
        export const ChoiceLabelStyled = styled.p`
            font-size: 20px;
            font-family: sans-serif;
            font-weight: 500;
            text-align: center;
        `;