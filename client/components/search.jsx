import React from 'react';

import styles from './styles.module.css';

function Search(props) {
  const { find } = props;
  function matchBar() {
    // eslint-disable-next-line no-undef
    const bar = document.getElementById('searchForm');
    const dist = bar.getBoundingClientRect();
    const { left } = dist;
    const { right } = dist;
    const width = right - left;
    return { left, width };
  }
  return (
    <div className={styles.focus} id="searchFocus">
      <div className={styles.searchDropdown} style={matchBar()}>
        {find.map((res) => <li key={res.id}>{res}</li>)}
      </div>
    </div>
  );
}

export default Search;
