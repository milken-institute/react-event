import React from 'react';
import { useEffect } from 'react';
import WordSearch from '../components/WordSearch';
import FilterDates from '../components/FilterDates';
import FilterTracks from '../components/FilterTracks'
import ProgramDay from '../components/ProgramDay';
import Session from '../components/Session';
import Footer from '../components/Footer';

import $ from 'jquery';

const ProfileContainer = () => {
    useEffect(() => {
        $(".toggle-program-a").click(function(){
          $(this).parent().parent().next().slideToggle();
          $(this).toggleClass("extended");
        });
        $(".session-view-toggle a").click(function(){
          $(this).parent().parent().next().slideToggle();
          $(this).parent().toggleClass("view-more");
        });
    }, []);
    return (
        <div className="App">
          <div className="main">
            <div className="profile-header">
              <div className="container">
                <p className="season text-left">MEA Summit 2020</p>
                <p className="name text-left">Raymond Dailo</p>
              </div>
            </div>
            <div className="profile-body">
              <div className="container">
                <p className="detail-role text-left bold margin-bottom-20">Speaker's Biography</p>
                <div className="profile-detail">
                  <div className="photo">
                    <img src="/assets/images/avatars/1.jpg"/>
                  </div>
                  <div className="profile-desc">
                    <p className="small-name text-left">Raymond Dailo</p>
                    <p className="full-role text-left margin-bottom-40">Co-Chairman and Co-Chief Investment Officer, Bridgewater Associates</p>
                    <p className="text-left intro margin-bottom-20">I am a senior web designer and developer based in Ukraine, Europe. I have been working and developing online websites and platforms since completing various kinds of projects.I have 8 + years of experience working as a JavaScript/TypeScript, Core PHP/PHP Framework, and windows desktop application. I am ready to start working for you today.My type is "To provide the best quality, commitment & communication to our clients!". I can help you to provide the HIGH QUALITY of the task under my powerful SERVICE.It's important to me to build long term relationships with clients, so I'm primarily looking for long term projects. I'm flexible with my working hours and am happy to work closely.</p>
                    <p className="detail-role text-left bold margin-bottom-30">Panels</p>
                    <div className="extra-info text-left margin-bottom-40">
                      <p>Meet the Author: Ray Dailo</p>
                      <p>Opening Plenary | Part 1: A Conversation with His Excellency Khaldoon Khalifa Al Mubarak and Michael Milken | Part 2: Global Overview</p>
                    </div>
                    <button type="button" className="btn blue margin-bottom-40">RETURN TO SPEAKERS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    );
}
export default ProfileContainer;