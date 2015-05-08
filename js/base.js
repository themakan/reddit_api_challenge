var response;

$(document).ready(function(){

  getLaughs();

});

function getLaughs() {
  // Make Api Request
  // response = mock_response; // this is hard coded in js/mock_response.js
  // renderGallery(response);

  var endpoint = "http://www.reddit.com/r/funny.json";
  $.getJSON(endpoint, renderGallery)


  // And when the reponse comes back...

}

function renderGallery(response) {
    var $gallery = $('#gallery');
    var length = response.data.children.length

    for (var i=0; i<length; i++) {
      var item_data = response.data.children[i].data;

      // let's see what we've got
      console.log("here's the first item in the reddit api response object:",
                  item_data);

      // now, let's build the raw html for our item
      var item_html = (
                        "<div class='item'>" +
                          "<img src='" + item_data.thumbnail + "'>" +
                          "<h3>" + item_data.title + "</h3>" +
                        "</div>"
                      );

      // and add it to the DOM!
      $gallery.append(item_html);
    }


  
}
