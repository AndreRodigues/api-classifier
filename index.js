import express from 'express';
import natural from 'natural';
import cors from 'cors'
const app = express()

app.use(
  express.json(),
  cors()
)

app.post('/', async (req, res) => {

  const { text } = req.body;

  console.log(text)

  natural.BayesClassifier.load('./classifierModel.json', null, function(err, classifier) {
    const textClassifier = classifier.classify(text)
    
    console.log(textClassifier)
      return res.status(200).json({
        message: textClassifier,
    })
  })

  
})

app.listen(4000, () => {
  console.log('funcionando!')
});