class CreateFavs < ActiveRecord::Migration[5.2]
  def change
    create_table :favs do |t|
      t.integer :user_id
      t.integer :drink_id

      t.timestamps
    end
  end
end
