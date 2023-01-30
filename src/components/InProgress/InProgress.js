import './InProgress.scss';

const InProgress = () => {
    return (
        <div className="inprogress">
            <div className="text">
                <h1>Still in progress...</h1>
            </div>

            <div className="loading">
                <div className="line-box">
                    <div className="line"></div>
                </div>
            </div>
        </div>
    );
};

export default InProgress;
