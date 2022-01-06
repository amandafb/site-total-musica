function enviaEmail(){
  var self = this;
			
  $('#contact-form').submit( function() {
    
    var form = $(this);
    
    var nameInput = $('#input-name');
    var name = nameInput.val();

    var emailInput = $('#input-email');
    var email = emailInput.val();
    
    var phoneInput = $('#input-phone');
    var phone = phoneInput.val();
    
    var subject = $('#input-subject').val();
    
    var messageInput = $('#input-message');
    var message = messageInput.val();
    
    if( $.trim( name ) == '' ) {
      nameInput.focus();
      return false;
    } 
      
    if( $.trim( email ) == '' || !self.isValidEmailAddress( email ) ) {
      emailInput.focus();
      return false;
    } 
      
    if( $.trim( message ) == '' ) {
      messageInput.focus();
      return false;
    } 
      
    $.ajax({
      url: 'contact-form.php',
      type: "POST",
      data: {
        'name' : name,
        'email' : email,
        'phone' : phone,
        'subject' : subject,
        'message' : message
      },
      beforeSend: function() {
        $('#contact-form input, #contact-form textarea, #contact-form button').attr('disabled', 'disabled');
        $('#contact-form').fadeTo(500, '0.7');
      },
      success: function() {
    
        form.html( '<h4>Your message has been sent. Thank you!</h4>' ).css('opacity', '1');
    
      }
    });
    
    return false;
  });
}