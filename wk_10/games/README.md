# Fake COMP6080 Exam

**Making the dashboard:**
- Create a dashboard with a header that is 80px in height and green/yellow.
- Ensure there is a total score in the center of the dashboard, initially set to 0
- Ensure there are 3 links on the header with links to the games: Tic-tac-toe, Asteroids, Rock paper scissors
- Ensure the links are "spaced-around"

**Game 1 Tic-tac-toe** ❌:
- Make a 3x3 grid and standard game of tic tac toe (video/sample provided).
- There should be a play button to start the game, this button should be disabled when the game has started
- The player should play as "O"
- When the player makes a move, a computer will place an "X" in any of the open 3x3 square
- If the player makes 3 O's in a row, they win and their score will increase by 1. The play button turns into play again and should not be disabled.
- If the computer wins, the play button turns into "Play again" and should not be disabled
- If there is a draw, the game is **automatically** restarted

**Game 2 Asteroids** ☄️:
- The game container should be 1000px x 1000px with a gray background and 3px solid #000 border.
- There should 3 rows of asteroids which are 80px x 20px in size. They should have a gap of 20px between each asteroid.
- Each row should contain 8 asteroids and each row should have a 30px gap.
- A play button should be visible in the middle of the screen, and the game should not start until this is clicked
- The asteroids are initially positioned at the top of the screen with all 3 rows visible.
- Every second (1000 ticks), each asteroid row should fall 1 px towards the player.
- The player should be a 50px x 50px black box along the bottom of the screen
- When the left or right arrow key is pressed, the player should move 1px per tick
- When the player reaches the edge of the container, they should not be able to go past it.
- When the player presses "Spacebar", they should destroy any asteroid which is aligned in its path.
- If the asteroids reach where the player are, the game ends with the text "You lose" and a play again button should appear in the center of the screen.
- If the player wins, the text "You win should show" and their total score should increase. A play again button should appear in the center of the screen.

**Game 3 Rock paper scissors** ✂️:
- There should 3 clickable squares of size 200px x 200px and spaced-evenly in the center of the game screen.
- The squares should have the text: "Rock", "Paper" and "Scissors" respectively, and this text should be centered in the square.
- Above the squares should be two rows of text (initially empty), one which says "User move" and the other which says "Computer move".
- When the user clicks either of the squares, the user move text will update to show the user's move.
- After the user makes a move, the squares should be disabled until the computer makes a move.
- The computer should pick one of Rock, paper or scissors and this should replace the empty Computer move text. ie. Computer move: "Paper"
- In this game, paper beats rock, rock beats scissors and scissors beats paper.
- There should be a game_score out of 5.
- If the user wins, their score should increase by 1, and the game continues until either the player or computer has won 3 rounds.
- If user loses, the computer's score increases by 1 the game continues until either the player or computer has won 3 rounds.
- If there is a tie, the game continues with neither of the scores increasing.
- When the player reaches a score of 3, the game ends with a popup that says "Player wins", and their total score in the dashboard should increase by 1.
- If the computer wins, a play again button should appear.

Dashboard
- The dashboard should reflect the total points acquired by the user in the games


