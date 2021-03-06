'use strict';

const route = '/drivers';

let express = require('express'),
    router = express.Router(),
    controller = require('../controllers/driverController');

router.get(route, controller.list_all);
router.post(route, controller.create);

router.get(route + '/:id', controller.read);
router.put(route + '/:id', controller.update);
router.delete(route + '/:id', controller.delete);

router.get('/search' + route + '/:term', controller.search);

module.exports = router;