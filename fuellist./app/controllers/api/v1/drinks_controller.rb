class Api::V1::DrinksController < ApplicationController
  def index
    render json: Drink.all
  end

  def create
    drink = Drink.create(drink_params)
    render json: drink
  end

  def destroy
    Drink.destroy(params[:id])
  end

  def update
    drink = Drink.find(params[:id])
    drink.update_attributes(drink_params)
    render json: drink
  end

  private

  def drink_params
    params.require(:drink).permit(:id, :name, :caffeine)
  end
end