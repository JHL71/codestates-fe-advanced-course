# codestates-fe-advanced-course

- 완성된 GIF 파일 및 배포 링크
  - [배포링크](http://simple-post-bucket.s3-website.ap-northeast-2.amazonaws.com/posts)
  - ![ezgif com-gif-maker](https://user-images.githubusercontent.com/89420103/183052565-92f5a2ea-283f-4d80-9c7b-e2ab78cdf975.gif)
  - ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/89420103/183052599-955328de-3b5a-42d8-8c27-9a4473b353a4.gif)
- 프로젝트 실행 방법
  - npm install
  - npm run start
- 사용한 스택 목록
  - javascript
  - HTML5
  - styled-components
  - react
  - axios
- 구현한 기능 목록 (Software Requirement Specification)
  ###### Bare minimum requirements
    - 게시물 리스트 구현
    - 게시물 상세페이지 구현
    - 게시물 페이지네이션 구현
    - setTimeout으로 로딩 딜레이 표시
- Prototype
  - ![스크린샷 2022-08-05 오후 6 31 53](https://user-images.githubusercontent.com/89420103/183048912-0ed9f5ef-f9d1-4e0a-aec1-f4f61ec92fc1.png)
  - ![스크린샷 2022-08-05 오후 6 32 05](https://user-images.githubusercontent.com/89420103/183048949-30d80989-0aa7-40c3-8ef0-bc36ec9186c8.png)

- 성능 최적화에 대해서 고민하고 개선한 방법
    - 게시물 리스트를 서버에 요청할 때 App.js에서 하지 않고 각각의 게시물 리스트 페이지(posts.js)와 상세 게시물 페이지(detail.js)에서 요청하여 불필요한 데이터 요청을 줄였습니다.
    - 게시물 리스트 페이지를 처음 랜딩할 때 게시물을 받아온 후 allposts에 저장하여 페이지를 이동할 경우에는 게시물 리스트를 다시 받아오지 않고 allposts에 저장된 자료를 사용하도록 하여 성승을 개선했습니다.
