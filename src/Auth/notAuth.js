import "./../css/NotAuth.css";
const NotAuth = () => {
  return (
    <div className = "auth">
    <div className="mainbox">
      <div className="err">4</div>
      <i className="far fa-question-circle fa-spin"></i>
      <div className="err2">1</div>
      <div className="msg">
        <h2>You are not Authorized</h2>
        Maybe this page moved? Got deleted? Never
        existed in the first place?
        <p>
          Let's go <a className ="round"href="/">home</a> and try from there.
        </p>
      </div>
    </div>
    </div>
  );
};

export default NotAuth;
