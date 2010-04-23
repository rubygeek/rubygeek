class CreateAttachments < ActiveRecord::Migration
  def self.up
    create_table :attachments do |t|
      t.string :type
      t.integer :article_id
      t.string :description
      t.string :filename
      t.integer :filesize

      t.timestamps
    end
  end

  def self.down
    drop_table :attachments
  end
end
