class Series < ActiveRecord::Base
  has_many :documents, :as => :attachable
end
