# class Game < ActiveRecord::Base

#   def self.top_scores
#     self.all.order('play_time asc').limit(5).map(:&.winner)
#   end

#   def self.best_users
#     self.all.
#   end

# end

# Game.select("winner, count(id) as count").group()


# Game.users.where(name)

# SELECT winner, COUNT(id) FROM games GROUP BY winner ORDER BY COUNT(id) desc LIMIT 5

# SELECT name, COUNT(game.id) FROM games JOIN users ON winner = name GROUP BY name ORDER BY COUNT(game.id) desc LIMIT 5


