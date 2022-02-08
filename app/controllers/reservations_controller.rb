class ReservationsController < ApplicationController
    skip_before_action :authorize

    def index 
        render json: Reservation.all
    end

    def show
        render json: find_reservation
    end

    def create
        reservation = Reservation.create!(reservations_params)
        render json: reservation, status: :created
    end

    def destroy
        find_reservation.destroy
        head :no_content
    end

    private

    def reservations_params
        params.permit(:date, :calendar_id)
    end

    def find_reservation
        Reservation.find(params[:id])
    end

end
