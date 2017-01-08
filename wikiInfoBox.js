var wikipedia = require("node-wikipedia");


module.exports = {
  getVcard: function(search, cb) {
    wikipedia.page.data(search, { content: true }, function(response) {
    	// structured information on the page for Clifford Brown (wikilinks, references, categories, etc.)
      let text = JSON.stringify(response);
      let vcard_index = text.indexOf('<table class=\\"infobox vcard\\"');
      text = text.slice(vcard_index);
      vcard_index = text.indexOf('</table>');
      text = text.slice(0,vcard_index+8);
      cb(text);
    });
  }
}
