class HomeController < ApplicationController
  # before_action :authenticate_user!
  # before_filter :check_session

  def index
    unless user_signed_in?
      redirect_to welcome_path
    end
  end

  def create
  end

  def edit
  end

  def delete
  end
end
