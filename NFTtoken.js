/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const Players = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (PlayerName,country,SportName,Ranking,Net_worth) {
   const Playersvar = {
      "PlayerName": PlayerName,
      "country": country,
      "SportName": SportName,
      "Ranking": Ranking,
      "Net_worth": Net_worth,
   }
   Players.push(Playersvar);
   console.log("Player information for " + PlayerName);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i=0; i < Players.length; i++){
      console.log(Players[i].PlayerName);
      console.log(Players[i].country);
      console.log(Players[i].SportName);
      console.log(Players[i].Ranking);
      console.log(Players[i].Net_worth);
   }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log(Players.length);
}

// call your functions below this line
mintNFT("Virat Kohli","India","Cricket",1,150000000);
mintNFT("Lionel Messi","Argentina","Soccer",1,100000000);
mintNFT( "Cristiano Ronaldo","Portugal","Soccer",2,300000000);
listNFTs();
getTotalSupply();
