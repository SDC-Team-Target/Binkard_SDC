import React from 'react';

import styles from './styles.module.css';

function Search() {
  function matchBar() {
    // eslint-disable-next-line no-undef
    const bar = document.getElementById('searchForm');
    const dist = bar.getBoundingClientRect();
    const { left } = dist;
    const { right } = dist;
    const width = right - left;
    console.log(left, ' to ', right);
    return { left, width };
  }
  return (
    <div className={styles.focus} id="searchFocus">
      <div className={styles.searchDropdown} style={matchBar()}>
        Hello World!
      </div>
    </div>
  );
}

export default Search;
