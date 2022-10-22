import { useState } from "react";

const comments = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [comments, setComments] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [comment, setComment] = useState("");

    const getData = async () => {
        const response = await fetch("/api");
        const data = await response.json();
        setComments(data);
    };

    const change = (e) => {
        setComment(e.target.value);
    };

    const submitCmnt = async () => {
        const response = await fetch("/api", {
            method: "POST",
            body: JSON.stringify({
                comment,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
    };

    const deleteComment = async (commentId) => {
        const response = await fetch(`/api/${commentId}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
        getData();
    };

    return (
        <>
            <input
                type="text"
                placeholder="comments"
                value={comment}
                onChange={change}
            />{" "}
            <button onClick={submitCmnt}> SubmitComment </button>{" "}
            <button onClick={getData}> LoadComments </button>{" "}
            {comments.map((cmnt) => {
                return (
                    <div key={cmnt.id}>
                        <h1> {cmnt.text} </h1>{" "}
                        <button onClick={() => deleteComment(cmnt.id)}> Delete </button>{" "}
                    </div>
                );
            })}{" "}
        </>
    );
};

export default comments;
