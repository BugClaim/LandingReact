import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Startingbb = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Starting a Bug Bounty Program is Simple',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <span className="testimonial-item-name text-color-high">Define</span>  
              <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"></div>
                <div className="">
                  <p className="text-sm mb-0">
                  Start your security program within one hour with our intuitive interface, predefined templates and intelligent reward recommendations. Access hackers profiles and choose the most suitable ones for each Bug Bounty program or crowdsourced pentest.
                      </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner"><span className="testimonial-item-name text-color-high">Analyze</span>
              <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                </div>
                <div className="">
                  <p className="text-sm mb-0">
                  Take advantage of collaborative capabilities to interact with hackers about their submitted reports and speed up triage. Use the dashboards to monitor all your programs, vulnerabilities and budgets.
                      </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <span className="testimonial-item-name text-color-high">Remediate</span>
              <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"></div>
                <div className="">
                  <p className="text-sm mb-0">
                  Increase your productivity by receiving only Validated vulnerabilities reports; with a higher acceptance rate and better accuracy. Seamlessly integrate vulnerabilities information into your development tools like Gitlab, Jira or by using our API.
                      </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Startingbb.propTypes = propTypes;
Startingbb.defaultProps = defaultProps;

export default Startingbb;