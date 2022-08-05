import styled from 'styled-components';

function Header () {
  return (
    <Background>
      Post Post
    </Background>
  );
}

export default Header;

const Background = styled.div`
  width: 100%;
  height: 80px;
  background-color: #7A55C7;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
`;
