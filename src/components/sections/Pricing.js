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

const Pricing = ({
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
    title: 'Pricing',
    paragraph: 'We believe in Quality and Time.'
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

          <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="">
                <h4>Self Managed</h4>
                  <p className="text-sm mb-0">
                    - Pay per Bug
                    <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"></div>
                    - Retesting 
                    <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"></div>
                    - Pay Only for Bug
                      </p>
                      <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"></div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="">
                  <h4>Startup Model</h4>
                  <p className="text-sm mb-0">
                    - Caters to Startups
                    <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"></div>
                    - Rapid Testing 
                    <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"></div>
                    - Concentrated Testing
                    <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"></div>
                    - Support 
                    <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"></div>
                    - Time Bounded Program 
                    <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"></div>
                      </p>
                </div>

              </div>
            </div>


            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="">
                <h4>Bugclaim Managed</h4>
                  <p className="text-sm mb-0">
                    - Pay per Bug
                    <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"></div>
                    - Retesting 
                    <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"></div>
                    - Expert Triage Team
                    <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"></div>
                    - Dedicated Support Team
                    <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"></div>
                    - No Duplication No Worry
                    <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"></div>
                    - Priority Support
                    <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"></div>
                    - Priority Validations
    
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

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;