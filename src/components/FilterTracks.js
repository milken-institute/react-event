import React from 'react';

const FilterTracks = () => {

    return (
        <div className="form-group filter-sidebar-1 margin-bottom-40">
            <div className="external">
            <span className="bold caption pull-left block-title">Tracks</span>
            <span className="pull-right setting">
                <a>Select all |</a>
                <a> None</a>
            </span>
            </div>
            <div className="text-left filter">													
                <table>
                    <tbody>
                        <tr>
                        <td><input type="checkbox" className="icheck" data-checkbox="icheckbox_square-red"/></td>
                        <td className="filter-desc"><span className="bold">Business & Industry</span></td>
                        <td><span className="count bold pull-right">7</span></td>
                        </tr>    
                    </tbody>
                </table>
            </div>
            <div className="text-left filter">
                <table>
                    <tbody>
                        <tr>
                        <td><input type="checkbox" className="icheck" data-checkbox="icheckbox_square-red"/></td>
                        <td className="filter-desc"><span className="bold">Captial Access & Economic Opportunity</span></td>
                        <td><span className="count bold pull-right">11</span></td>
                        </tr>    
                    </tbody>
                </table>
            </div>
            <div className="text-left filter">
                <table>
                    <tbody>
                        <tr>
                        <td><input type="checkbox" className="icheck" data-checkbox="icheckbox_square-red"/></td>
                        <td className="filter-desc"><span className="bold">Diversity, Equality & Inclusion</span></td>
                        <td><span className="count bold pull-right">9</span></td>
                        </tr>    
                    </tbody>
                </table>                													
            </div>
            <div className="text-left filter">													
                <table>
                    <tbody>
                        <tr>
                        <td><input type="checkbox" className="icheck" data-checkbox="icheckbox_square-red"/></td>
                        <td className="filter-desc"><span className="bold">Financial Markets</span></td>
                        <td><span className="count bold pull-right">121</span></td>
                        </tr>    
                    </tbody>
                </table>     
            </div>
            <div className="text-left filter">													
                <table>
                    <tbody>
                        <tr>
                        <td><input type="checkbox" className="icheck" data-checkbox="icheckbox_square-red"/></td>
                        <td className="filter-desc"><span className="bold">Health & Medical Research</span></td>
                        <td><span className="count bold pull-right">68</span></td>
                        </tr>    
                    </tbody>
                </table>     
            </div>
            <div className="filter-more">
                <i className="fa fa-chevron-down"></i>
            </div>                                                                                
        </div>
    )
};
export default FilterTracks;