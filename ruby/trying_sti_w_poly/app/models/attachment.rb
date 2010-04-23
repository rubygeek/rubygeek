class Attachment < ActiveRecord::Base
  belongs_to :attachable, :polymorphic => true

  validates_presence_of :description, :filename, :filesize
end
