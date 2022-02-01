class PhotosController < ApplicationController
    skip_before_action :authorize


    def index
        render json: Photo.all
    end

    def show
        render json: find_photo
    end

    private

    def find_photo
        Photo.find(params[:id])
    end

end
