// ========== Dependencies ========== //
const express = require('express');
const router = express.Router();
const friends = require('../data/friends');
//=================================== //

router.get('/api/friends', function (req, res) {
    return res.json(friends);
});

router.post('/api/friends', function (req, res) {
    let bestMatch = {
        name: '',
        photo: '',
        friendDifference: ''
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
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
    }
    friends.push(userData);

    res.json(bestMatch);
});

module.exports = router;