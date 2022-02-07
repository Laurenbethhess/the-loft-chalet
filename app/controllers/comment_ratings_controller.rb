class CommentRatingsController < ApplicationController
    skip_before_action :authorize

    def index
        render json: CommentRating.all
    end

    def show
        render json: find_comment_rating
    end

    def create
        comment_rating = CommentRating.create!(comment_rating_params)
        render json: comment_rating, status: :created
    end

    def update
        comment_rating = find_comment_rating
        comment_rating.update!(update_params)
        render json: comment_rating
    end

    def destroy
        find_comment_rating.destroy
        head :no_content
    end

    private

    def find_comment_rating
        CommentRating.find(params[:id])
    end

    def comment_rating_params
        params.permit(:property_id, :user_id, :comment, :rating)
    end

    def update_params
        params.permit(:comment, :rating)
    end
    

end
