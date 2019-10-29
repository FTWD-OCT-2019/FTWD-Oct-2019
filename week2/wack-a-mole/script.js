window.onload = function(){

    let score = 0;

    const theMole = document.createElement('div');
    theMole.id = 'mole';

    const explosion = document.createElement('div');
    explosion.id = 'explode'

    let successfullyClicked = true;
  





    setInterval(()=>{
      

        let r = Math.random();
   

    if(r > 0.85){
       let cols = document.querySelectorAll(`.row > .col`);
       for(let i=0; i < cols.length; i++){
        console.log('dissappearing')
           cols[i].innerHTML = "";
       }
        return;
    }


        if(r > 0.5){
            return;
        }

        if(!successfullyClicked){
            score -=2;
        }



        let randomRow = Math.floor(Math.random() * 3) + 1;

        let randomColumn = Math.floor(Math.random() * 3) + 1;


            document.querySelector(`.row${randomRow} > .col${randomColumn}`)
            .appendChild(theMole)
            
            successfullyClicked = false;


            document.querySelector('h3 > span').innerText = score;
    },1000)




    // 1000 miliseconds is 1 second so this funciton will happen once every second




   

    let spots = document.getElementsByClassName('col');

    for(let i= 0; i < spots.length; i++){
        spots[i].onclick = function(e){

            if(e.currentTarget.innerHTML == ""){
                console.log('empty');
                score -= 5;
                successfullyClicked = false;
            } else{

                console.log('you got the mole');
                score += 10;

                e.currentTarget.innerHTML = "";
                e.currentTarget.appendChild(explosion)
                setTimeout(()=>{
                    e.currentTarget.innerHTML = "";
                },333)

                successfullyClicked = true;
            }

            (score);

            document.querySelector('h3 > span').innerText = score;

           

        }
    }












} // end window onload