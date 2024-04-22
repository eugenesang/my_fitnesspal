const express = require('express');

const exerciseData = require('../data').data;

const router = express.Router();

router.get('/bodyPart/:bodyPart', (req, res) => {
    console.log(req.params);
    try {
        const data = exerciseData[req.params.bodyPart];

        if (!data) {
            return res.status(404).json({
                error: "body part not found"
            })
        }

        return res.json(data);
    } catch (error) {
        res.status(500).json({error});
        console.error(error);
    }
})

module.exports = router;