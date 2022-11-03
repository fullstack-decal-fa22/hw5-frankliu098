import { useState } from "react";
import axios from "axios";

const Comments = ({ postId, comments: initialComments }) => {
  // console.log("initially");
  // console.log(initialComments);
  // what is the data type of postId - number, comments - list, and initalComments? objects?
  const [comments, setComment] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const handleSubmitComment = () => {
    // Un-comment the lines below to complete your solution
    // ====================
    console.log(comments);
    console.log(newComment);

    axios
      .post(`http://localhost:3002/post/${postId}/comment`, { newComment })
      .then((res) => {
        setComment(res.data.comments);
        setNewComment("");
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(comments);
  };

  return (
    <div style={{ border: "1px solid black" }}>
      {comments &&
        comments.map((comment, i) => (
          <div key={i + comment}>
            <p>{comment}</p>
          </div>
        ))}
      <div>
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </div>
      <button onClick={handleSubmitComment}>Submit</button>
    </div>
  );
};

export default Comments;
