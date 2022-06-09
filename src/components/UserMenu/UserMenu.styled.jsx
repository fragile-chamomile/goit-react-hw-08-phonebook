import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  margin-right: 4px;
`;

export const Name = styled.span`
  font-weight: 500;
  margin-right: 12px;
`;

export const Button = styled.button`
  width: 50px;
  padding: 4px 0;

  border: none;
  border-radius: 4px;

  color: aliceblue;
  background-color: #17a2b8;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0px 5px 10px 2px rgba(0, 123, 255, 0.4);
  }
`;
