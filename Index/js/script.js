$(function() {
      var tabs = $( "#tabs" ).tabs();
      tabs.find( ".ui-tabs-nav" ).sortable({
      axis: "x",
      stop: function() {
        tabs.tabs( "refresh" );} 

    }); 

      

    $( "#selectable" ).selectable({
      stop: function() {
        var result = $( "#select-result" ).empty();
        $( ".ui-selected", this ).each(function() {
          var index = $( "#selectable li" ).index( this );
          result.append( " #" + ( index + 1 ) );
          console.log(index);
        });
      }
    });
    $( "#accordion" ).accordion({heightStyle: "fill"});
    $( "#accordion-resizer" ).resizable({
    minHeight: 140,
    minWidth: 200,
    resize: function() {
    $( "#accordion" ).accordion( "refresh" );}}); 
  });