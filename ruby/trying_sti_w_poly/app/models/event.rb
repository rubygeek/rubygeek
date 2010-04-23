class Event < ActiveRecord::Base
  has_many :documents, :as => :attachable
  has_many :images, :as => :attachable
end
