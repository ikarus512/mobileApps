/**
* Main module.
*
* @module www/js/main
*/
"use strict";
var a = a || {};

a.termViewOrders={
  "term-transcr": ["term","transcription"],
  "transcr-term": ["transcription","term"],
  "term-transl": ["term","translation"],
  "transl-term": ["translation","term"],
  "term-transcr-transl": ["term","transcription","translation"],
  "transl-term-transcr": ["translation","term","transcription"],
};

a.trainingNextView = function() {
  if(a.trainingStep===0) {
    jQuery("#mycontainer").hide();
    jQuery("#mycontainer").html('');

    var arr = a.getTermContent(a.termIndex,'div');
    jQuery("#mycontainer").append(arr.join(''));

    jQuery(".term").css("font-size",a.termFontSize);
    jQuery(".term *").css("font-size",a.termFontSize);

    jQuery("#mycontainer *").hide();
    jQuery("#mycontainer").show();
  }

  if(a.termIndex===0) {
    a.generateArrTermIndex(); // randomize terms
  }

  // Show next term view
  var curEl = jQuery('.'+a.curTermViewOrder[a.trainingStep]);
  curEl.show();
  jQuery('.'+a.curTermViewOrder[a.trainingStep]+" *").show();

  a.playSoundSprite(curEl.attr('mysndattr'));

  // Show number of topic repeats
  jQuery("#termTopicRepeats").html(Math.floor(a.termTopicRepeats/a.terms.length*100)/100);
  if(a.trainingStep===a.curTermViewOrder.length-1) { a.termTopicRepeats++; }

  // Next step
  a.trainingStep = (a.trainingStep+1) % a.curTermViewOrder.length;

  // Next term
  if(a.trainingStep===0) {
    a.termIndex = (a.termIndex+1) % a.terms.length;
  }
};

a.generateArrTermIndex = function() {
  var arr1=[];
  a.arrTermIndex=[];
  for(var i=0; i<a.terms.length; i++) { arr1.push(i); }
  if(a.termOrder.name==="seq") { // Use array of sequential indexes
    a.arrTermIndex = arr1;
  } else { // Generate array of random indexes
    while(arr1.length>0) {
      var i=a.rand(arr1.length);
      a.arrTermIndex.push(arr1.splice(i,1)[0]);
    }
  }
};

a.dataInit = function() {
  a.termIndex = 0;
  a.trainingStep = 0;

  var learnData = a.learnData.get();
  // var learnData = a.data[a.learnedLanguage.name][a.learnedTopic.name];
  a.terms = learnData.terms;

  var v = learnData["font-size"];
  if(v) a.termFontSize=v;
  else  a.termFontSize="20px";
  var v = learnData["font-family"];
  if(v) a.termFontFamily=v;
  else  a.termFontFamily="myFontDefault";

  a.curTermViewOrder=a.termViewOrders[a.termViewOrder.name];
  a.generateArrTermIndex();
  a.termTopicRepeats=0;
  //a.mydebug(a.arrTermIndex);
};

a.trainOnePageHide = function() {
  jQuery("#mycontainer").hide();
  jQuery("#mycontainer").html('');
};

a.trainAllPageHide = function() {
  jQuery("#mycontainerall").hide();
  jQuery("#mycontainerall").html('');
};

a.trainOnePageInit = function() {
  a.dataInit();

  a.trainingNextView();
};

a.trainAllPageInit = function() {
  a.dataInit();


  // Load all terms to the page
  jQuery("#mycontainerall").hide();
  jQuery("#mycontainerall").html('');
  for(a.termIndex=0; a.termIndex<a.terms.length; a.termIndex++) {
    var el = jQuery("<div class='mycontainer' style='text-align:left; margin:5px;'>");
    var arr = a.getTermContent(a.termIndex,'span');
    el.append("<span>" + arr.join(" - ") + "</span>");
    jQuery("#mycontainerall").append(el);
  }
  jQuery("#mycontainerall").show();

};

a.getTermContent = function(termIndex,span) {
  var arr=[];
  // Update term info
  for(var i=0; i<a.curTermViewOrder.length; i++) {
    var term=a.curTermViewOrder[i];
    var v=a.terms[a.arrTermIndex[a.termIndex]][term]; // Get value from data
    if(v) {

      var html='', style='', mysndattr='', newclass='';

      switch(term) {

        case "translation":
          html=v[a.interfaceLanguage.name]; // translation.ru or translation.en
          newclass+=" myFontDefault";

          var v1=a.terms[a.arrTermIndex[a.termIndex]]['translationimg'];
          if(v1) {
            html+="<img class='translation' src='"+v1+"'>";
          }
          break;

        case "term":
          html=v;
          //style+="font-family: '"+a.termFontFamily+"' !important;";
          newclass+=" "+a.termFontFamily;

          var v1=a.terms[a.arrTermIndex[a.termIndex]]['termimg'];
          if(v1) {
            html+="<img class='term' src='"+v1+"'>";
          }
          break;

        case "transcription":
          html=v;
          newclass+=" myFontDefault";

          var v1=a.terms[a.arrTermIndex[a.termIndex]]['transcriptionimg'];
          if(v1) {
            html+="<img class='transcription' src='"+v1+"'>";
          }
          var v2=a.terms[a.arrTermIndex[a.termIndex]]['transcriptionsnd'];
          if(v2) {
            mysndattr=" mysndattr='"+v2+"'";
          }
          break;

        default:
          break;

      } // switch(term)

      if(style!=='') style=" style=\""+style+"\"";

      arr.push("<"+span+" class='"+term+newclass+"'  "+style+mysndattr+">"
        + html
        + "</"+span+">"
        );

    } // if(v)

  } // for i

  return arr;
}

a.onReady=function() {
    a.learnedTopic.name = a.storage.load('learnedTopic',a.learnedTopic.name);

    a.interfaceLanguage.init();
    a.learnedTopic.init();
    a.soundopt.init();

    a.termOrder.init();
    a.termViewOrder.init();

    a.click('button#exitbutton', a.exit );

    a.click('#trainOnePage', a.trainingNextView );
    jQuery(document).on('pagebeforeshow','#trainOnePage',a.trainOnePageInit);
    jQuery(document).on('pagebeforehide','#trainOnePage',a.trainOnePageHide);
    jQuery(document).on('pagebeforeshow','#trainAllPage',a.trainAllPageInit);
    jQuery(document).on('pagebeforehide','#trainAllPage',a.trainAllPageHide);

    // Prohibit page change if topic not selected
    jQuery(document).bind('pagebeforechange', function(e, data) {
        // var to = data.toPage,
        //     from = data.options.fromPage;

        if (!a.learnData.get()) {
            var interfaceLanguage = a.interfaceLanguage ? a.interfaceLanguage.name : "en";
            alert({en: 'Choose sub-topic.', ru: 'Выберите подтему.'}[interfaceLanguage]);

            // // remove active class on button
            // // otherwise button would remain highlighted (seems not needed)
            // jQuery.mobile.activePage.find('.ui-btn-active').removeClass('ui-btn-active');

            // TODO: remove also focus (button still focused)
            // jQuery('button').blur();
            // jQuery('#tree').focus();
            // jQuery.mobile.activePage.find('#tree').focus();

            e.preventDefault();
        }
    });

  // Flicker fix (show content only when loaded)
  jQuery('body').css('display','block');
};
