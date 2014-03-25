require 'rubygems'
require 'active_support/string_inquirer'

class User
  attr_reader :status, :language

  def initialize(params)
    self.status = params[:status] 
    self.language = params[:language]
  end

  def status=(status)
    @status = ActiveSupport::StringInquirer.new(status)
  end

  def language=(language)
    @language = ActiveSupport::StringInquirer.new(language)
  end
end
