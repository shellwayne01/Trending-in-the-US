var commentId= 0;


//I like that the data doesn't persist so for now I will keep it that way.
//Can make elements persistent later by adding them to local storage or using a JSON file or
// utilizing a database. But this is not critical for me right now.
function postComment(){
  // console.log(commentId);
  // console.log(document.getElementById('userInputForm'));
  var userText = document.getElementById('userText').value;
  commentId += 1;

  var today = new Date();
  var newComment = document.createElement("div");
  var newCommentTitle = document.createElement("H3");
  var newCommentText = document.createElement("p");

  newComment.classList.add("comment");
  newCommentTitle.classList.add("commentTitle");
  newCommentText.classList.add("commentText");

  newCommentTitle.innerHTML = "Date: " + today.getMonth() +"/"
                                       + today.getDate() +"/"
                                       + today.getFullYear()
                                       + "&emsp;&emsp;&emsp;&emsp; User: " + "AnonymousUser";
  newCommentText.innerText = document.getElementById('userText').value;

  newComment.appendChild(newCommentTitle);
  newComment.appendChild(newCommentText);
  var commentsSection = document.getElementById('commentsSection');
  commentsSection.appendChild(newComment);
}


function validateForm(){
  var userText = document.forms["userInputForm"]["userText"];
  userText.value = userText.value.toString(); //light security that's probably already built in
  postComment();
}
