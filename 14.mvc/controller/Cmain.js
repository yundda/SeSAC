const Comments = require("../model/Comment");
// GET /
exports.main = (req, res) => {
  res.render("index");
};
// GET / comments
exports.comments = (req, res) => {
  const comments = Comments.commentsInfos();
  console.log(comments);
  res.render("comments", { commentsInfos: comments });
};

// GET / comment/:id
exports.comment = (req, res) => {
  const comments = Comments.commentsInfos();
  console.log(req.params);
  const commentId = req.params.id;
  console.log("commentId :" + commentId); // 1,2,3,4
  console.log(comments[commentId - 1]);
  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }
  if (isNaN(commentId)) {
    res.render("404");
  }
  res.render("comment", {
    commentInfo: comments[commentId - 1],
    /*
        {
            id: 1,
            userid: 'apple',
            date: '2024-10-23',
            comments: '안녕하세요~~~~~~~~~'
        }
        */
  });
};
