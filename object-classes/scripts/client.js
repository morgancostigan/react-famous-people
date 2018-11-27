console.log( 'js loaded, yall' );

//game collection
let collection = [];

//object literal

//let game1 = {
 //   title: 'Half Life 2',
  //  releaseYear: 2005,
   // genre: [ 'shooter', 'puzzle', 'adventure', 'action' ]
}// end game1

//Game Class

class Game{
    constructor( title, releaseYear, genres ){
        this.title = title;
        this.releaseYear = releaseYear;
        this.genres = genres;
        this.completed = false;
    }//end constructor
    complete(){
        this.completed = true;
    }//end completed method
    addGenre( newGenre ){
        this.genres.push( newGenre );
    }//end addGenre method
}//end Game class



let rdr = new Game( 'Red Dead Redemption', 2010, [ 'shooter', 'open world', 'western' ] );
let portal = new Game( 'Portal', 2008, [ 'shooter', 'puzzle', 'comedy' ] );
let rocketLeague = new Game( 'Rocket League', 2016, ['awesome', 'dope', 'sweet'] );


collection.push( rdr, portal, rocketLeague );
