class AddCaptionToImages < ActiveRecord::Migration[6.1]
  def change
    add_column :images, :caption, :string
  end
end
