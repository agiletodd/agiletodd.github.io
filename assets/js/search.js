jQuery(function() {
  // Initalize lunr with the fields it will be searching on. I've given title
  // a boost of 10 to indicate matches on this field are more important.
  window.idx = lunr(function () {
    this.field('id');
    this.field('title', { boost: 10 });
    this.field('author');
    this.field('category');
    this.field('snippet');
  });

  // Download the data from the JSON file we generated
  window.data = $.getJSON('/search.json');

  // Wait for the data to load and add it to lunr
  window.data.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
      window.idx.add(
        $.extend({ "id": index }, value)
      );
    });
  });

$('#search_box').on('input',function(e){
    var query = $("#search_box").val(); // Get the value for the text field

    if (!query.length)
    {
        //clear the results and get out of here if the textbox is empty
        var search_results = $("#search_results");
        search_results.empty();
        return;
    }

    var results = window.idx.search(query); // Get lunr to perform a search
    display_search_results(results); // Hand the results off to be displayed
   });

  function display_search_results(results) {
    var $search_results = $("#search_results");
    var query = $("#search_box").val();

    // Wait for data to load
    window.data.then(function(loaded_data) {

      // Are there any results?
      if (results.length) {
        $search_results.empty(); // Clear any old results

        // Iterate over the results
        results.forEach(function(result) {
          var item = loaded_data[result.ref];

          // Build a snippet of HTML for this result
          var appendString = '<dt><a href="' + item.url + '">' + item.title + '</a>';
          appendString += '<div class="category"> ' + item.category + '</div></dt>';
          appendString += '<dd class="author"> by ' + item.author + '</dd>';
          appendString += '<dd class="snippet">' + item.snippet + '</dd>';

          // Add it to the results
          $search_results.append(appendString);
        });
      } else {
        $search_results.html('<dt>No results found keep trying!</dt>');
      }
    });
  }
});
