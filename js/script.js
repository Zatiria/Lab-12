words1 = [
    'next', 'fish', 'age', 'player', 'white',
    'age', 'three', 'chest', 'after', 'jacket',
    'job', 'cucumber', 'eagle', 'holiday', 'bag'
];
answers1 = [
    'наступний', 'риба', 'вік', 'гравець', 'білий',
    'вік', 'три', 'скриня', 'після', 'куртка',
    'робота', 'огірок', 'орел', 'свято', 'сумка'
];

words2 = [
    'maple', 'skill', 'tool', 'seminary', 'writ',
    'noon', 'hint', 'enough', 'hope', 'dairy',
    'deaf', 'thick', 'arrive', 'sapling', 'cash'
];
answers2 = [
    'клен', 'навичка', 'інструмент', 'семінарія', 'запис',
    'північ', 'підказка', 'досить', 'надія', 'молочний',
    'глухий', 'товстий', 'прибути', 'саджанець', 'готівка'
];

words3 = [
    'cradle', 'ostrich', 'sedulous', 'verdure', 'ajar',
    'dagger', 'tureen', 'bloat', 'maladroit', 'discomfit',
    'soothsayer', 'ballast', 'ruthless', 'awry', 'pastiche'
];
answers3 = [
    'колиска', 'страус', 'засмучений', 'зелень', 'прочинений', 
    'кинджал', 'супниця', 'здуття', 'незграбний', 'бентежити', 
    'віщун', 'баласт', 'безжальний ', 'косий', 'стилізація'
];

random = '';

$('#level1').prop("checked", true)

level = words1;
answers = answers1;

function Generate()
{
    random = Math.floor(Math.random() * answers.length);
    $('#word').text(level[random]);
}

$(document).ready(Generate());

$('.level').click(function(){
    if($('#level1').is(':checked'))
    {   
        level = words1;
        answers = answers1; 
    }
    else if($('#level2').is(':checked'))
    {   
        level = words2;
        answers = answers2; 
    }
    else if($('#level3').is(':checked'))
    {   
        level = words3; 
        answers = answers3;
    }

    $('#button').text('Розпочати заново');
});

$('#button').click(function() {
    if( $('#button').text() == "Перевірити")
    {
        var answer = $('#answer').val();
        answer = answer.toLowerCase();
        if(answer == answers[random])
        {
            var right = $('#right').text();
            $('#right').text(Number(right) + 1);
        }
        else
        {
            var wrong = $('#wrong').text();
            $('#wrong').text(Number(wrong) + 1);
        }
        var raund = $('#raund').text();
        if(raund < 10)
        {
            $('#raund').text(Number(raund) + 1);
            $('#answer').val('');
            Generate();
        }
        else
        {
            $('#word').html('Рівень завдання: ' + $('input[name="lev"]:checked').val() + 
            '<br>Вірно переведених слів: ' + $('#right').text() + 
            '<br>Невірно переведених слів: ' + $('#wrong').text());
            $('#button').text('Розпочати заново');
            $('#answer').val('');
        }
    }
    else
    {
        $('#raund').text('1');
        $('#right').text('0');
        $('#wrong').text('0');
        $('#button').text('Перевірити');
        Generate();
    }
});