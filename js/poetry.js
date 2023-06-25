$(document).ready(()=>{
    const urlAuthor='https://poetrydb.org/author'
    const optionValue=$("<option>").val('selected').text('Select Poem');

    var some= $("#formSelect").val();
    if(some==='selected'){
        $("#authorTitle").prop('disabled', true);
    }

    const getAuthor=()=>{
        $.getJSON(urlAuthor, function(data){
            var selectElement=$("#formSelect");
            $.each(data.authors, function(index, author){
                var option=$("<option>").val(author).text(author);
                selectElement.append(option);
            });
        });
    };
    getAuthor();

    $("#query-form").bind("submit", function(e){
        e.preventDefault();
        var someAuth= $("#formSelect").val();
        var someTitle= $("#authorTitle").val();
        if(someAuth==='selected' || someTitle==='selected'){
            $("#poetry-warn").text('Please select an author and choose a poem!').addClass('text-danger mb-3').show().fadeOut(3000);
        }
        var encodedUrl=encodeURIComponent(someTitle);
        var urlSearch=`https://poetrydb.org/title/${encodedUrl}`;
        $.getJSON(urlSearch, function(data){
            var selectElement=$("#poetry-body");
            $.each(data[0].lines, function(index, lines){
                var pTag=$("<p>").text(lines);
                selectElement.append(pTag).addClass('scrollspy');
            });
        });
    });

    $("#formSelect").on('change', ()=>{
        $("#authorTitle").empty().append(optionValue);
        var some= $("#formSelect").val();
        
        if(some==='selected'){
            $("#authorTitle").prop('disabled', true)
        }else{
            $("#authorTitle").prop('disabled', false)
        }

        //instead of spaces use this code in url
        var encodedSome=encodeURIComponent(some);
        var urlTitle=`https://poetrydb.org/author/${encodedSome}/title`;
        $.getJSON(urlTitle, function(data){
            var selectElement=$("#authorTitle");
            $.each(data, function(index, title){
                var option=$("<option>").val(title.title).text(title.title);
                selectElement.append(option);
            });
        });
    });
    $("#authorTitle").on('change', ()=>{
        $("#poetry-body").empty();
        $("#poetry-body").removeClass('scrollspy');
    });
});