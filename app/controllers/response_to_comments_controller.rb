class ResponseToCommentsController < ApplicationController
    skip_before_action :authorize

    def index
        render json: ResponseToComment.all
    end

    def show
        render json: find_response
    end

    def create
        response = ResponseToComment.create!(response_params)
        render json: response, status: :created
    end

    def update
        response = find_response
        response.update!(update_params)
        render json: response
    end

    def destroy      
        find_response.destroy
        head :no_content
    end

    private

    def find_response
        ResponseToComment.find(params[:id])
    end

    def response_params
        params.permit(:comment_rating_id, :user_id, :comment)
    end

    def update_params
        params.permit(:comment)
    end
end
