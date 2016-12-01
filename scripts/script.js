
function check(string, wrapper) {
    var terms = ['Ã€', 'Ã', 'Ã‚', 'Ãƒ', 'Ã„', 'Ã…', 'Ã†', 'Ã‡', 'Ãˆ', 'Ã‰', 'ÃŠ', 'Ã‹', 'ÃŒ', 'ÃŽ', 'Ã‘', 'Ã’', 
                  'Ã“', 'Ã”', 'Ã•', 'Ã–', 'Ã—', 'Ã˜', 'Ã™', 'Ãš', 'Ã›', 'Ãœ', 'Ãž', 'ÃŸ', 'Ã¡', 'Ã¢', 'Ã£', 'Ã¤', 'Ã¥', 
                  'Ã¦', 'Ã§', 'Ã¨', 'Ã©', 'Ãª', 'Ã«', 'Ã¬', 'Ã®', 'Ã¯', 'Ã°', 'Ã±', 'Ã²', 'Ã³', 'Ã´', 'Ãµ', 'Ã¶', 'Ã·', 'Ã¸', 
                  'Ã¹', 'Ãº', 'Ã»', 'Ã¼', 'Ã½', 'Ã¾', 'Ã¿'];
    var match = false;

    for(var i=0;i<terms.length && !match;i++) {

        if(string.indexOf(terms[i]) > -1) {
            match = true;
            var newString='';
            wrapper.css("background", "#a1e4ff");
            var matchString = string.substring(string.indexOf(terms[i]), (string.indexOf(terms[i])+terms[i].length));
            
            switch(matchString) {
            	case 'Ã€':
              	newString = string.replace(matchString, "À");
                break;
              case 'Ã':
              	newString = string.replace(matchString, "Á");
                break;
              case 'Ã‚':
                newString = string.replace(matchString, "Â");
                break;
              case 'Ãƒ':
                newString = string.replace(matchString, "Ã");
                break;
              case 'Ã„':
                newString = string.replace(matchString, "Ä");
                break;
              case 'Ã…':
                newString = string.replace(matchString, "Å");
                break;
              case 'Ã†':
                newString = string.replace(matchString, "Æ");
                break;
              case 'Ã‡':
                newString = string.replace(matchString, "Ç");
                break;
              case 'Ãˆ':
                newString = string.replace(matchString, "È");
                break;
              case 'Ã‰':
                newString = string.replace(matchString, "É");
                break;
              case 'ÃŠ':
                newString = string.replace(matchString, "Ê");
                break;
              case 'Ã‹':
                newString = string.replace(matchString, "Ë");
                break;
              case 'ÃŒ':
                newString = string.replace(matchString, "Ì");
                break;
              case 'ÃŽ':
                newString = string.replace(matchString, "Î");
                break;
              case 'Ã‘':
                newString = string.replace(matchString, "Ñ");
                break;
              case 'Ã’':
                newString = string.replace(matchString, "Ò");
                break;
              case 'Ã“':
                newString = string.replace(matchString, "Ó");
                break;
              case 'Ã”':
                newString = string.replace(matchString, "Ô");
                break;
              case 'Ã•':
                newString = string.replace(matchString, "Õ");
                break;
              case 'Ã–':
                newString = string.replace(matchString, "Ö");
                break;
              case 'Ã—':
                newString = string.replace(matchString, "×");
                break;
              case 'Ã˜':
                newString = string.replace(matchString, "Ø");
                break;
              case 'Ã™':
                newString = string.replace(matchString, "Ù");
                break;
              case 'Ãš':
                newString = string.replace(matchString, "Ú");
                break;
              case 'Ã›':
                newString = string.replace(matchString, "Û");
                break;
              case 'Ãœ':
                newString = string.replace(matchString, "Ü");
                break;
              case 'Ãž':
                newString = string.replace(matchString, "Þ");
                break;
              case 'ÃŸ':
                newString = string.replace(matchString, "ß");
                break;
              case 'Ã¡':
                newString = string.replace(matchString, "á");
                break;
              case 'Ã¢':
                newString = string.replace(matchString, "â");
                break;
              case 'Ã£':
                newString = string.replace(matchString, "ã");
                break;
              case 'Ã¤':
                newString = string.replace(matchString, "ä");
                break;
              case 'Ã¥':
                newString = string.replace(matchString, "å");
                break;
              case 'Ã¦':
                newString = string.replace(matchString, "æ");
                break;
              case 'Ã§':
                newString = string.replace(matchString, "ç");
                break;
              case 'Ã¨':
                newString = string.replace(matchString, "è");
                break;
              case 'Ã©':
                newString = string.replace(matchString, "é");
                break;
              case 'Ãª':
                newString = string.replace(matchString, "ê");
                break;
              case 'Ã«':
                newString = string.replace(matchString, "ë");
                break;
              case 'Ã¬':
                newString = string.replace(matchString, "ì");
                break;
              case 'Ã®':
                newString = string.replace(matchString, "î");
                break;
              case 'Ã¯':
                newString = string.replace(matchString, "ï");
                break;
              case 'Ã°':
                newString = string.replace(matchString, "ð");
                break;
              case 'Ã±':
                newString = string.replace(matchString, "ñ");
                break;
              case 'Ã²':
                newString = string.replace(matchString, "ò");
                break;
              case 'Ã³':
                newString = string.replace(matchString, "ó");
                break;
              case 'Ã´':
                newString = string.replace(matchString, "ô");
                break;
              case 'Ãµ':
                newString = string.replace(matchString, "õ");
                break;
              case 'Ã¶':
                newString = string.replace(matchString, "ö");
                break;
              case 'Ã·':
                newString = string.replace(matchString, "÷");
                break;
              case 'Ã¸':
                newString = string.replace(matchString, "ø");
                break;
              case 'Ã¹':
                newString = string.replace(matchString, "ù");
                break;
              case 'Ãº':
                newString = string.replace(matchString, "ú");
                break;
              case 'Ãº':
                newString = string.replace(matchString, "ú");
                break;
              case 'Ã»':
                newString = string.replace(matchString, "û");
                break;
              case 'Ã¼':
                newString = string.replace(matchString, "ü");
                break;
              case 'Ã½':
                newString = string.replace(matchString, "ý");
                break;
              case 'Ã¾':
                newString = string.replace(matchString, "þ");
                break;
              case 'Ã¿':
                newString = string.replace(matchString, "ÿ");
                break;
              default:
                alert('no matches');
            }

            $(".corrections").append("<li>" + newString + "</li>");
        }
    }
}

