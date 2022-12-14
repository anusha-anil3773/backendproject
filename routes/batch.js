const express = require('express');
const router = express.Router();

const batchcntrlr = require('../controllers/batch')

//add batch 
router.post('/api/add_batch', batchcntrlr.addbatch)
    //read all batch

router.get('/api/batchlist', batchcntrlr.getallbatch)

// read single batch detail
router.get('/api/getsinglebatch/:id', batchcntrlr.getonebatch)

/
// update batch detail
router.put('/api/updatebatch', batchcntrlr.updatebatch)

// delete batch detail
router.delete('/api/deletebatch/:id', batchcntrlr.deletebatch)



module.exports = router;