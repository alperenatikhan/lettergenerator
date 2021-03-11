import React from "react";
import "./message.css";

class Message extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="fullMessage">
        <h2>
          {" "}
          Dear {this.props.gender} {this.props.firstname} {this.props.surname}
        </h2>
        <p>
          {" "}
          We are a team of entrepreneurs, experts and managers based in{" "}
          <strong>Hamburg/Germany</strong>. Our goal is to carry our strategic
          plans into real life by maintaining close cooperation with our
          business partners and introducing new investors to our ever-growing
          sector. Our strategic objectives are strengthening our base in
          Hamburg, initiating branches and franchises in other German cities.{" "}
        </p>

        <p>
          We wrote you this email for introducing the{" "}
          <strong>
            investment opportunities in the health and medical care sector in
            Germany
          </strong>
          . Based on our 3 years of active business experience in Hamburg, we
          can give you four most important reasons for investing in the health
          and medical care sector.
        </p>
        <ul>
          <li>
            <p>
              {" "}
              For the aging German society, the health and medical care sector
              remain as an <strong>ever-growing market</strong>. Unlike the
              other sectors during the{" "}
              <strong> long-periods of lockdowns </strong>, the Covid-19
              pandemic did not impact the health and medical care sector. The
              demand for our medical services in nursing has{" "}
              <strong>UNEXPECTEDLY</strong> risen to a higher level. During the{" "}
              <strong>Covid-19 pandemic</strong> we found resources for
              realizing our most ambitious business projects and even we had a{" "}
              <strong>
                hard time responding to the rapidly rising demand from the
                patients
              </strong>
              .{" "}
            </p>
          </li>
          <li>
            <p>
              {" "}
              While in Germany, almost all citizens and residents are insured by
              either public or private companies, our sector is{" "}
              <strong>
                not likely to face a shortage of funds or a slowing-down in
                cash-flow
              </strong>
              . As we cooperate closely with the public and private insurance
              companies, the cost for our services is{" "}
              <strong> ALWAYS paid in-time.</strong>{" "}
            </p>
          </li>
          <li>
            <p>
              {" "}
              Working with public and private insurance companies also enables
              us to report all of our financial activities easily and
              transparently. We make use of this advantage by providing{" "}
              <strong>regular reports</strong> for our business partners and tax
              offices.
            </p>
          </li>
          <li>
            <p>
              {" "}
              Last but not least,
              <strong>the medical care and health sector</strong> remains a{" "}
              <strong>highly prestigious sector</strong>. In our social lives,
              we gained the <strong>TRUST</strong> of people by caring for their
              elder and providing jobs for the youth. We feel that our hard work
              also brought its fruits in our relations with hospitals, insurance
              companies, banks, and local authorities.{" "}
            </p>
          </li>
        </ul>
        <p>
          {" "}
          As an energetic team of entrepreneurs, experts and managers, we are
          ready to give detailed information about our business activities and
          strategic plans in the short and long term. We would like to represent
          our detailed business concepts and cooperate with the groups which are
          under your leadership. Our enterprise would be a proud candidate for
          your future partnership.
        </p>
        <h3> Best Regards, </h3>
      </div>
    );
  }
}

export default Message;
