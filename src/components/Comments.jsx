import { useParams } from "react-router-dom";

const Comments = () => {
  const { productId } = useParams();
  return <div>Comments for id {productId}</div>;
};

export default Comments;
