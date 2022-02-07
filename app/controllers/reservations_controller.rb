class ReservationsController < ApplicationController
    skip_before_action :authorize

    def index 
        render json: Reservation.all
    end

    def create
        reservation = Reservation.create!(reservations_params)
        render json: reservation, status: :created
    end

    private

    def reservations_params
        params.permit(:date, :calendar_id)
    end

end
