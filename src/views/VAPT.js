import React from "react";

const VAPT = () => {
  return (
    <div style={{ padding: "120px 120px" }}>
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="service">
          <h3>Vulnerability Assessment & Penetration Testing Services</h3>
          <p>
            Our expert team can help you identify vulnerabilities in your
            systems and networks, and provide recommendations for how to address
            them.
          </p>
        </div>
        <div className="service">
          <h3>Attack Surface Monitoring (ASM)</h3>
          <p>
            We can help you stay ahead of potential attacks by monitoring your
            attack surface and alerting you to any changes or vulnerabilities.
          </p>
        </div>
        <div className="service">
          <h3>Red Teaming</h3>
          <p>
            Our experienced red team can simulate real-world attacks to help you
            identify weaknesses in your defenses and improve your overall
            security posture.
          </p>
        </div>
        <p className="services-footer">
          At BugClaim, we're committed to providing high-quality services that
          help our customers stay secure and protected in today's ever-changing
          threat landscape. Contact us today to learn more about how we can help
          you safeguard your organization.
        </p>
      </div>
    </div>
  );
};

export default VAPT;
