import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import styles from './styles.module.css';

const { document } = window;

function Header() {
  const [find, setFind] = useState([]);
  const [categories, setCategories] = useState([]);
  // Text and link pairs for the deals menu:
  const dealsMenu = [
    ['Clearance', '#Clearance'],
    ['Weekly Ad', '#WeeklyAd'],
    ['Top Deals', '#TopDeals'],
    ['RedCard Exclusives', '#RedCardExclusives'],
    ['Target Circle Offers', '#TargetCircleOffers'],
  ];
  // Text and link pairs for the What's new menu
  const whatsNewMenu = [
    ['#TargetStyle', '#TargetStyle'],
    ['New in Beauty', '#NewInBeauty'],
    ['New in Women\'s', '#NewInWomens'],
    ['Home New Arrivals', '#HomeNewArrivals'],
    ['Fresh Fall Looks', '#FreshFallLooks'],
    ['Kids\' New Arrivals', '#KidsNewArrivals'],
    ['Target Finds', '#TargetFinds'],
  ];

  function select(e) {
    e.preventDefault();
  }

  function isHidden(elementID) {
    return document.getElementById(elementID).classList.contains(styles.hidden);
  }

  function removeHidden(idChange) {
    // eslint-disable-next-line no-undef
    if (isHidden(idChange)) {
      const bar = document.getElementById(idChange);
      bar.classList.remove(styles.hidden);
    }
  }

  function addHidden(idChange) {
    const bar = document.getElementById(idChange);
    bar.classList.add(styles.hidden);
  }

  function hideCheck(shown = []) {
    const hiders = [
      'searchFocus',
      'categoriesDD',
      'dealsDD',
      'whatsNewDD',
      'searchDD',
    ];
    const bod = document.getElementsByTagName('body')[0];
    hiders.filter((el) => shown.indexOf(el) === -1)
      .forEach((el) => {
        if (!isHidden(el)) {
          addHidden(el);
          if (el === 'searchFocus') {
            bod.classList.remove(styles.locked);
          }
        }
      });
    if (!isHidden('searchFocus') && !bod.classList.contains(styles.locked)) {
      // disableBodyScroll(document.getElementById('searchFocus'));
      bod.classList.add(styles.locked);
    }
  }

  function getMenu(route, callback) {
    axios.get(`http://ec2-18-191-153-215.us-east-2.compute.amazonaws.com:8008${route}`)
      .then((result) => {
        callback(Object.values(result.data));
      })
      .catch();
  }

  function itemsByCategory(e) {
    const cat = e.target.innerText;
    axios.get(`http://ec2-18-191-153-215.us-east-2.compute.amazonaws.com:8008/c/${cat}`)
      .then((result) => {
        const { data } = result;
        const arrayOfData = Object.values(data);
        setFind(arrayOfData);
        removeHidden('searchFocus');
      });
  }

  function populate(e) {
    const searchFor = e.target.value;
    if (searchFor.length > 0) {
      axios.get(`http://ec2-18-191-153-215.us-east-2.compute.amazonaws.com:8008/s/${searchFor}`)
        .then((result) => {
          const { data } = result;
          const arrayOfData = Object.values(data);
          arrayOfData.shift();
          setFind(arrayOfData);
        });
    }
  }

  function matchBar(idName) {
    // eslint-disable-next-line no-undef
    const bar = document.getElementById(idName);
    const dist = bar.getBoundingClientRect();
    const { left } = dist;
    const { right } = dist;
    const width = right - left;
    return { left, width };
  }

  function menuDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const anchor = e.target.closest('a');
    const idName = anchor.getAttribute('href').slice(1);
    removeHidden('searchFocus');
    removeHidden(idName);
    hideCheck(['searchFocus', idName]);
  }
  useEffect(() => {
    function handleResize(idToMatch, idToChange) {
      let { left, width } = matchBar(idToMatch);
      left += 'px';
      width += 'px';
      document.getElementById(idToChange).style.left = left;
      document.getElementById(idToChange).style.width = width;
    }
    handleResize('searchForm', 'searchDD');
    // getMenu('/categories', setCategories);
    document.getElementById('wholeNav').addEventListener('click', () => { hideCheck(); });
    window.addEventListener('resize', () => { handleResize('searchForm', 'searchDD'); });
    if (categories.length === 0) { getMenu('/categories', setCategories); }
  });
  return (
    <div className={styles.navbar} id="wholeNav">
      <nav className={styles.mainNav}>
        <a href="#navbar" className={styles.navItem}>
          <span className={styles.logoHolder}>
            <div className={styles.fill}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <path d="M12 1c6.074 0 10.999 4.925 10.999 11 0 6.074-4.925 10.999-11 10.999-6.074 0-10.999-4.925-10.999-11C1 5.925 5.925 1 12 1zm0 18.173a7.174 7.174 0 10-.001-14.347 7.174 7.174 0 000 14.347zm0-3.653a3.52 3.52 0 110-7.04 3.52 3.52 0 010 7.04z" fillRule="evenodd" />
              </svg>
            </div>
          </span>
        </a>
        <a
          href="#categoriesDD"
          className={styles.navItem}
          onClick={menuDrop}
        >
          <span>Categories</span>
          <span className={[styles.tinyArrow, styles.tinyPadding].join(' ')}>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax" viewBox="0 0 20 48" height="48" width="20" focusable="false" fill="none">
              <g strokeWidth="3.2" stroke="#eaadad" fill="none" fillRule="evenodd">
                <path d="M2 1.5l8 8 8-8m-16 44l8-8 8 8" />
              </g>
            </svg>
          </span>
        </a>
        <a
          href="#dealsDD"
          className={styles.navItem}
          onClick={menuDrop}
        >
          <span>Deals</span>
          <span className={[styles.tinyArrow, styles.tinyPadding].join(' ')}>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax" viewBox="0 0 20 48" height="48" width="20" focusable="false" fill="none">
              <g strokeWidth="3.2" stroke="#eaadad" fill="none" fillRule="evenodd">
                <path d="M2 1.5l8 8 8-8m-16 44l8-8 8 8" />
              </g>
            </svg>
          </span>
        </a>
        <a
          href="#whatsNewDD"
          className={styles.navItem}
          onClick={menuDrop}
        >
          <span>What&apos;s New</span>
          <span className={[styles.tinyArrow, styles.tinyPadding].join(' ')}>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax" viewBox="0 0 20 48" height="48" width="20" focusable="false" fill="none">
              <g strokeWidth="3.2" stroke="#eaadad" fill="none" fillRule="evenodd">
                <path d="M2 1.5l8 8 8-8m-16 44l8-8 8 8" />
              </g>
            </svg>
          </span>
        </a>
        <span className={styles.navItem}>Same Day Delivery</span>
        <div className={styles.searchHolder} id="searchBox">
          <form className={styles.searchbarForm} id="searchForm" onSubmit={select}>
            <input
              id="searchbarInput"
              type="search"
              autoCorrect="off"
              autoCapitalize="off"
              autoComplete="off"
              placeholder="Search"
              onClick={(e) => {
                e.stopPropagation();
                removeHidden('searchFocus');
                removeHidden('searchDD');
                hideCheck(['searchFocus', 'searchDD']);
              }}
              // onBlur={() => { setTimeout(() => addHidden('searchFocus'), 500); }}
              onInput={populate}
            />
          </form>
        </div>
        <a href="#accountmenu" className={styles.navItem}>
          <span className={styles.accountMenu}>
            <span className={styles.iconHolder}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <path d="M14.063 14.856c0 1.097.181 1.455.708 1.871.251.197 1.659.607 2.834.865 1.958.536 2.36 2 2.36 2A10.932 10.932 0 0112 23a10.935 10.935 0 01-7.966-3.408s.315-1.352 2.406-2c1.144-.354 2.435-.639 2.713-.838.538-.385.784-.767.784-1.913 0-.26-.217-.516-.49-1.037-.46-.878-1.159-2.101-1.159-3.601S8.558 5.58 12 5.552c3.442-.028 3.711 3.265 3.74 4.708.029 1.443-.688 2.669-1.132 3.51-.29.551-.545.82-.545 1.086zm7.77 2.267l-.648-.394a9.874 9.874 0 001.436-5.133c0-5.64-4.752-10.217-10.621-10.217-5.869 0-10.62 4.577-10.62 10.217 0 1.832.5 3.591 1.439 5.138l-.649.394a10.624 10.624 0 01-1.55-5.532C.62 5.53 5.719.62 12 .62c6.282 0 11.38 4.91 11.38 10.974a10.633 10.633 0 01-1.547 5.528z" />
              </svg>
            </span>
          </span>
          <span className={[styles.tinyArrow, styles.tinyPadding].join(' ')}>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax" viewBox="0 0 20 48" height="48" width="20" focusable="false" fill="none">
              <g strokeWidth="3.2" stroke="#eaadad" fill="none" fillRule="evenodd">
                <path d="M2 1.5l8 8 8-8m-16 44l8-8 8 8" />
              </g>
            </svg>
          </span>
          <span className={styles.accountMenuText}>
            Sign in
          </span>
        </a>
        <a href="#adbar" className={[styles.navItem, styles.iconHolder].join(' ')}>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
            <path d="M5.625 19.25c.77 0 1.375.605 1.375 1.375S6.395 22 5.625 22s-1.375-.605-1.375-1.375.605-1.375 1.375-1.375zm13 0c.77 0 1.375.605 1.375 1.375S19.395 22 18.625 22s-1.375-.605-1.375-1.375.604-1.375 1.375-1.375zM1.135 2.212l2.962.543 18.762 2.622-2.29 7.853-13.855.492.368 2.167c.094.558.55.977 1.103 1.034l.13.007H20.25v1.5H8.314a2.75 2.75 0 01-2.677-2.12l-.034-.17-.427-2.514L3.36 4.144.865 3.688l.27-1.476z" />
          </svg>
        </a>
      </nav>
      <div className={[styles.focus, styles.hidden].join(' ')} id="searchFocus">
        <div className={[styles.searchDropdown, styles.hidden].join(' ')} id="searchDD">
          {find.map((res, index) => {
            if (res[0].catName === undefined) {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <ul key={index}>
                  <li className={styles.searchItem}><h3>Categories:</h3></li>
                  {res.map((cat) => (
                    <li key={cat.CategoryID} className={styles.searchItem}>
                      <p>
                        <button
                          type="button"
                          className={styles.linkButton}
                          onClick={itemsByCategory}
                        >
                          {cat.CategoryName}
                        </button>
                      </p>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              // eslint-disable-next-line react/no-array-index-key
              <ul key={index}>
                <li className={styles.searchItem}>
                  <h3>
                    {
                    res[0].catName
                    }
                    &#58;
                  </h3>
                </li>
                {res.map(
                  (item) => (
                    <li
                      key={item.ProductID}
                      className={styles.searchItem}
                    >
                      <p>
                        <button
                          type="button"
                          className={styles.linkButton}
                          onClick={() => {
                            window.setProductid(item.ProductID);
                            document.getElementById('searchbarInput').blur();
                          }}
                        >
                          {ReactHtmlParser(item.snippet)}
                        </button>
                      </p>
                    </li>
                  ),
                )}
              </ul>
            );
          })}
        </div>
        <div
          className={[styles.searchDropdown, styles.categoriesDD, styles.hidden].join(' ')}
          id="categoriesDD"
        >
          <ul>
            <li className={styles.searchItem}><h3>Categories:</h3></li>
            {categories.map((category) => (
              <li key={category.CategoryID} className={styles.searchItem}>
                <p>
                  <button
                    type="button"
                    className={styles.linkButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      itemsByCategory(e);
                      removeHidden('searchDD');
                      hideCheck(['searchFocus', 'searchDD']);
                    }}
                  >
                    {category.CategoryName}
                  </button>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div id="dealsDD" className={[styles.menuDD, styles.dealsDD, styles.hidden].join(' ')}>
          <ul>
            {dealsMenu.map((deal, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={i} className={[styles.searchItem, styles.menuItem].join(' ')}>
                <p>
                  <a href={deal[1]}>
                    {deal[0]}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div id="whatsNewDD" className={[styles.menuDD, styles.whatsNewDD, styles.hidden].join(' ')}>
          <ul>
            {whatsNewMenu.map((whatsNew, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={i} className={[styles.searchItem, styles.menuItem].join(' ')}>
                <p>
                  <a href={whatsNew[1]}>
                    {whatsNew[0]}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.linkBar}>
        <div>
          <p className={styles.linkbarLocation_sm}>You&apos;re shopping (closes at 10pm)&#58;</p>
          <p className={styles.linkbarLocation_lg}>Austin</p>
        </div>
        <div>
          <span>
            <a href="#registry">
              Registry
            </a>
          </span>
          <span>
            <a href="#weeklyAd">
              Weekly Ad
            </a>
          </span>
          <span>
            <a href="#redCard">
              RedCard
            </a>
          </span>
          <span>
            <a href="#giftCards">
              Gift Cards
            </a>
          </span>
          <span>
            <a href="#findStores">
              Find Stores
            </a>
          </span>
          <span>
            <a href="#orders">
              Orders
            </a>
          </span>
          <span>
            <a href="#heart">
              &lt;3
            </a>
          </span>
          <span>
            <a href="#More">
              More
            </a>
          </span>
        </div>
      </div>
      <div className={[styles.adBar, styles.hidden].join(' ')}>
        <div>
          <a href="#ad">
            <div className={styles.adBarContent} />
          </a>
          <button type="button" className={styles.killAd}>
            <span>X</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
