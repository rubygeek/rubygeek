class ContactsController < ApplicationController
  def new
    @address = Address.new
  end

end
