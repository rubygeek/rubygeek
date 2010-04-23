class AddFieldsToAttachment < ActiveRecord::Migration
  def self.up
    add_column :attachments, :attachable_id, :integer
    add_column :attachments, :attachable_type, :string
  end

  def self.down
    remove_column :attachments, :attachable_type
    remove_column :attachments, :attachable_id
  end
end
