class AddUserToSitemaps < ActiveRecord::Migration
  def self.up
    change_table(:sitemaps) do |t|
      t.integer  :user_id
    end

    add_index :sitemaps, :user_id
  end

  def self.down
    raise ActiveRecord::IrreversibleMigration
  end
end
