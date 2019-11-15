window.onload = function(){
    // this line tells the html to go back and finish reading itself before it reads this file

    
    
    let theButton = document.getElementById('blah')
    
    theButton.onclick = function(){

        let theUrl = 'https://restcountries.eu/rest/v2/nae/france';
        let theHeaders = {};
// only 1 argument is required in an axios.get request but
// if you want to send a second parameter, it must be an object and this object will be sent as headers on your request
// you only need headers if the API youre using asks for is speciically
        axios.get(theUrl)
        .then((theResult)=>{
            // this only runs if the axios call is successfull and the argument you pass it will be equal to whatever you get back from axios
            console.log(theResult.data[0])
            // this is the part where you append this thing to the page

        })
        .catch((theError)=>{
            // this block of code will only run if the axios call fails
            // the argument here will be the error hopefully containing some info about the failed request
            console.log(theError)
        })



        
    }
















} // end window.onload function