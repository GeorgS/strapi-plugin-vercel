import styled from 'styled-components';

export const Block = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
  background: #ffffff;
  padding: 2rem;
  box-shadow: 0 2px 4px 0 #e3e9f3;
  border-radius: 3px;
  line-height: 18px;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .label {
    color: gray;
    font-weight: bold;
  }

  .waiting {
    background: #F3F3F4;
    width: 400px;
    height: 250px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
