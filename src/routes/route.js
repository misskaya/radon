const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { size } = require('lodash');
//const externalModule = require('../logger/logger')
const _ = require('lodash');



const router = express.Router();
//const kranti = require('../logger/logger')
const date = require('../util/helper');
const trim=require('../validator/formatter');
router.get('/test-me', function (req, res) {
    //console.log('The constant in logger route has a value '+externalModule.endpoint)
    //console.log('The current batch is '+externalModule.batch)
    //externalModule.log()
    //res.send('My first ever api!')
    //kranti.welcome()
    date.mydate()
    date.mymonth()
    date.getbatchinfo()
    trim.trim()
    trim.changetoLowercase()
    trim.changetoUppercase()


});
//assignment on use of lodash function
    

router.get('/hello', function (req, res) {
    let list=_.chunk(["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"],3);

    console.log(list)
    //using tail function
    let array=[1,3,5,7,9,11,15,17,19,21]
    let newArray = _.tail(array);
    console.log(newArray)
    //using union function
    let mergeArray=_.union([1,2,3],[2,3,4],[5,6,4],[6,4,3],[8,5,4]);
    console.log(mergeArray)
    //fromPairs function
    let finalArray=_.fromPairs([["horror","TheShining"],["drama","Titanic"],["thriller","Shultter Isaland"],["fantacy","pans Labyrinth"]]);
    console.log(finalArray)
    res.send('hello there!')
});

router.get('/movies',function (req, res) {
    let cinema =['Rang de basanti','The shining','Lord of the rings','Batman begins']
    res.send(cinema)
})
router.get('/movies/:inddexNumber' , function(req,res){
    let movies = ['Rang de basanti', 'The shining' , 'Lord of the rings',  'Batman begins']
    let displayMoive
    if(req.params.inddexNumber < movies.length){
        displayMoive = movies[req.params.inddexNumber]
    }else{
        displayMoive = "use a valid index number"
    }
    
    res.send(displayMoive)
})
router.get('/films', function(req,res){
    const films =  [ {
          "id": 1,
          "name": "The Shining"
         }, {
          "id": 2,
          "name": "Incendies"
         }, {
          "id": 3,
          "name": "Rang de Basanti"
         }, {
          "id": 4,
          "name": "Finding Nemo"
         }]
      res.send(films)      
  })
module.exports = router;
// adding this comment for no reason