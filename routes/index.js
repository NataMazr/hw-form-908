const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.resend('ind');
})
module.exports = router;