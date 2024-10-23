import { useState } from 'react';
import S from './style';

export default function Post({ fname, lname, gender, image }) {
  let [likes, setLikes] = useState(0);
  let [isLiked, setIsLiked] = useState(false);

  const updateLikes = () => {
    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <S.PostContainer>
      <img
        src={
          'https://img.freepik.com/free-photo/excited-happy-young-man-achieve-success-fist-pump-rejoicing_176420-18906.jpg'
        }
        style={{ width: '20%', borderRadius: '50%' }}
      />
      <S.ContentWrapper>
        <S.PostBody>
          <S.DetailWrapper>
            <h3>
              {fname} {lname}
            </h3>
            <span>Gender: {gender}</span>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <p>{likes}</p>
            <button onClick={updateLikes}>Like</button>
          </S.DetailWrapper>
        </S.PostBody>
        <S.PostFooter>
          <p>24 replies</p>
          <p>12 March 2024</p>
        </S.PostFooter>
      </S.ContentWrapper>
    </S.PostContainer>
  );
}
