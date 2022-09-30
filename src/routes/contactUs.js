const contactUs = require('express').Router();
const rules = require('../middleware/contactUsRules')
const validation = require('../middleware/validation')
const contactUsController = require('../controllers/contactUs')

contactUs.get('/', contactUsController.getDataContactUs)
contactUs.post('/', ...rules, validation, contactUsController.createContactUs)
contactUs.patch('/:id', ...rules, validation, contactUsController.editDataContactUs)
contactUs.get('/:id', contactUsController.getDataContactUsById)

contactUs.delete('/:id', contactUsController.deleteDataContactUs)

module.exports = contactUs;