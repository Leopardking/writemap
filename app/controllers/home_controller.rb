class HomeController < ApplicationController
  # before_action :authenticate_user!
  # before_filter :check_session

  def index
    redirect_to welcome_path
  end

  def create
  end

  def edit
  end

  def delete
  end
end
