import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";

export default function RealPost() {
  // https://jsonplaceholder.typicode.com/posts
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const result = await axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
    });
    console.log(result.data);
    setPosts(result.data.slice(0, 10));
  };

  // useEffect의 콜백에는 async를 사용할 수 없음
  // > async await 를 사용하는 함수를 따로 만들어야 함 ( 이 방법 더 추천)

  useEffect(() => {
    getPosts();
  }, []);

  // then catch는 사용 가능

  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => {
  //         setPosts(res.data.slice(0, 5));
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);
  return (
    <>
      {posts.length === 0 ? (
        <span>...loading...</span>
      ) : (
        posts.map((el) => {
          return (
            <PostItem key={el.id} id={el.id} title={el.title} body={el.body} />
          );
        })
      )}
    </>
  );
}
