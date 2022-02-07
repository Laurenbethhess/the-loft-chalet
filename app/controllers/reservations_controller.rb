class ReservationsController < ApplicationController
    skip_before_action :authorize

    def index 
        render json: Reservation.all
    end

end
