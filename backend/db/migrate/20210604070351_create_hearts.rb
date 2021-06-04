class CreateHearts < ActiveRecord::Migration[6.1]
  def change
    create_table :hearts do |t|
      t.integer :heart_count
      t.belongs_to :image, null: false, foreign_key: true

      t.timestamps
    end
  end
end
