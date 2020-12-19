const router = require('express').Router();
const useRoutes = require('./userRoutes');
const entryRoutes = require('./entryRoutes');

router.use('/user', useRoutes);
router.use('/entries', entryRoutes);

module.exports = router