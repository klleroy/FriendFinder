// ========== Dependencies ========== //
const express = require('express');
const router = express.Router();
const friends = require('../data/friends');
//=================================== //

router.get('/api/friends', function (req, res) {
<<<<<<< HEAD
    res.json(friends);
    // console.log(friends);
});

router.post('/api/friends', function (req, res) {
    // use best match object to hold all options as we loop through 
=======
    return res.json(friends);
});

router.post('/api/friends', function (req, res) {
>>>>>>> 6d9f862404e50ee89ee758b71d41100c7c4931d6
    let bestMatch = {
        name: '',
        photo: '',
        friendDifference: ''
<<<<<<< HEAD
    };

    // take result of user's survey, POST and parse
    let userData = req.body;
    let userScores = userData.scores;

    // calculate the total difference between the users' score and the scores of each choice in the DB
    let totalDifference = 0;

    // Loop through all the friend possibilities in the database.
    for (let i = 0; i < friends.length; i++) {
        totalDifference = 0;

        // Loop through all the scores for each friend
        for (let j = 0; j < friends[i].scores[j]; j++) {
            // calculate the difference between the scores and sum them into the totalDifference
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            // if total of difference is less than the diff of the current best match
            if (totalDifference <= bestMatch.friendDifference) {
                
                // reset bestMatch to be new friend.
=======
    }

    let userData = req.body;
    let userScores = userData.scores;

    let totalDifference = 0;

    for (let i = 0; i < friends.length; i++) {
        totalDifference = 0;

        for (let j = 0; j < friends[i].scores[j]; j++) {
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            //If sum of differences is less then the differences of the current match
            if (totalDifference <= bestMatch.friendDifference) {

                //Reset the bestMatch to be the new friend.
>>>>>>> 6d9f862404e50ee89ee758b71d41100c7c4931d6
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
    }
<<<<<<< HEAD

    // save the users' data to the db 
    friends.push(userData);

    // Return a JSON with the users best match
=======
    friends.push(userData);

>>>>>>> 6d9f862404e50ee89ee758b71d41100c7c4931d6
    res.json(bestMatch);
});

module.exports = router;