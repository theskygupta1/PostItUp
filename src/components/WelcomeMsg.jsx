const WelcomeMsg = ({onGetPostsClick}) => {
    return (
        <div className="welcome-msg fw-bold">
            <h1>No Posts Yet.</h1>
            <p className="welcome-subtext">
                You haven't posted anything till now.
            </p>
            <button type="button" class="btn btn-primary" onClick={onGetPostsClick}>Get Posts from the server</button>
        </div>
    );
};

export default WelcomeMsg;

