function randomQuote() {
 $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(quote) {
        
 $('#quotes').html('&ldquo;'+quote.quoteText+'&rdquo;')
        $('#author').html(quote.quoteAuthor)
      }
    });
}
randomQuote();

//Click on the button to generate another random quote

$('#getNewQuote').click(function() {
  
    randomQuote();
   
  })
 
$("#tweet-quote").attr('href', "https://twitter.com/intent/tweet?text=" + encodeURIComponent('#Quote'));