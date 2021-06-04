class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.text :image
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
