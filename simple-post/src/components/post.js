import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Post ({ data }) {
  const navigate = useNavigate();

  return (
    <Background>
      <Rap1>
        <Title onClick={() => { navigate(`/posts/${data.id}`, { replace: false }); }}>{data.title}</Title>
        <UserId>user {data.userId}</UserId>
      </Rap1>
    </Background>
  );
}

export default Post;

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Rap1 = styled.div`
  width: 800px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  :hover {
    background-color: #eeeeee;
  }
`;
const Title = styled.div`
  width: 600px;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  
`;
const UserId = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
