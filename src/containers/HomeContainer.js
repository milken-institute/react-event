import React from 'react';
import { useEffect } from 'react';
import WordSearch from '../components/WordSearch';
import FilterDates from '../components/FilterDates';
import FilterTracks from '../components/FilterTracks'
import ProgramDay from '../components/ProgramDay';
import Session from '../components/Session';
import Footer from '../components/Footer';

import $ from 'jquery';

const HomeContainer = () => {
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
            <div className="container">
              <div className="row margin-bottom-40 margin-top-10">
                <div className="sidebar col-md-3 col-sm-5">
                  <button className="btn btn-primary">HIDE FILTERS</button>
                </div>
                <div className="col-md-9 col-sm-7">
                  <div className="row">
                    <div className="col-md-6 form-horizontal">
                      <div className="form-group">
                        <label className="col-md-3 control-label">Format :</label>
                        <div className="col-md-9">
                          <select className="form-control">
                            <option>Session name only</option>
                            <option>Name and short summary</option>
                            <option>Session details</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <button className="btn btn-primary">PRINT THIS FORMAT</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row margin-bottom-40 margin-top-10">
                <div className="sidebar col-md-3 col-sm-5">
                  <div className="form-group">
                    <span className="bold caption">236 Sessions</span>
                  </div>
                  <WordSearch/>
                  <FilterDates />
                  <FilterTracks/>
                </div>
                <div className="col-md-9 col-sm-7">
                  <div className="portlet day-program">
                    <ProgramDay />
                    <div className="portlet-body">
                      <Session />
                    </div>
                  </div>
                  <div className="portlet day-program">
                    <ProgramDay />
                    <div className="portlet-body">
                      <Session />
                      <Session />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    );
}
export default HomeContainer;