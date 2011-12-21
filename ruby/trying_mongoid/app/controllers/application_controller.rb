class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :current_user

  private

  def current_user
    if session[:github_login]
      @current_user ||= User.where(:github_login => session[:github_login]).first
    end
  end

end
