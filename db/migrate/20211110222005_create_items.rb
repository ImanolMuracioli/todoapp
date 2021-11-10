class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.text :description
      t.boolean :mark

      t.timestamps
    end
  end
end
