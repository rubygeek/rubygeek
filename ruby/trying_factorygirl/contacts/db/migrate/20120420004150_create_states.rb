class CreateStates < ActiveRecord::Migration
  def change
    create_table :states do |t|
      t.string :code
      t.string :name
      t.string :abbr

      t.timestamps
    end
  end
end
