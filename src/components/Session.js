import React from 'react';
const Session = () => {

    return (
        <div className="session">
            <div className="session-header">
                <div className="from-time first-row"><span>4:00 PM</span></div>
                <div className="session-title text-left"><span className="bold">Keeping the American Dream Alive</span></div>
                <div className="session-view-toggle"><a className="more">VIEW MORE</a><a className="less">VIEW LESS</a></div>
            </div>
            <div className="session-body">
                <div className="session-mid"><div className="from-time first-row"><span>to</span></div></div>
                <div className="session-detail">
                    <div className="from-time first-row"><span>12:00 PM</span></div>
                    <div className="session-title text-left">
                        <div className="session-detail-desc form-group">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Duis mollis, est non commodo luctus, nisi erat porttitor ligula integer posuere erat a ante.</span>
                        </div>
                        <div className="peoples margin-bottom-20">
                            <p className="people-role bold">Moderatator</p>
                            <div className="profiles">
                                <div className="avatar text-center">
                                    <img src="/assets/images/avatars/1.jpg" className="img-circle"/>
                                </div>
                                <div className="profile-desc">
                                    <p><a href="/profile">Michael Milken</a></p>
                                    <p>Chairman, Milken Institude</p>
                                </div>
                            </div>
                        </div>
                        <div className="peoples margin-bottom-20">
                            <p className="people-role bold">Speakers</p>
                            <div className="profiles">
                                <div className="avatar text-center">
                                    <img src="/assets/images/avatars/2.jpg" className="img-circle"/>
                                </div>
                                <div className="profile-desc">
                                    <p><a href="/profile">Vladislav Peter</a></p>
                                    <p>Chairman, Milken Institude</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};
export default Session;