var settings = {
  "url": "https://workflow-automation.podio.com/catch/g06gh8cy8mv73kd",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json",
    "Cookie": "AWSALB=YXz9Y67i77DFURPraWZS2oHlu8rBX0CJ1MJGgkAezYaRu7QzANBTLcGEGyRC+43i/k4JgVxQ+pkeyymS/G4gjjLzwL7P6uXuW4/DndPagbn9rPb0TknYvIv9jJ2i; AWSALBCORS=YXz9Y67i77DFURPraWZS2oHlu8rBX0CJ1MJGgkAezYaRu7QzANBTLcGEGyRC+43i/k4JgVxQ+pkeyymS/G4gjjLzwL7P6uXuW4/DndPagbn9rPb0TknYvIv9jJ2i; PHPSESSID=c61a76ab9d800b68d04ffbd31b450a63"
  },
  "data": "{\r\n    \"email\":YYanl@thermotemp.com,\r\n    \"campaign\":pressure,\r\n    \"current-date\":Thu Mar 09 2023 11:33:03 GMT-0600 (Central Standard Time)\r\n}",
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
