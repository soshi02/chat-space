$(function() {
  function buildHTML(message) {
    if (message.image) {
      var html = 
        `<div class = "message">
          <div class ="chat-main__message-list__box">
            <div class ="chat-main__message-list__box__name">
              ${message.user_name}
            </div>
            <div class ="chat-main__message-list__box__date">
              ${message.created_at}
            </div>
          </div>
          <div class ="chat-main__message-list__box__text">
              ${message.content}
            <img src=${message.image}
          </div>
        </div>`
      return html;
    } else {
      var html =
      `<div class = "message">
        <div class ="chat-main__message-list__box">
          <div class ="chat-main__message-list__box__name">
            ${message.user_name}
          </div>
          <div class ="chat-main__message-list__box__date">
            ${message.created_at}
          </div>
        </div>
        <div class ="chat-main__message-list__box__text">
            ${message.content}
        </div>
      </div>`
      return html;
    };
  }
  $("#new_message").on("submit", function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".chat-main__message-list").append(html);
      $(".chat-main__message-list").animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $(".form__submit").attr("disabled",false);
      $("form")[0].reset();
    })
    .fail(function() {
      alert("メッセージを送信に失敗しました");
    });
  });
});