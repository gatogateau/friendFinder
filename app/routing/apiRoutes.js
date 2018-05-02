var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var mysql = require("mysql");
var path = require("path");
// export apiRoutes.js

// take in the data from the survey and send to api/friends


// require the friends array from data/friends.js
var userData = require("../data/friends");


// get info from url api friends and post userData to page
app.get("/api/friends", function(req, res) {
    res.json(userData);
  });

// not defined?   does this need to be placed on the HTML page?





module.exports = function (app) {

        // require the friends page data
        var friendsData = require("../data/friends");

        // get route to api/friends, to display JSON of all friends
        app.get("/api/friends", function (req, res) {
            res.json(friendsData);

        });

        // create new friend and post to list of Friends
        app.post("/api/friends", function (req, res) {
            var userData = req.body;

            console.log (userData)


            // * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
            //   * Example: 
            var bestFriendScore = 999999999;
            var bestFriend={};
            for (var i=0; i<friendsData.length; i++){
                var friendscore = comparison (userData.scores, friendsData[i].scores);
                if (friendscore<bestFriendScore) {
                    bestFriend = friendsData[i];
                    bestFriendScore = friendscore;
                }
                
            }

                

            function comparison (userscores, friendscores) {
                var friendScore = 0;
                for (var j=0; j<userscores.length; j++) {
                  friendScore += Math.abs(userscores[j]-friendscores[j]);

                }
                return friendScore;

            }
            //     * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
            //     * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
            //     * Total Difference: **2 + 1 + 2 =** **_5_**
            // * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
            // * The closest match will be the user with the least amount of difference.
         



            friendsData.push(userData);
            res.json(bestFriend);

        });

//         // create new friend
// // Create New Characters - takes in JSON input
// app.post("/api/characters", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body-parser middleware
//     var newcharacter = req.body;
  
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
//     console.log(newcharacter);
  
//     characters.push(newcharacter);
  
//     res.json(newcharacter);
//   });
  

    }


