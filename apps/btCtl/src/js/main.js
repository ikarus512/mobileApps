/**
* Main module.
*
* @module www/js/main
*/
"use strict";
var a = a || {};



a.brickClick=function(elem,event) {
    var elem0='.brick.b0';
    var x0=a.attr('.brick.b0','x');
    var y0=a.attr('.brick.b0','y');
    var x=a.attr(elem,'x');
    var y=a.attr(elem,'y');
    // If elem is near empty space (i.e. near '.b0')
    if((x0==x && Math.abs(y0-y)==1) || (y0==y && Math.abs(x0-x)==1)) {
        a.playSound('audio_click');

        // Swap 2 bricks (move elem to empty space):
        a.attr(elem,'x',x0);
        a.attr(elem,'y',y0);
        a.attr('.brick.b0','x',x);
        a.attr('.brick.b0','y',y);
        jQuery(elem).css({ left:a.scale(x0), top:a.scale(y0) });
        jQuery('.brick.b0').css({ left:a.scale(x), top:a.scale(y) });
    }

    // Check if game finished
    var s=0;
    jQuery('.brick').each(function(idx){
        var i = a.attr(this,'id');
        if( i != a.attr(this,'x')+a.attr(this,'y')*a.gamesize.val )
            s++;
    });
    // a.mydebug('s='+s+', t='+time+' ms');

    if(s==0) { // If game finished
        var time = ((new Date().getTime()) - a.time0)/1000;
        //a.mydebug('s='+s+', t='+time+' ms');

        // Add to records table
        a.records.add( {name: a.user.name, record: time} );

        // Show current result
        jQuery('#gamename').html(String(a.gamesize.val+'x'+a.gamesize.val));
        //jQuery('#username').html(a.user.name);
        jQuery('#userrecord').html(time);
        a.goPage("index.html#pageresult");//,{role:'dialog', transition:'fade'});
    }
};

//a.scale=function(x){ return String(a.trunc(2.5+100.0/a.gamesize.val*x))+'%'; };
a.scale=function(x){ return String(a.trunc(  (2.5+100.0/a.gamesize.val*x)/100.0*a.csz  ))+'px'; };

a.onContainerResize=function(){
    a.csz=a.trunc(0.8 * Math.min.apply(null, [jQuery(window).width(), jQuery(window).height()]));
    jQuery('.mycontainer').width(a.csz);
    jQuery('.mycontainer').height(a.csz);
    //a.mydebug('w='+jQuery('.mycontainer').width()+' h='+jQuery('.mycontainer').height()+' min='+a.csz);

    var wh=String(a.trunc(  (100.0/a.gamesize.val-5.0)/100.0*a.csz  ))+'px';
    var fs=String(a.trunc(  (100.0/a.gamesize.val-5.0)/100.0*a.csz*0.8  ))+'px';

    jQuery('.brick').each(function(idx){
        var x=jQuery(this).attr('x');
        var y=jQuery(this).attr('y');
        jQuery(this).css({ left:a.scale(x), top:a.scale(y), width:wh, height:wh, 'font-size':fs, });
    });
};

a.gameInit=function(){
    a.time0=new Date().getTime();
    a.playSound('audio_open_door');

    // Mycontainer options
    jQuery('.mycontainer').html('');
    jQuery('.mycontainer').css({ background:'url(img/container.bg.'+a.rand(10)+'.jpg)' });

    // Create bricks
    var maxwidth=String(100.0/a.gamesize.val-5.0)+'%';
    var brick_id=a.rand(10);
    for(var id=0; id<a.gamesize.val*a.gamesize.val; id++) {
        // Target place of the brick:
        // id

        // Digit on the brick:
        var i=(id+1)%(a.gamesize.val*a.gamesize.val);

        // Current place of the brick:
        // i
        var x=i % a.gamesize.val;
        var y=a.trunc(i / a.gamesize.val);

        var img='url(img/brick'+brick_id+'.png)';
        var txt=String(i);
        var border='2px solid black';
        if(i==0) { img=undefined; txt=''; border=''; }

        jQuery( '<div>', {
            'class': 'brick b'+i,
            attr: { x:x, y:y, 'id':id },
            css: {
                'max-width':         maxwidth,
                'max-height':        maxwidth,
                'background-image':  img,
                border:              border,
            },
            html: txt,
        })
        .appendTo('.mycontainer');
    }
    // In case of even size, swap last 2 bricks
    if(a.gamesize.val % 2 == 0) {
        var n1=a.gamesize.val*a.gamesize.val-1;
        var n2=n1-1;
        var x1=a.attr('.brick.b'+n1,'x');
        var y1=a.attr('.brick.b'+n1,'y');
        var x2=a.attr('.brick.b'+n2,'x');
        var y2=a.attr('.brick.b'+n2,'y');
        a.attr('.brick.b'+n1,'x',x2);
        a.attr('.brick.b'+n1,'y',y2);
        a.attr('.brick.b'+n2,'x',x1);
        a.attr('.brick.b'+n2,'y',y1);
    }
    a.onContainerResize();

    // jQuery('.brick').each(function(idx){
    //     var x=idx % a.gamesize.val;
    //     var y=a.trunc(idx / a.gamesize.val);
    //     jQuery(this).attr('x',x);
    //     jQuery(this).attr('y',y);
    //     jQuery(this).css({ left:a.scale(x), top:a.scale(y) });
    // });
};



a.onReady=function() {
    a.onContainerResize();

    a.time0=new Date().getTime();

    a.language.init();
    a.user.init();
    a.gamesize.init();
    a.records.init();

    a.click('button#startbutton', a.gameInit );
    a.click('div.brick', a.brickClick );
    a.click('button#exitbutton', a.exit );
    jQuery(document).on('pageshow','#pagegame',a.gameInit);
    jQuery(document).on('pagehide','#pagegame',function(){ a.playSound('audio_close_door'); });
    jQuery(document).on('pageshow','#pageresult',function(){ a.playSound('audio_applause'); });
    jQuery(document).on('pagebeforeshow','#pagerecords',function(){
        jQuery('span.gamesize').html(a.gamesize.str +'x'+ a.gamesize.str);
        jQuery('#tabrecords').html(a.records.html());
    });

    jQuery(window).on('resize',a.onContainerResize);

    // Flicker fix (show content only when loaded)
    jQuery('body').css('display','block');




    setInterval(function () {
        var time = ((new Date().getTime()) - a.time0)/1000;
        jQuery('.mytimer').html(time);
    }, 1000);

    app.initialize();

};

a.init();
