var CommentList = React.createClass({
  render: function()  {
    return (
      <div className="commentList">
        Hello, Earthlings! I'm a CommentList.
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function()  {
    return (
      <div className="commentForm">
        Hello there! I'm a CommentForm.
      </div>
    );
  }
});
React.render(
  <CommentList />,
  // <CommentForm />,
  document.getElementById('content')
);

