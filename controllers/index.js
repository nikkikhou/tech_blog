const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');


router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/home', homeRoutes);


router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });

module.exports = router;
