import React from 'react'
import $ from 'jquery'

// class FlyingFlamingo extends React.Component {
  class FlyingFlamingo extends React.Component {
    
    
    componentDidMount() {
        //dom variables
        let container = $('#container');
        let bird = $('#bird');
        let pole = $('.pole');
        let pole_1 = $('#pole_1');
        let pole_2 = $('#pole_2');
        let score = $('#score');
        let speed_span = $('#speed');
        let restart_btn = $('#restart_btn');
        let shooting_stars = $('#shooting_stars')
        let help = $('help')
        //initialization lets
        let container_width = parseInt(container.width());
        let container_height = parseInt(container.height());
        let pole_initial_position = parseInt(pole.css('right'));
        let pole_initial_height = parseInt(pole.css('height'));
        let bird_left = parseInt(bird.css('left'));
        let bird_height = parseInt(bird.height());
        let speed = 5;
        //mostly moving stuffs of stuff that chenges 
        let go_up = false;
        let score_updated = false;
        let game_over = false;
        let anim_id;
        //game function
      const the_game = () => {
        //when collision occurs end game
        if (collision(bird, pole_1) || collision(bird, pole_2) || parseInt(bird.css('top')) <= 0 || parseInt(bird.css('top')) > container_height - bird_height) {
          stop_the_game();
        }
        else {
          //pole passing bird makes score go up
          let pole_current_position = parseInt(pole.css('right'));
          //update the score when the poles have passed the bird successfully
          if (pole_current_position > container_width - bird_left) {
            if (score_updated === false) {
              score.text(parseInt(score.text()) + 1);
              score_updated = true;
            }
          }
          //check whether the poles went out of the container
          if (pole_current_position > container_width) {
            let new_height = parseInt(Math.random() * 100);
            //change the pole's height---- pole height starts at 130 then a new height is determined by creating a random number and adding it to oneside but subbing from the other so a valid gap is always maintained
            pole_1.css('height', pole_initial_height + new_height);
            pole_2.css('height', pole_initial_height - new_height);
            //increase speed when pole goes out of container
            speed = speed + 1;
            speed_span.text(speed);
            score_updated = false;
            pole_current_position = pole_initial_position;
          }
          //move the poles bt literaly adding speed let to the absolute position of pole right: 
          pole.css('right', pole_current_position + speed);
          // if youre not flying youre falling
          if (go_up === false) {
            go_down();
          }
        }
        anim_id = requestAnimationFrame(the_game);
      };
        anim_id = requestAnimationFrame(the_game);
    
        $(document).on('keydown', function (e) {
          let key = e.keyCode;
          if (key === 32 && go_up === false && game_over === false) {
            go_up = requestAnimationFrame(up);
          }
        });
        $(document).on('keyup', function (e) {
          let key = e.keyCode;
          if (key === 32) {
            cancelAnimationFrame(go_up);
            go_up = false;
          }
        });
    
        const go_down = () => {
          bird.css('top', parseInt(bird.css('top')) + 3);
        }
    
        const up = () => {
          bird.css('top', parseInt(bird.css('top')) - 9);
          go_up = requestAnimationFrame(up);
        }
    
        const stop_the_game = () => {
          cancelAnimationFrame(anim_id);
          game_over = true;
          restart_btn.slideDown();
          shooting_stars.show()
          document.getElementById('help').innerHTML = "You lose!!!"
    
          //   shooting_stars.display show
          //   shooting_stars.display(show)
        }
    
        // function shooting_stars
    
        restart_btn.click(() => {
          document.location.reload();
        });
        // setting up bounding rectangle collision stuffs
        const collision = ($div1, $div2) => {
          let x1 = $div1.offset().left;
          let y1 = $div1.offset().top;
          let h1 = $div1.outerHeight(true);
          let w1 = $div1.outerWidth(true);
          let b1 = y1 + h1;
          let r1 = x1 + w1;
          let x2 = $div2.offset().left;
          let y2 = $div2.offset().top;
          let h2 = $div2.outerHeight(true);
          let w2 = $div2.outerWidth(true);
          let b2 = y2 + h2;
          let r2 = x2 + w2;
          if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
          return true;
        }
      }

  render() {
    return(
      <div>
        <div id="container">
          <div id="bird"></div>
          <div id="pole_1" class="pole"></div>
          <div id="pole_2" class="pole"></div>
        </div>
        <div id="score_div">
          <p><b>Score: </b><span id="score">0</span></p>
          <p><b>Speed: </b><span id="speed">5</span></p>
        </div>
        <div id="help">
          <p>Use space bar to control the bird</p>
        </div>
      </div>
    )
  }
}

export default FlyingFlamingo
