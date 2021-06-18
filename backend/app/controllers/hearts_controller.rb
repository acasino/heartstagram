class HeartsController < ApplicationController
  before_action :set_heart, only: [:show, :update, :destroy]

  # GET /hearts
  def index
    @hearts = Heart.all

    render json: @hearts
  end

  # GET /hearts/1
  def show
    render json: @heart
  end

  # POST /hearts
  def create
    @heart = Heart.new(heart_params)

    if @heart.save
      render json: @heart, status: :created, location: @heart
    else
      render json: @heart.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /hearts/1
  def update
    if @heart.update(heart_params)
      render json: @heart
    else
      render json: @heart.errors, status: :unprocessable_entity
    end
  end

  # DELETE /hearts/1
  def destroy
    @heart.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_heart
      @heart = Heart.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def heart_params
      # params.require(:heart).permit(:heart_count, :image_id)
    end
end
