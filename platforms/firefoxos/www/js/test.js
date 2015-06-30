function randomNum(size){
	var num = parseInt(size);
	return Math.floor((Math.random() * (size-1)) + 0);
}

function randomTweet(){
	var size;

	var urlCount = 'http://158.170.92.253:8080/tweetCount/';

	jQuery.support.cors = true;

    $.ajax({ url: urlCount, type: 'GET', dataType: "json",
	    success: function(resultData) {
		    var numTweet = randomNum(resultData.countTweet);
		    //console.log(numTweet);
		    var urlTweet = 'http://158.170.92.253:8080/tweet/'+numTweet;

		    $.ajax({ url: urlTweet, type: 'GET', dataType: "json",
			    success: function(resultData) {
			         document.getElementById("tweetText").innerHTML = resultData.tweet;
			    },
			    error: function(xhr, status, error){
			        console.log(xhr)
			        console.log(status)
			        console.log(error)
			        console.log('Error total Tweet');
			    }

		  	});
	    },
	    error: function(xhr, status, error){
	        console.log(xhr)
	        console.log(status)
	        console.log(error)
	        console.log('Error size Tweet');
	    }
    });


}

$(document).ready(function(){
	$('#btn-refresh').click(function (event) {
		randomTweet();
	});
});