class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :title
      t.string :addedby
      t.text :description
      t.string :url

      t.timestamps
    end
  end
end
