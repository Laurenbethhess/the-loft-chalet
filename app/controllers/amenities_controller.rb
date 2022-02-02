class AmenitiesController < ApplicationController
    skip_before_action :authorize


    def index
        render json: Amenity.ordered_by_id
    end

    def show
        render json: find_amenity
    end

    private

    def find_amenity
        Amenity.find(params[:id])
    end

end