function check2(string) {
    var terms = ['Ã€', 'Ã', 'Á‚', 'Áƒ', 'Á„', 'Á…', 'Á†', 'Á‡', 'Áˆ', 'Á‰', 'ÁŠ', 'Á‹', 'ÁŒ', 'ÁŽ', 'Á‘', 'Á’', 
                  'Á“', 'Á”', 'Á•', 'Á–', 'Á—', 'Á˜', 'Á™', 'Áš', 'Á›', 'Áœ', 'Áž', 'ÁŸ', 'Á¡', 'Á¢', 'Á£', 'Á¤', 'Á¥', 
                  'Á¦', 'Á§', 'Á¨', 'Á©', 'Áª', 'Á«', 'Á¬', 'Á®', 'Á¯', 'Á°', 'Á±', 'Á²', 'Á³', 'Á´', 'Áµ', 'Á¶', 'Á·', 'Á¸', 
                  'Á¹', 'Áº', 'Á»', 'Á¼', 'Á½', 'Á¾', 'Á¿'];
    var match = false;

    for(var i=0;i<terms.length && !match;i++) {

        if(string.indexOf(terms[i]) > -1) {
            match = true;
            var newString='';
            var matchString = string.substring(string.indexOf(terms[i]), (string.indexOf(terms[i])+terms[i].length));
            
            switch(matchString) {
              case 'Ã€':
                newString = string.replace(matchString, "À");
                break;
              case 'Ã':
                newString = string.replace(matchString, "Á");
                break;
              case 'Á‚':
                newString = string.replace(matchString, "Â");
                break;
              case 'Áƒ':
                newString = string.replace(matchString, "Ã");
                break;
              case 'Á„':
                newString = string.replace(matchString, "Ä");
                break;
              case 'Á…':
                newString = string.replace(matchString, "Å");
                break;
              case 'Á†':
                newString = string.replace(matchString, "Æ");
                break;
              case 'Á‡':
                newString = string.replace(matchString, "Ç");
                break;
              case 'Áˆ':
                newString = string.replace(matchString, "È");
                break;
              case 'Á‰':
                newString = string.replace(matchString, "É");
                break;
              case 'ÁŠ':
                newString = string.replace(matchString, "Ê");
                break;
              case 'Á‹':
                newString = string.replace(matchString, "Ë");
                break;
              case 'ÁŒ':
                newString = string.replace(matchString, "Ì");
                break;
              case 'ÁŽ':
                newString = string.replace(matchString, "Î");
                break;
              case 'Á‘':
                newString = string.replace(matchString, "Ñ");
                break;
              case 'Á’':
                newString = string.replace(matchString, "Ò");
                break;
              case 'Á“':
                newString = string.replace(matchString, "Ó");
                break;
              case 'Á”':
                newString = string.replace(matchString, "Ô");
                break;
              case 'Á•':
                newString = string.replace(matchString, "Õ");
                break;
              case 'Á–':
                newString = string.replace(matchString, "Ö");
                break;
              case 'Á—':
                newString = string.replace(matchString, "×");
                break;
              case 'Á˜':
                newString = string.replace(matchString, "Ø");
                break;
              case 'Á™':
                newString = string.replace(matchString, "Ù");
                break;
              case 'Áš':
                newString = string.replace(matchString, "Ú");
                break;
              case 'Á›':
                newString = string.replace(matchString, "Û");
                break;
              case 'Áœ':
                newString = string.replace(matchString, "Ü");
                break;
              case 'Áž':
                newString = string.replace(matchString, "Þ");
                break;
              case 'ÁŸ':
                newString = string.replace(matchString, "ß");
                break;
              case 'Á¡':
                newString = string.replace(matchString, "á");
                break;
              case 'Á¢':
                newString = string.replace(matchString, "â");
                break;
              case 'Á£':
                newString = string.replace(matchString, "ã");
                break;
              case 'Á¤':
                newString = string.replace(matchString, "ä");
                break;
              case 'Á¥':
                newString = string.replace(matchString, "å");
                break;
              case 'Á¦':
                newString = string.replace(matchString, "æ");
                break;
              case 'Á§':
                newString = string.replace(matchString, "ç");
                break;
              case 'Á¨':
                newString = string.replace(matchString, "è");
                break;
              case 'Á©':
                newString = string.replace(matchString, "é");
                break;
              case 'Áª':
                newString = string.replace(matchString, "ê");
                break;
              case 'Á«':
                newString = string.replace(matchString, "ë");
                break;
              case 'Á¬':
                newString = string.replace(matchString, "ì");
                break;
              case 'Á®':
                newString = string.replace(matchString, "î");
                break;
              case 'Á¯':
                newString = string.replace(matchString, "ï");
                break;
              case 'Á°':
                newString = string.replace(matchString, "ð");
                break;
              case 'Á±':
                newString = string.replace(matchString, "ñ");
                break;
              case 'Á²':
                newString = string.replace(matchString, "ò");
                break;
              case 'Á³':
                newString = string.replace(matchString, "ó");
                break;
              case 'Á´':
                newString = string.replace(matchString, "ô");
                break;
              case 'Áµ':
                newString = string.replace(matchString, "õ");
                break;
              case 'Á¶':
                newString = string.replace(matchString, "ö");
                break;
              case 'Á·':
                newString = string.replace(matchString, "÷");
                break;
              case 'Á¸':
                newString = string.replace(matchString, "ø");
                break;
              case 'Á¹':
                newString = string.replace(matchString, "ù");
                break;
              case 'Áº':
                newString = string.replace(matchString, "ú");
                break;
              case 'Á»':
                newString = string.replace(matchString, "û");
                break;
              case 'Á¼':
                newString = string.replace(matchString, "ü");
                break;
              case 'Á½':
                newString = string.replace(matchString, "ý");
                break;
              case 'Á¾':
                newString = string.replace(matchString, "þ");
                break;
              case 'Á¿':
                newString = string.replace(matchString, "ÿ");
                break;
              default:
                alert('no matches');
            }

            $(".corrections2").append("<li>" + newString + "</li>");
        }
    }
}

$(document).ready(function() {

  $('textarea').focusout(function() {
    var x = $(this).val();
    $('.orig-list').html(x.replace(/\n(?!>)/g, '<li>'));
  });

  $('#down').click(function() {
    $('.orig-list li').each(function() {
        var phrase = $(this).text(); 
        var matchHighlight = $(this);    
        check(phrase, matchHighlight);  
    });

    $('.corrections li').each(function() {
        var phrase = $(this).text();    
        check2(phrase);  
    });
  });
});
