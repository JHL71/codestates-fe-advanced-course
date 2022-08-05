import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Detail () {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({
    title: 'loading...',
    body: 'loading...',
    userId: 'loading...'
  });
  const [comments, setComments] = useState([]);
  const fetchDetail = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    setDetail(res.data);
  };
  const fetchComments = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${params.id}`);
    setComments(res.data);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchDetail();
      fetchComments();
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Background>
      <Title>{detail.title}</Title>
      {
        loading
          ? <UserId> {detail.userId}</UserId>
          : <UserId> user {detail.userId}</UserId>
      }
      <Body>{detail.body}</Body>
      <CommentsNum>comments {comments.length}</CommentsNum>
      {
        comments.map((data) => {
          return (
            <CommentsBox key={data.id}>
              <NameBox>{data.name}</NameBox>
              <CommentBody>{data.body}</CommentBody>
            </CommentsBox>
          );
        })
      }
    </Background>
  );
}

export default Detail;

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: bold;
  border-bottom: solid black 5px;
`;

const UserId = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 24px;
  padding: 5px;
`;

const Body = styled.div`
  width: 95%;
  height: 200px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 24px;
  text-align: left;
  padding: 5px;
`;

const CommentsNum = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 24px;
  border-bottom: solid black 3px;
  margin-bottom: 5px;
`;

const CommentsBox = styled.div`
  width: 95%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  font-size: 20px;
  text-align: left;
`;

const NameBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-weight: bold;
`;

const CommentBody = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
`;
