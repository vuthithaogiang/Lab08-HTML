
$.get("https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyDA2ktxtMTB0avJMHbFgg1kqM_vWWou_RU&part=snippet,statistics&fields=items(id,snippet,statistics)",
function(api){

    console.log(api);

    $('.channel-title').html('Chanel ID: ' + api.items[0].id);
    $('.viewCount').html('View count: ' +api.items[0].statistics.viewCount);
    $('.likeCount').html('Like count: ' + api.items[0].statistics.likeCount);

    $('.description').html('Description: ' + api.items[0].snippet.description);
});

