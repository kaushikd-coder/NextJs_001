import comments from "../../data/cooments";

const HomeApi = (req, res) => {
    if (req.method === "GET") {
        res.status(200).json(comments);
    } else if (req.method === "POST") {
        const {
            comment
        } = req.body;
        const newCmnt = {
            id: Date.now(),
            text: comment,
        };
        comments.push(newCmnt);
        res.status(201).json(comments);
    }
};

export default HomeApi;