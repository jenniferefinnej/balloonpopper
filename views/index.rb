require 'sinatra'

get '/' do
	erb :index
end

post '/greet' do
	"Hello," + params[:name] + "Welcome to Balloon Pop!"

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
end

board = Board.new
board.printb