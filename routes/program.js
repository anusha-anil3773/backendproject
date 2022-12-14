const express = require('express');
const router = express.Router();

const programcntrlr = require('../controllers/program')

//add program 

router.post('/api/add_program', programcntrlr.addprogram)
    //read all program

router.get('/api/programlist', programcntrlr.getallprogram)

// read single program detail
router.get('/api/getsingleprogram/:id', programcntrlr.getoneprogram)

/
// update  program detail
router.put('/api/updateprogram', programcntrlr.updateprogram)

// delete program detail
router.delete('/api/deleteprogram/:id', programcntrlr.deleteprogram)



module.exports = router;