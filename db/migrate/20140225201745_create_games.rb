class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :player1
      t.string :player2
      t.string :winner
      t.string :play_time

      t.timestamps
    end
  end
end
