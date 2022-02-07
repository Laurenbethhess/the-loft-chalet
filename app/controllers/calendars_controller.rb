class CalendarsController < ApplicationController
    skip_before_action :authorize

    def index 
        render json: Calendar.all
    end

    def show
        render json: find_calendar
    end

    private

    def find_calendar
       Calendar.find(params[:id])
    end

end
