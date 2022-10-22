import {comments} from "../../data/cooments";

const ComentHandler = (req, res) => {

    const {commentId} = req.query;
    if(req.method === 'GET'){
        const comment = comments.find((comment) => comment.id === parseInt(commentId))
        res.status(200).json(comment);
    }else if(req.method === 'DELETE'){
        const deleteComment = comments.find((comment) => comment.id === parseInt(commentId))
        
        const index = comments.findIndex(
            (comment) => comment.id === deleteComment
        )
        comments.splice(index, 1);
        res.status(200).json(deleteComment)
    }

}

export default ComentHandler;