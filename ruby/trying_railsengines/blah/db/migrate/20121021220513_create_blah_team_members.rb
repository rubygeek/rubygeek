class CreateBlahTeamMembers < ActiveRecord::Migration
  def change
    create_table :blah_team_members do |t|
      t.string :name
      t.string :twitter_url
      t.text :bio
      t.string :image_url

      t.timestamps
    end
  end
end
