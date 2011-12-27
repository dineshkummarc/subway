var OverViewView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  tagName: 'div',

  className: 'container-fluid',

  render: function(event) {
    $('.content').html($(this.el).html(ich.overview()));
    if(event === undefined) {
      $('#overview').html(ich.overview_home());   
    } else {
      var func = ich['overview_' + event.currentTarget.id];  
      $('#overview').html(func());
    }
    $('.overview_button').bind('click', jQuery.proxy(this.render, this));
    $('#connect_button').bind('click', function(){
      $('.error').removeClass('error');
      if(!$('#connect_server').val()) {
        $('#connect_server').closest('.clearfix').addClass('error');
        $('#connect_server').addClass('error');  
      }
      if(!$('#connect_nick').val()) {
        $('#connect_nick').closest('.clearfix').addClass('error');
        $('#connect_nick').addClass('error');  
      } 
      if($('#connect_nick').val() && $('#connect_server')) {
        $('form').append(ich.load_image()); 
        $('#connect_button').addClass('disabled');
      }
    });
    return this;
  }
});