const router = require('express').Router();
const zomato = require('zomato');

const client = zomato.createClient({
	userKey: '6996ae303b9915892fea5cbcb3f8ecaa'
})

router.route('/italian')
	.get((req, res) => {
		client.search({
			entity_id:"278",//location id 
			entity_type:"city", // location type (city,subzone,zone , landmark, metro,group) 
			q:"italian" ,//Search Keyword 
			lat:"30.307182", //latitude 
			lon:"-97.755996", //longitude 
			count:"10", // number of maximum result to display 
			start:"1" , //fetch results after offset 
			radius:"10000" , //radius around (lat,lon); to define search area, defined in meters(M) 
			cuisines : "55" , //list of cuisine id's separated by comma 
			establishment_type : "" , //estblishment id obtained from establishments call 
			collection_id : "" , //collection id obtained from collections call 
			category :  "10" ,//	category ids obtained from categories call 
			sort : " cost,rating,real_distance" ,//choose any one out of these available choices 
			order: "asc" //	used with 'sort' parameter to define ascending(asc )/ descending(desc) 
		 
		}, function(err, result){
		    if(err){
		      return res.status(500).send(err);
		    }

		    res.json(result);
		});
	});

module.exports = router;
