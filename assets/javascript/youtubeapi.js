function searchQuery(searchTerm) {
  console.log('serarchTer',searchTerm)
var ytQueryURL = "https://www.googleapis.com/youtube/v3/search";
var ytAPIKey = "AIzaSyBscjeiTtWmqjgcV3Xoz67fgf-sW-hDPIY";
var clientId = "AIzaSyBscjeiTtWmqjgcV3Xoz67fgf-sW-hDPIY";
var queryURL = "https://www.googleapis.com/youtube/v3/search";
var options = {
  part: "snippet",
  key: clientId,
  maxResults: 5,
  q: searchTerm,
  // videoCategoryId: "Gaming",
  //videos are sorted from highest to lowest rating.
  // order: "title",
  regionCode: "US",
  relevanceLanguage: "en",
  topicID: "/m/0bzvm2",
  type: "video"
};

return {queryURL, options};

};
