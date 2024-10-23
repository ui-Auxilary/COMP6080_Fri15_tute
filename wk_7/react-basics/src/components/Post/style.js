import styled from 'styled-components';

const PostContainer = styled.div`
  max-width: 300px;
  padding: 0px 20px;
  border: 1px solid #ccc;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default {
  PostContainer,
  ContentWrapper,
  PostBody,
  PostFooter,
  DetailWrapper,
};
