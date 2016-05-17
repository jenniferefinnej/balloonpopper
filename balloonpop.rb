class Player
	attr_accessor :name, :wins

	def initialize 
		@player = gets.chomp
		wins = 0
		@balloons = "unpopped"
	end 

end

class Game

	def initialize(player)
		@player = player
		puts "Pop all the Balloons you can!"
	end

	def balloons
		if @player == "Select Balloons" 
			then @balloons = "popped"
		end
	end

end

	class Board
		attr_reader :board
		
		def initialize
		@board = [ 
			['o', 'o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o', 'o']
		]
		end 

		def printb
		@board.each do |row|
			print "|"
			row.each { |cell| print "#{cell}|"}
			puts "\n__________"
		end
		end

		def mark_board(coords)
			@board[coords[1].to_i][coords[0].to_i] = "x"
		end

		def turn
			printb
			puts "enter coordinate"
			a = gets.chomp
			
			mark_board(a)
			printb
		end
	end








board = Board.new
board.turn
