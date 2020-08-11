import React from 'react';
import styles from './footStyles.module.css';

function Footer() {
  return (
    <div>
      <span className={[styles.h_display_flex, styles.h_flex_align_center, styles.h_flex_justify_center].join(' ')}>
        <hr className={[styles.l_container, styles.l_container_fixed].join(' ')} />
      </span>
      <span className={[styles.h_display_flex, styles.h_flex_align_center, styles.h_flex_justify_center, styles.h_margin_h_default, styles.h_margin_v_default, styles.h_text_center, styles.tinyLineHeight].join(' ')}>
        <a href="#" className={[styles.h_display_inline_block, styles.text].join(' ')}>
          <span className={[styles.h_text_sm, styles.h_text_grayDarkest].join(' ')}>
            <span className={styles.h_text_bold}>*See offer details. </span>
            Restrictions apply. Pricing, promotions and
            availability may vary by location and at Target.com.
          </span>
        </a>
      </span>
      <div className={[styles.footHolder, styles.h_padding_b_jumbo, styles.h_text_center].join(' ')}>
        <div className={styles.h_padding_t_default}>
          <div className={[styles.footMenu, styles.center, styles.h_display_inline_flex].join(' ')}>
            <div className={[styles.h_position_relative, styles.footMenuOption].join(' ')}>
              <button type="button" className={styles.footMenuButton}>
                <div className={styles.footButtonRow}>
                  <div className={styles.footButtonText}>
                    <span className={styles.h_padding_r_tiny}>Help</span>
                  </div>
                  <div className={[styles.arrowCapsule, styles.h_text_sm, styles.h_text_right, styles.h_display_flex].join(' ')}>
                    <span className={[styles.arrowBox, styles.h_margin_l_tiny].join(' ')}>
                      <span className={styles.arrowFrame}>
                        <div className={styles.fill}>
                          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                            <defs>
                              <path id="nds-Icon32a" d="M9.06 12.5l7.47-7.47-1.06-1.06-8.53 8.53 8.53 8.53 1.06-1.06z">
                              </path>
                            </defs>
                            <use transform="scale(1 -1) rotate(90 24.235 0)" />
                          </svg>
                        </div>
                      </span>
                    </span>
                  </div>


                </div>

              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Footer;
