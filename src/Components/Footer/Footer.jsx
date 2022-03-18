import React from 'react';

function Footer(){
    return(
        <footer className="footer">
        <div className="footer-header">social media presence ✅</div>
        <ul className="social-links list-non-bullet">
          <li className="list-items-inline">
            <a className="link" href="https://github.com/varnita619"> <i className="fab fa-github" aria-hidden="true"
              title="github"></i>github</a>
          </li>
          <li className="list-items-inline">
            <a className="link" href="https://twitter.com/VarnitaMakrari1"> <i className="fab fa-twitter" aria-hidden="true"
              title="twitter"></i> twitter</a>
          </li>
          <li className="list-items-inline">
            <a className="link" href="https://www.linkedin.com/in/varnita-makrariya-307177191/"> <i className="fab fa-linkedin"
              aria-hidden="true" title="linkedin"></i> linkedin</a>
          </li>
        </ul>
      </footer>

    )
}

export {Footer}


