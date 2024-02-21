/*export */ class Comment {
    constructor(commentId, listingId, comment, userId) {
            this.commentId = comment;
            this.listingId = listingId;
            this.comment = comment;
            this.userId = userId;
    }
}

module.exports = {
    Comment: Comment
};