class PropertiesController < ApplicationController
    skip_before_action :authorize


    def index
        render json: Property.all
    end

    def show
        render json: find_property
    end

    private

    def find_property
        Property.find(params[:id])
    end

end
