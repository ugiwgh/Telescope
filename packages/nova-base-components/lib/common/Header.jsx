import Telescope from 'meteor/nova:lib';
import React from 'react';
//import { Messages } from "meteor/nova:core";

const Header = (props, {currentUser}) => {
  
  const logoUrl = Telescope.settings.get("logoUrl");
  const siteTitle = Telescope.settings.get("title", "Nova");
  const tagline = Telescope.settings.get("tagline");

  return (
    <div className="header-wrapper">

      <header className="header">

        <div className="logo">
          <Telescope.components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
          {tagline ? <h2 className="tagline">{tagline}</h2> : "" }
        </div>
        
        <div className="nav">
          
          <div className="nav-user">
            {currentUser ? <Telescope.components.UsersMenu/> : <Telescope.components.UsersAccountMenu/>}
          </div>

          <div className="nav-new-post">
            <Telescope.components.PostsNewButton/>
          </div>

        </div>

      </header>
    </div>
  )
}

Header.displayName = "Header";

Header.contextTypes = {
  currentUser: React.PropTypes.object,
};

module.exports = Header;
