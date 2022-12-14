const express = require('express');
const router = express.Router();

const coursecntrlr = require('../controllers/courses')

//add course 
router.post('/api/add_course', coursecntrlr.addcourse)
    //read all course

router.get('/api/courselist', coursecntrlr.getallcourses)

// read single couse detail
router.get('/api/getsinglecourse/:id', coursecntrlr.getonecourse)

/
// update  course detail
router.put('/api/updatecourse', coursecntrlr.updatecourse)

// delete course detail
router.delete('/api/deletecourse/:id', coursecntrlr.deletecourse)



module.exports = router;