import React from "react";
import styles from "./footStyles.module.css";

function Footer() {
  return (
    <div className={styles.wholeFooter}>
      <span
        className={[
          styles.h_display_flex,
          styles.h_flex_align_center,
          styles.h_flex_justify_center,
        ].join(" ")}
      >
        <hr
          className={[styles.l_container, styles.l_container_fixed].join(" ")}
        />
      </span>
      <span
        className={[
          styles.h_display_flex,
          styles.h_flex_align_center,
          styles.h_flex_justify_center,
          styles.h_margin_h_default,
          styles.h_margin_v_default,
          styles.h_text_center,
          styles.tinyLineHeight,
        ].join(" ")}
      >
        <a
          href="#warning"
          className={[styles.h_display_inline_block, styles.text].join(" ")}
        >
          <span
            className={[styles.h_text_sm, styles.h_text_grayDarkest].join(" ")}
          >
            <span className={styles.h_text_bold}>*See offer details. </span>
            Restrictions apply. Pricing, promotions and availability may vary by
            location and at Target.com.
          </span>
        </a>
      </span>
      <div
        className={[
          styles.footHolder,
          styles.h_padding_b_jumbo,
          styles.h_text_center,
        ].join(" ")}
      >
        <div className={styles.h_padding_t_default}>
          <div
            className={[
              styles.footMenu,
              styles.center,
              styles.h_display_inline_flex,
            ].join(" ")}
          >
            <div
              className={[
                styles.h_position_relative,
                styles.footMenuOption,
              ].join(" ")}
            >
              <button type="button" className={styles.footMenuButton}>
                <div className={styles.footButtonRow}>
                  <div className={styles.footButtonText}>
                    <span className={styles.h_padding_r_tiny}>Help</span>
                  </div>
                  <div
                    className={[
                      styles.arrowCapsule,
                      styles.h_text_sm,
                      styles.h_text_right,
                      styles.h_display_flex,
                    ].join(" ")}
                  >
                    <span
                      className={[styles.arrowBox, styles.h_margin_l_tiny].join(
                        " "
                      )}
                    >
                      <span className={styles.arrowFrame}>
                        <div className={styles.fill}>
                          <svg
                            className={[styles.fill, styles.svgFill].join(" ")}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ display: "block" }}
                          >
                            <path
                              className={styles.transformed90}
                              id="nds-Icon32a"
                              d="M9.06 12.5l7.47-7.47-1.06-1.06-8.53 8.53 8.53 8.53 1.06-1.06z"
                            />
                          </svg>
                        </div>
                      </span>
                    </span>
                  </div>
                </div>
              </button>
            </div>
            <div
              className={[
                styles.h_position_relative,
                styles.footMenuOption,
              ].join(" ")}
            >
              <button type="button" className={styles.footMenuButton}>
                <div className={styles.footButtonRow}>
                  <div className={styles.footButtonText}>
                    <span className={styles.h_padding_r_tiny}>Stores</span>
                  </div>
                  <div
                    className={[
                      styles.arrowCapsule,
                      styles.h_text_sm,
                      styles.h_text_right,
                      styles.h_display_flex,
                    ].join(" ")}
                  >
                    <span
                      className={[styles.arrowBox, styles.h_margin_l_tiny].join(
                        " "
                      )}
                    >
                      <span className={styles.arrowFrame}>
                        <div className={styles.fill}>
                          <svg
                            className={[styles.fill, styles.svgFill].join(" ")}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ display: "block" }}
                          >
                            <path
                              className={styles.transformed90}
                              id="nds-Icon32a"
                              d="M9.06 12.5l7.47-7.47-1.06-1.06-8.53 8.53 8.53 8.53 1.06-1.06z"
                            />
                          </svg>
                        </div>
                      </span>
                    </span>
                  </div>
                </div>
              </button>
            </div>
            <div
              className={[
                styles.h_position_relative,
                styles.footMenuOption,
              ].join(" ")}
            >
              <button type="button" className={styles.footMenuButton}>
                <div className={styles.footButtonRow}>
                  <div className={styles.footButtonText}>
                    <span className={styles.h_padding_r_tiny}>Apps</span>
                  </div>
                  <div
                    className={[
                      styles.arrowCapsule,
                      styles.h_text_sm,
                      styles.h_text_right,
                      styles.h_display_flex,
                    ].join(" ")}
                  >
                    <span
                      className={[styles.arrowBox, styles.h_margin_l_tiny].join(
                        " "
                      )}
                    >
                      <span className={styles.arrowFrame}>
                        <div className={styles.fill}>
                          <svg
                            className={[styles.fill, styles.svgFill].join(" ")}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ display: "block" }}
                          >
                            <path
                              className={styles.transformed90}
                              id="nds-Icon32a"
                              d="M9.06 12.5l7.47-7.47-1.06-1.06-8.53 8.53 8.53 8.53 1.06-1.06z"
                            />
                          </svg>
                        </div>
                      </span>
                    </span>
                  </div>
                </div>
              </button>
            </div>
            <div
              className={[
                styles.h_position_relative,
                styles.footMenuOption,
              ].join(" ")}
            >
              <button type="button" className={styles.footMenuButton}>
                <div className={styles.footButtonRow}>
                  <div className={styles.footButtonText}>
                    <span className={styles.h_padding_r_tiny}>Social</span>
                  </div>
                  <div
                    className={[
                      styles.arrowCapsule,
                      styles.h_text_sm,
                      styles.h_text_right,
                      styles.h_display_flex,
                    ].join(" ")}
                  >
                    <span
                      className={[styles.arrowBox, styles.h_margin_l_tiny].join(
                        " "
                      )}
                    >
                      <span className={styles.arrowFrame}>
                        <div className={styles.fill}>
                          <svg
                            className={[styles.fill, styles.svgFill].join(" ")}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ display: "block" }}
                          >
                            <path
                              className={styles.transformed90}
                              id="nds-Icon32a"
                              d="M9.06 12.5l7.47-7.47-1.06-1.06-8.53 8.53 8.53 8.53 1.06-1.06z"
                            />
                          </svg>
                        </div>
                      </span>
                    </span>
                  </div>
                </div>
              </button>
            </div>
            <div
              className={[
                styles.h_position_relative,
                styles.footMenuOption,
              ].join(" ")}
            >
              <button type="button" className={styles.footMenuButton}>
                <div className={styles.footButtonRow}>
                  <div className={styles.footButtonText}>
                    <span className={styles.h_padding_r_tiny}>More</span>
                  </div>
                  <div
                    className={[
                      styles.arrowCapsule,
                      styles.h_text_sm,
                      styles.h_text_right,
                      styles.h_display_flex,
                    ].join(" ")}
                  >
                    <span
                      className={[styles.arrowBox, styles.h_margin_l_tiny].join(
                        " "
                      )}
                    >
                      <span className={styles.arrowFrame}>
                        <div className={styles.fill}>
                          <svg
                            className={[styles.fill, styles.svgFill].join(" ")}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ display: "block" }}
                          >
                            <path
                              className={styles.transformed90}
                              id="nds-Icon32a"
                              d="M9.06 12.5l7.47-7.47-1.06-1.06-8.53 8.53 8.53 8.53 1.06-1.06z"
                            />
                          </svg>
                        </div>
                      </span>
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <hr className={styles.whiteBorder} />
          <a href="#covid" className={styles.covidAlert}>
            <div className={styles.covidAlertDiv}>
              <h4 className={styles.covidAlertText}>
                The latest on our store health and safety plans
              </h4>
              <span className={styles.covidSvgHolder}>
                <div className={styles.fullSize}>
                  <svg
                    className={styles.fullSize}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5z" />
                      <path
                        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.75 7.75V18h-1.5V9.75h1.5zM12 6.5a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24z"
                        fill="#666"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                </div>
              </span>
            </div>
          </a>
          <div>
            <ul
              className={[
                styles.h_display_inline_block,
                styles.tinyFooterUl,
              ].join(" ")}
            >
              <li className={[styles.tinyFooterLi, styles.h_text_sm].join(" ")}>
                <a href="#recalls">Recalls</a>
              </li>
              <li className={[styles.tinyFooterLi, styles.h_text_sm].join(" ")}>
                <a href="#terms">Terms</a>
              </li>
              <li className={[styles.tinyFooterLi, styles.h_text_sm].join(" ")}>
                <a href="#interestBasedAds">Interest-Based Ads</a>
              </li>
              <li className={[styles.tinyFooterLi, styles.h_text_sm].join(" ")}>
                <a href="#CAPrivacyRights">CA Privacy Rights</a>
              </li>
              <li className={[styles.tinyFooterLi, styles.h_text_sm].join(" ")}>
                <a href="CASupplyChainAct">CA Supply Chain Act</a>
              </li>
              <li className={[styles.tinyFooterLi, styles.h_text_sm].join(" ")}>
                <a href="privacy">Privacy</a>
              </li>
              <li className={[styles.tinyFooterLi, styles.h_text_sm].join(" ")}>
                <a href="#doNotSellMyInfo" className={styles.h_text_bold}>
                  Do Not Sell My Info - CA Resident Only
                </a>
              </li>
            </ul>
            <ul
              className={[
                styles.h_display_inline_block,
                styles.tinyFooterUl,
              ].join(" ")}
            >
              <li className={[styles.tinyFooterLi, styles.h_text_sm].join(" ")}>
                ™ & © 2020 Target Brands, Inc.
              </li>
            </ul>
          </div>
          <div className={styles.h_display_inline_block}>
            <a href="#targetProxy">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 257 135"
                height="100"
                width="140"
              >
                <path d="M0 111.8h12.9v3.2H3.8v3.7h8.4v2.9H3.8v4.3h9.3v3.2H0zM18.6 122.5l-4.1-5.9h3.9l2.2 3.2 2.2-3.2h3.8l-4.1 5.8 4.6 6.7h-3.9l-2.6-4-2.6 4h-3.9zM28.2 116.6h3.3v1.6c.8-1.3 2.2-2 3.7-1.9 3.8 0 5.7 3 5.7 6.7 0 3.4-1.9 6.5-5.5 6.5-1.5 0-2.9-.7-3.8-1.9v5.9h-3.4v-16.9zm9.2 6.3c0-1.9-.7-4-3-4-1.9 0-2.9 1.5-2.9 4 0 2.3.9 4 3 4s2.9-1.8 2.9-4M42 122.8c0-3.8 2.6-6.6 6.4-6.6 4 0 6.1 3.1 6.1 6.8v.7h-9c.1 2.2 1.1 3.2 3 3.2 1.3 0 2.5-.8 2.7-1.6h3c-.9 2.8-2.9 4.2-5.8 4.2-4-.1-6.4-2.8-6.4-6.7m9-1.3c-.3-1.9-1.2-2.6-2.8-2.6-1.5-.1-2.7 1-2.8 2.4v.2H51zM55.7 123c0-4 2.4-6.8 6.4-6.8 3.2 0 5.7 1.7 5.9 4.7h-3.4c-.1-1.3-1.2-2.2-2.4-2.2h-.1c-2.1 0-2.9 2-2.9 4.1s.8 4 2.9 4c1.5 0 2.5-.9 2.7-2.5h3.3c-.5 3.3-2.7 5.1-6 5.1-3.9 0-6.4-2.8-6.4-6.4M70.7 126.2v-7.3h-2.1v-2.3h2.1v-3.8h3.4v3.8h2.5v2.3h-2.5v6.2c0 1.2.3 1.4 1.5 1.4.4 0 .7 0 1.1-.1v2.7c-.7.1-1.3.1-2 .1-2.7 0-4-.8-4-3M85.4 111.8h5.3l4.1 11.9 3.9-11.9h5.3v17.3h-3.6v-12.3l-4.2 12.3h-3L89 117v12.1h-3.6zM105.7 122.8c0-4 2.5-6.6 6.5-6.6s6.5 2.6 6.5 6.6-2.6 6.6-6.5 6.6-6.5-2.6-6.5-6.6m9.5 0c0-2-.7-4-3.1-4-1.9 0-3 1.5-3 4s1.1 4 3 4c2 0 3.1-1.5 3.1-4M120 116.6h3.3v2.3c.7-1.6 2.2-2.6 4-2.6.3 0 .5 0 .8.1v3.2c-.4-.1-.8-.1-1.2-.1-2.5 0-3.4 1.7-3.4 4v5.6H120v-12.5zM128.3 122.8c0-3.8 2.6-6.6 6.4-6.6 4 0 6.1 3.1 6.1 6.8v.7h-9c.1 2.2 1.1 3.2 3 3.2 1.3 0 2.5-.8 2.7-1.6h3c-.9 2.8-2.9 4.2-5.8 4.2-3.9-.1-6.3-2.8-6.4-6.7m9.1-1.3c-.3-1.9-1.2-2.6-2.8-2.6-1.5-.1-2.7 1-2.8 2.4v.2h5.6zM141.9 127.2c-.1-1.1.8-2.1 1.9-2.2 1.1-.1 2.1.8 2.2 1.9v.2c0 1.1-.9 2-2 2-1.2.2-2.1-.7-2.1-1.9M154.7 111.8h7.8c4 0 5.9 2.5 5.9 5.5s-2 5.5-5.9 5.5h-4v6.2h-3.8v-17.2zm6.8 8.1c2.2 0 3.3-.7 3.3-2.6 0-1.8-1-2.6-3.2-2.6h-3v5.2h2.9zM168.9 125.7c-.1-1 .3-2 1.1-2.6.8-.7 2-1 4-1.3 2.2-.2 3.2-.4 3.2-1.5 0-1.4-1-1.7-2.2-1.7-1.4 0-2.2.6-2.3 1.9h-3.4c.1-2.7 2.4-4.2 5.9-4.2 3.7 0 5.5 1.2 5.5 3.6v6c0 .8.1 1 .9 1h.1v2.2c-.4.2-.9.3-1.4.3-1.6 0-2.4-.5-2.7-1.6-.8 1-2.3 1.7-4.4 1.7-2.6-.1-4.3-1.4-4.3-3.8m8.3-1.4V123c-.3.3-.9.5-2.1.6-1.8.2-2.8.6-2.8 2 0 1 .6 1.6 2.1 1.6 1.8-.1 2.8-1.1 2.8-2.9M182.6 133.3v-2.8c.6.1 1.2.1 1.8.1.8 0 1.5-.6 1.5-1.4v-.2c0-.3 0-.5-.1-.8l-4.4-11.7h3.7l2.8 8.6 2.7-8.6h3.6l-5.2 14.1c-.7 2-1.9 2.8-4.3 2.8-.7.1-1.4 0-2.1-.1M201.5 111.8h3.8v14.1h8.4v3.2h-12.2zM214.5 122.8c0-3.8 2.6-6.6 6.4-6.6 4 0 6.1 3.1 6.1 6.8v.7h-9c.1 2.2 1.1 3.2 3 3.2 1.3 0 2.5-.8 2.7-1.6h3c-.9 2.8-2.9 4.2-5.8 4.2-4-.1-6.4-2.8-6.4-6.7m9-1.3c-.3-1.9-1.2-2.6-2.8-2.6-1.5-.1-2.7 1-2.8 2.4v.2h5.6zM227.7 125h3.3c0 1.4 1.2 2.1 2.6 2.1 1.2 0 2.3-.5 2.3-1.6 0-.9-1.1-1.4-3.8-1.9-2.9-.6-4.1-1.6-4.1-3.4 0-2.6 1.9-4 5.4-4 3.4 0 5.3 1.4 5.5 4h-3.3c-.1-1.2-.9-1.7-2.3-1.7-1.3 0-1.9.4-1.9 1.2 0 .8.7 1.2 2.7 1.6 2.5.5 3.5.9 4.2 1.5.6.6 1 1.4 1 2.3 0 3.2-2.8 4.3-5.7 4.3-3.4 0-5.8-1.4-5.9-4.4M240.1 125h3.3c0 1.4 1.2 2.1 2.6 2.1 1.2 0 2.2-.5 2.2-1.6 0-.9-1.1-1.4-3.8-1.9-2.9-.6-4.1-1.6-4.1-3.4 0-2.6 1.9-4 5.4-4 3.4 0 5.3 1.4 5.5 4h-3.3c-.1-1.2-.9-1.7-2.3-1.7s-1.9.4-1.9 1.2c0 .8.8 1.2 2.7 1.6 2.5.5 3.5.9 4.2 1.5.6.6 1 1.4 1 2.3 0 3.2-2.8 4.3-5.7 4.3-3.3 0-5.7-1.4-5.8-4.4M252.7 127.2c-.1-1.1.8-2.1 1.9-2.2 1.1-.1 2.1.8 2.2 1.9v.2c0 1.1-.9 2-2 2-1.1.2-2-.7-2.1-1.9" />
                <g fill="#C00">
                  <path d="M96.3 32.5C96.3 14.7 110.7.3 128.5.3s32.2 14.4 32.2 32.2c0 17.8-14.4 32.2-32.2 32.2-17.8.1-32.2-14.4-32.2-32.2zM128.5 54c11.9 0 21.5-9.6 21.5-21.5S140.4 11 128.5 11 107 20.6 107 32.5 116.6 54 128.5 54zm10.7-21.5c0 5.9-4.8 10.7-10.7 10.7-5.9 0-10.7-4.8-10.7-10.7 0-5.9 4.8-10.7 10.7-10.7 5.9 0 10.7 4.8 10.7 10.7z" />
                  <path d="M101.8 68.9v3.8h2.5V75h-2.5v6.3c0 1.2.3 1.5 1.5 1.5.4 0 .7 0 1.1-.1v2.7c-.7.1-1.4.1-2.1.1-2.6 0-4-.8-4-3.1V75h-2.1v-2.3h2.1v-3.8h3.5zM116.9 82.1c0 .8.1 1 .9 1h.1v2.3c-.4.2-.9.3-1.4.3-1.6 0-2.4-.5-2.7-1.6-.8 1-2.3 1.7-4.4 1.7-2.6 0-4.3-1.3-4.3-3.8-.1-1 .3-2 1.1-2.7.8-.7 2-1 4.1-1.3 2.3-.3 3.2-.4 3.2-1.6 0-1.4-1-1.7-2.2-1.7-1.4 0-2.2.6-2.3 1.9h-3.5c.1-2.8 2.4-4.2 5.9-4.2 3.7 0 5.5 1.2 5.5 3.6v6.1zm-6.3 1.3c1.9 0 2.8-1 2.8-2.9v-1.3c-.3.3-.9.5-2.1.6-1.8.2-2.8.6-2.8 2 0 1 .6 1.6 2.1 1.6zM126.9 72.5v3.2c-.4-.1-.8-.1-1.2-.1-2.5 0-3.4 1.7-3.4 4.1v5.7h-3.5V72.7h3.3V75c.7-1.6 2.3-2.7 4-2.7.3.1.5.1.8.2zM136.1 74.4v-1.7h3.3v11.9c0 3.3-1.9 5.6-6.5 5.6-2.9 0-5.4-1.5-5.6-4.1h3.5c.3 1.2 1.2 1.7 2.6 1.7 1.8 0 2.8-1.1 2.8-3.1V83c-.8 1.3-2.3 2.1-3.8 2-3.6 0-5.4-2.6-5.4-6.4 0-3.2 1.9-6.3 5.4-6.3 1.4 0 2.9.8 3.7 2.1zm-3 8c1.9 0 3-1.5 3-3.5 0-1.8-.5-3.9-3-3.9-1.8 0-2.8 1.5-2.8 3.6s.8 3.8 2.8 3.8zM153 79.3v.7h-9.1c.1 2.2 1.1 3.2 3.1 3.2 1.3 0 2.5-.8 2.8-1.6h3.1c-.9 2.9-2.9 4.3-5.9 4.3-4 0-6.5-2.8-6.5-6.6 0-3.9 2.6-6.7 6.5-6.7 3.8-.2 6 2.9 6 6.7zm-3.5-1.6c-.3-1.9-1.2-2.7-2.8-2.7-1.5-.1-2.8 1-2.9 2.5v.2h5.7zM158.2 68.9v3.8h2.5V75h-2.5v6.3c0 1.2.3 1.5 1.5 1.5.4 0 .7 0 1.1-.1v2.7c-.7.1-1.4.1-2.1.1-2.6 0-4-.8-4-3.1V75h-2.1v-2.3h2.1v-3.8h3.5z" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
