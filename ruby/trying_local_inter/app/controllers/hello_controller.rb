class HelloController < ApplicationController
  before_filter :set_locale

  def index
  end
  
  private

  def set_locale 
    # if params[:locale] is nil then I18n.default_locale will be used
    I18n.locale = params[:locale]
  end 
end
