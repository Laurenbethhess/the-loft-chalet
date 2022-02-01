class AmenitiesController < ApplicationController

    def index
        render json: Amenity.all
    end

    def show
        render json: find_amenity
    end

    private

    def find_amenity
        Amenity.find(params[:id])
    end

end
