class Api::CommentsController < ApplicationController
    
    def new
        @comment = Comment.new
        render json: ["Comment Form"]
    end
    
    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render json: ["Success!"]
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end
    
    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            render json: ["Success!"]
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render json: ["Comment deleted"]
    end
    
    private
    
    def comment_params
        params.require(:comment).permit(:body, :question_id, :author_id)
    end

end
