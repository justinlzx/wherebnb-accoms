import Res from '../Res/response.js';
import { createComment, getComment } from '../service/comment.service.js';

//add comment
export const createCommentController = async (req, res) => {
    try {
        const payload = req.body;
        const result = await createComment(payload);
        return Res.successResponse(res, result)
    } catch (error) {
        return Res.errorResponse(res, error)
    };
}

//get comment by listing id
export const getCommentController = async(req, res) => {
    // call some service 
    try{
        const { listingId } = req.params
        console.log(listingId)
        
        const result = await getComment({listingId})
        console.log(result)
        res.json(result)
    } catch (error) {
        return Res.errorResponse(res, error)
    }

}
