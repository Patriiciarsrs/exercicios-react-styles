import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ee82ee;
`;
export const Form = styled.div`
    gap:10px;
    display: flex;
    flex-direction: column;
    background-color: #4169e1;
    padding: 50px;
    border-radius: 10px;
`;
export const Title = styled.h1`
    text-align: center;
    color: #fff;
`;
export const Input = styled.input`
    padding: 10px;
    border-radius: 10px;
    outline: none;
    border: none;
    width: 100%;

    &:hover{
        color: #4169e1;
        font-size: 16;
        background-color: #fff5ee;

    }
`;
export const Button = styled.button`
    padding: 12px;
    width: 100%;
    border: none;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 10px;
    background-color: #fff;

    &:hover{
        color: #fff;
        font-size: 16;
        background-color: #8a2be2;}
`