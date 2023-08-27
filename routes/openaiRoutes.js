const express = require("express");
const { summaryController, paragraphController, chatbotController, jsconverterController, scifiImageController } = require("../Controllers/openaiController");

const router = express.Router();

//route
router.post('/api/v1/openai/summary', summaryController)
router.post('/api/v1/openai/paragraph', paragraphController)
router.post('/api/v1/openai/chatbot', chatbotController)
router.post('/api/v1/openai/jsconverter', jsconverterController)
router.post('/api/v1/openai/scifi-image', scifiImageController)

module.exports = router;