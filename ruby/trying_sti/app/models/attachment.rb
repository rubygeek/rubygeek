class Attachment < ActiveRecord::Base
  belongs_to :article
  validates_presence_of :description, :filename, :filesize
end
