import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Post } from '../components';

function Posts () {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageList, setPageList] = useState([]);
  const postsPerPage = 10;
  const fetchData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/');
    setAllPosts(res.data);
    setPosts(res.data.slice(postsPerPage * (currentPage - 1), postsPerPage * (currentPage - 1) + 10));
    const arr = [];
    for (let i = 1; i <= res.data.length / postsPerPage; i++) {
      arr.push(i);
    }
    setPageList(arr);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchData();
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    setPosts(allPosts.slice(postsPerPage * (currentPage - 1), postsPerPage * (currentPage - 1) + 10));
  }, [currentPage]);

  return (
    <Background>
      {
        loading
          ? <div>now loading...</div>
          : <Box>
            <Title>posts</Title>
            {posts.map((data) => {
              return (
                <Post key={data.id} data={data} />
              );
            })}
            <PageBox>
              <PageButton
                id='left'
                onClick={() => {
                  currentPage > 1
                    ? setCurrentPage(currentPage - 1)
                    : <></>;
                }}
              >&#9667;
              </PageButton>
              {pageList.map((number) => {
                return (
                  <PageButton
                    key={number} id={number} current={currentPage}
                    onClick={() => setCurrentPage(number)}
                  >{number}
                  </PageButton>
                );
              })}
              <PageButton
                id='right'
                onClick={() => {
                  currentPage < Math.ceil(allPosts.length / postsPerPage)
                    ? setCurrentPage(currentPage + 1)
                    : <></>;
                }}
              >&#9657;
              </PageButton>
            </PageBox>
            </Box>
      }
    </Background>
  );
}

export default Posts;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  width: 30%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  border-bottom: solid black 3px;
  margin-bottom: 15px;
`;

const PageBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.id === props.current ? '#7A55C7' : 'white'};
  color: ${(props) => props.id === props.current ? 'white' : 'black'};
  :hover {
    background-color: #eeeeee;
    color: black;
    cursor: pointer;
  }
`;
