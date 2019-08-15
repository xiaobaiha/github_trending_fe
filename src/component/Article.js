import React from 'react';
import colors from '../colors.json';
class Article extends React.Component {
  render() {
    const { star, fork, link, intro, language } = this.props;
    const [ author, pro ] = link.replace('https://github.com/', '').split('/');
    const color = (colors[language] && colors[language].color) || 'black';

    return (
      <article className="Box-row">
        <div className="float-right">
          <div className="js-toggler-container js-social-container starring-container ">
            <form className="starred js-social-form" action={`/${author}/${pro}/unstar`}
              acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input
                type="hidden" name="authenticity_token"
                value="I4AQ2zoMRPkO3XfgMSfqgFfQ/UjDl4TEJymUgNLZSvYPjyAxi4OT1EvcZdo53VjATENqCtzGBD7h/z1k1pMEow==" />
              <input type="hidden" name="context" value="trending"></input>
              <button type="submit" className="btn btn-sm  js-toggler-target" aria-label="Unstar this repository"
                title={`Unstar ${author}/${pro}`}
                data-ga-click="Repository, click unstar button, action:trending#index; text:Unstar"> <svg
                  className="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14"
                  height="16" aria-hidden="true">
                  <path fillRule="evenodd"
                    d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" /></svg>
                Unstar
              </button></form>
            <form className="unstarred js-social-form" action={`/${author}/${pro}/star`}
              acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input
                type="hidden" name="authenticity_token"
                value="U/nl3fs8LKzG8XSDyPlg18detN9IANzVFChTQd3mCqRhx/mMBcvFNz3/Lp0y6FmC6sn6X0zuU3Yqi3piXzK1rg==" />
              <input type="hidden" name="context" value="trending"></input>
              <button type="submit" className="btn btn-sm  js-toggler-target" aria-label="Unstar this repository"
                title={`Star ${author}/${pro}`}
                data-ga-click="Repository, click star button, action:trending#index; text:Star"> <svg
                  className="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14"
                  height="16" aria-hidden="true">
                  <path fillRule="evenodd"
                    d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" /></svg>
                Star
              </button></form>
          </div>

        </div>

        <h1 className="h3 lh-condensed">
          <a href={link}>
            <svg className="octicon octicon-repo text-gray mr-1" viewBox="0 0 12 16" version="1.1" width="12"
              height="16" aria-hidden="true">
              <path fillRule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z" />
            </svg>
            <span className="text-normal">{author} / </span>{pro}
          </a> </h1>

        <p className="col-9 text-gray my-1 pr-4">
          {intro}
        </p>

        <div className="f6 text-gray mt-2">
          <span className="d-inline-block ml-0 mr-3">
            <span className="repo-language-color" style={{backgroundColor: color}}></span>
            <span itemProp="programmingLanguage">{language}</span>
          </span>
          <a className="muted-link d-inline-block mr-3" href={`${link}/stargazers`}>
            <svg aria-label="star" className="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14"
              height="16" role="img">
              <path fillRule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" /></svg>
            {star}
          </a>

          <a className="muted-link d-inline-block mr-3" href={`${link}/network/members`}>
            <svg aria-label="fork" className="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1"
              width="10" height="16" role="img">
              <path fillRule="evenodd"
                d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" />
            </svg>
            {fork}
          </a>
        </div>
      </article>
    );
  }
}

export default Article;