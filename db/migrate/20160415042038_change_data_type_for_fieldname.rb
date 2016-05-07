class ChangeDataTypeForFieldname < ActiveRecord::Migration
  def self.up
    change_table :rooms do |t|
      t.change :date_occupied, :date
      t.change :date_start, :date
      t.change :date_end, :date
    end
  end
  def self.down
    change_table :rooms do |t|
      t.change :date_occupied, :datetime
      t.change :date_start, :datetime
      t.change :date_end, :datetime
    end
  end
end
