class CreateSitemaps < ActiveRecord::Migration
  def change
    create_table :sitemaps do |t|
      t.string :name
      t.string :title

      t.timestamps
    end
  end
end
