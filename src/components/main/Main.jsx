import React from "react";
import "../main/Main.css";
import { useNavigate } from "react-router-dom";

import headerIcon from "../assets/headerIcon.svg";
import headerRightIcon1 from "../assets/headerRightIcon1.svg";
import headerRightIcon2 from "../assets/headerRightIcon2.svg";
import headerRightIcon3 from "../assets/headerRightIcon3.svg";
import headerRight2Icon from "../assets/headerRight2Icon.svg";
import Aml from "../assets/dashboard/Aml.svg";
import Api from "../assets/dashboard/Api.svg";
import Audit from "../assets/dashboard/Audit.svg";
import Bulk from "../assets/dashboard/Bulk.svg";
import Company from "../assets/dashboard/Company.svg";
import Contact from "../assets/dashboard/Contact.svg";
import Dashboard from "../assets/dashboard/Dashboard.svg";
import Diligencestatus from "../assets/dashboard/Diligencestatus.svg";
import Diligenceworkflows from "../assets/dashboard/Diligenceworkflows.svg";
import Document from "../assets/dashboard/Document.svg";
import Global from "../assets/dashboard/Global.svg";
import Managedservice from "../assets/dashboard/Managedservice.svg";
import Onboarding from "../assets/dashboard/Onboarding.svg";
import Policies from "../assets/dashboard/Policies.svg";
import Reports from "../assets/dashboard/Reports.svg";
import Users from "../assets/dashboard/Users.svg";
import VladimirPutin from "../assets/VladimirPutin.svg";
import Chart from "../assets/Chart.svg";
import Uparrow from "../assets/Uparrow.svg";
import Downarrow from "../assets/Downarrow.svg";
import Rightarrow from "../assets/Rightarrow.svg";

const Main = () => {
  const navigate = useNavigate();

  const downloadHandler = () => {
    navigate("/download");
  };

  return (
    <div className="container">
      <div className="head-container">
        <div className="head-left">
          <img src={headerIcon} alt="" />
        </div>
        <div className="head-right">
          <div className="headRight1">
            <p>Dark Mode</p>
            <img src={headerRightIcon1} alt="error" />
            <img src={headerRightIcon2} alt="error" />
            <img src={headerRightIcon3} alt="error" />
          </div>
          <div className="headRight2">
            <p>Vivek Shah</p>
            <img src={headerRight2Icon} alt="error" />
          </div>
        </div>
      </div>
      <div className="body-container">
        <div className="left-container">
          <div className="side-left">
            <img src={Dashboard} alt="error" />
            <p>Dashboard</p>
          </div>
          <div className="side-left">
            <img src={Onboarding} alt="error" />
            <p>Onboarding</p>
          </div>
          <div className="side-left">
            <img src={Diligencestatus} alt="error" />
            <p>Due diligence status</p>
          </div>
          <div className="side-left">
            <img src={Global} alt="error" />
            <p>Global ID verification</p>
          </div>
          <div className="side-left">
            <img src={Company} alt="error" />
            <p>Company search</p>
          </div>
          <div className="side-left">
            <img src={Aml} alt="error" />
            <p>AML screening</p>
          </div>
          <div className="side-left">
            <img src={Document} alt="error" />
            <p>Document extraction</p>
          </div>
          <div className="side-left">
            <img src={Diligenceworkflows} alt="error" />
            <p>Due diligence workflows</p>
          </div>
          <div className="side-left">
            <img src={Bulk} alt="error" />
            <p>Bulk actions</p>
          </div>
          <div className="side-left">
            <img src={Managedservice} alt="error" />
            <p>Managed services</p>
          </div>
          <div className="side-left">
            <img src={Reports} alt="error" />
            <p>Reports</p>
          </div>
          <div className="side-left">
            <img src={Audit} alt="error" />
            <p>Audit log</p>
          </div>
          <div className="side-left">
            <img src={Users} alt="error" />
            <p>Users and Roles</p>
          </div>
          <div className="side-left">
            <img src={Policies} alt="error" />
            <p>Policies</p>
          </div>
          <div className="side-left">
            <img src={Api} alt="error" />
            <p>API references</p>
          </div>
          <div className="side-left">
            <img src={Contact} alt="error" />
            <p>Contact us</p>
          </div>
        </div>
        <div className="right-container">
          <div className="right1-container">
            <div className="right1-wrapper">
              <h3>Vladimir Vladimirovich Putin</h3>
              <p> President Of Russia</p>
              <p>Russia</p>
            </div>
            <div className="right2-wrapper">
              <button>Save for later</button>
              <button>Print</button>
              <button onClick={() => downloadHandler()}>Download</button>
            </div>
          </div>
          <div className="right-summary">
            <p>
              <strong>Summary</strong>
            </p>
            <p>Source of risk</p>
            <p>Additional Info</p>
            <p>Relationship and connection</p>
            <p>Adverse Media Screening</p>
          </div>

          <div className="right-modal">
            <div className="modal1">
              <div className="modal1-div1">
                <h4>Summary</h4>
              </div>
              <div>
                <img src={VladimirPutin} alt="error" />
              </div>
              <div className="modal1-div1-p">
                <p>
                  Sanction Program: Situation in Ukraine; Sanctions: Art. 15
                  para. 1 and 4 (Financial sanctions) and art. 29 para. 1
                  (Travel ban), annexe 8; Justification for Sanctions: Vladimir
                  Putin is the President of the Russian Federation. ; On 22 Feb
                  2022, he signed a decree recognising the "independence and
                  sovereignty" of the non-government-controlled areas of the
                  Donetsk and Luhansk oblasts of Ukraine, and ordered the
                  Russian armed forces into those areas. ; On 24 Feb 2022, he
                  ordered a military operation in Ukraine and Russian armed
                  forces began an attack on Ukraine.{" "}
                </p>
                <p>Read More</p>
              </div>
            </div>
            <div className="modal2">
              <div className="modal2-div1">
                <h4>Basic Details</h4>
              </div>
              <div className="modal2-flex">
                <p>Full name</p>
                <div>
                  <p>Vladimir Vladimirovich Putin</p>
                </div>
              </div>
              <div className="modal2-flex">
                <p>Aliases</p>
                <div className="ps-5">
                  <p>
                    PUTIN Vladimir Vladimirovich Vladimir Vladimirovich Putin
                    Vladimir PUTIN Putin Vladimir Putin
                  </p>
                </div>
              </div>
              <div className="modal2-flex">
                <p>Title</p>
                <div>
                  <p>Not Found</p>
                </div>
              </div>
              <div className="modal2-flex">
                <p>Gender</p>
                <div>
                  <p>Male</p>
                </div>
              </div>
              <div className="modal2-flex">
                <p>Nationality</p>
                <div>
                  <p>Russia</p>
                </div>
              </div>
              <div className="modal2-flex">
                <p>Date of Birth</p>
                <div>
                  <p>07 Oct 1952</p>
                </div>
              </div>
              <div className="modal2-flex">
                <p>Place of birth</p>
                <div>
                  <p>
                    Leningrad, Russia St Petersburg (then Leningrad) St.
                    Petersburg,Russia Leningrad
                  </p>
                </div>
              </div>
              <div className="modal2-flex">
                <p>Designation</p>
                <div>
                  <p>
                    Vladimir Putin President Of Russia 2nd President of Russian
                    Federation
                  </p>
                </div>
              </div>
            </div>
            <div className="modal3">
              <div className="modal3-div1">
                <h4>Risk Screening</h4>
              </div>
              <div className="modal3-flex-normal">
                <p>Risk class</p>
                <p>Screening result</p>
                <p>Risk</p>
              </div>
              <div className="modal3-flex-threat">
                <p>Sanction</p>
                <p>Match found</p>
                <p>HIGH</p>
              </div>
              <div className="modal3-flex-normal">
                <p>Crime</p>
                <p>No match found</p>
                <p>Low</p>
              </div>
              <div className="modal3-flex-threat">
                <p>PEP</p>
                <p>Match found</p>
                <p>HIGH</p>
              </div>
              <div className="modal3-flex-threat">
                <p>SIP</p>
                <p>Match found</p>
                <p>HIGH</p>
              </div>
              <div className="modal3-flex-normal">
                <p>Watchlist</p>
                <p>No match found</p>
                <p>Low</p>
              </div>
              <div className="modal3-flex-normal">
                <p>Adverse Media</p>
                <p>No match found</p>
                <p>Low</p>
              </div>
              <div className="modal3-flex">
                <img src={Chart} alt="" />
              </div>
              <div className="modal3-flex-chartdata">
                <div>
                  <p>High</p>
                  <p>51-100</p>
                </div>
                <div>
                  <p>Medium</p>
                  <p>30-50</p>
                </div>
                <div>
                  <p>Low</p>
                  <p>1-29</p>
                </div>
              </div>
            </div>
          </div>
          <div className="after-modal-row1">
            <img src={Uparrow} alt="error" />
            <p>
              <strong>Source of risk for this individual</strong>
            </p>
          </div>
          <div className="after-modal-row2">
            <div className="after-modal-row2-1">
              <img src={Uparrow} alt="error" />
              <p>
                <strong>PEP</strong>
              </p>
            </div>
            <div className="after-modal-row2-2">
              <div>
                <p>RISK</p>
              </div>
            </div>
          </div>
          <div className="after-modal-row3">
            <div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Source</th>
                    <th scope="col">Data Agency and Name</th>
                    <th scope="col"></th>
                    <th scope="col">Summary</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr>
                    <th scope="row">List Of World Leaders ByCountry</th>
                    <td>Official Government Website</td>
                    <td>
                      Vladimir Vladimirovich Putin, also known as Vladimir
                      Putin, is a renowned Politician
                    </td>
                    <td>Read More</td>
                  </tr>
                  <tr>
                    <th scope="row">Vladimir Putin</th>
                    <td>Britannica</td>
                    <td>
                      Vladimir Putin, In Full Vladimir Vladimirovich Putin,
                      (born October 7, 1952, Leningrad,
                    </td>
                    <td>Read More</td>
                  </tr>
                  <tr>
                    <th scope="row">Others</th>
                    <td>Others</td>
                    <td>
                      Vladimir Vladimirovich Putin is a Russian politician and
                      former intelligence officer
                    </td>
                    <td>Read More</td>
                  </tr>
                  <tr>
                    <th scope="row">Vladimir Putin</th>
                    <td>Britannica</td>
                    <td>
                      Vladimir Putin, In Full Vladimir Vladimirovich Putin,
                      (born October 7, 1952, Leningrad,
                    </td>
                    <td>Read More</td>
                  </tr>
                  <tr>
                    <th scope="row">List Of World Leaders ByCountry</th>
                    <td>Official Government Website</td>
                    <td>
                      Vladimir Vladimirovich Putin is a Politician in Russia.His
                      career roles are
                    </td>
                    <td>Read More</td>
                  </tr>
                  <tr>
                    <th scope="row">List Of World Leaders ByCountry</th>
                    <td>Official Government Website</td>
                    <td>
                      Vladimir Vladimirovich Putin, also known as Vladimir
                      Putin, is a renowned Politician
                    </td>
                    <td>Read More</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="after-modal-row2">
            <div className="after-modal-row2-1">
              <img src={Downarrow} alt="error" />
              <p>
                <strong>Sanction</strong>
              </p>
            </div>
            <div className="after-modal-row2-2">
              <div>
                <p>RISK</p>
              </div>
            </div>
          </div>
          <div className="after-modal-row2">
            <div className="after-modal-row2-1">
              <img src={Downarrow} alt="error" />
              <p>
                <strong>SIP</strong>
              </p>
            </div>
            <div className="after-modal-row2-2">
              <div>
                <p>RISK</p>
              </div>
            </div>
          </div>
          <div className="after-modal-row1">
            <img src={Uparrow} alt="error" />
            <p>
              <strong>Additional Information</strong>
            </p>
          </div>
          <div className="before-footer">
            <div className="row ps-3">
              <div>
                <p>Language Known</p>
              </div>
              <div className="before-footer-bottomBorder ps-3 pe-3">
                <p>Swedish, German, English, RussianRussian</p>
              </div>
            </div>
            <div className="row">
              <div className="ps-3">
                <p>Important Dates</p>
              </div>
              <div className="before-footer-bottomBorder ps-3 pe-3">
                <p>
                  Listed Date: 28/2/2022SDN List Last Updated On: 14/07/2022;
                  Non-SDN List Last Updated On: 28/06/2022
                </p>
              </div>
            </div>
            <div className="row">
              <div className="ps-3">
                <p>Education Info</p>
              </div>
              <div className="before-footer-bottomBorder ps-3 pe-3">
                <p>
                  Leningrad State University, Candidate of Economic
                  SciencesSchool 281, Saint Petersburg State University, School
                  193, Academy of Foreign Intelligence, Saint Petersburg Mining
                  University, St. Petersburg Institute of the FSB of Russia,
                  Faculty of Law, Saint Petersburg State University, FSB Academy
                </p>
              </div>
            </div>
            <div className="row">
              <div className="ps-3">
                <p>Career Info</p>
              </div>
              <div className="before-footer-bottomBorder ps-3 pe-3">
                <p>
                  Vladimir Putin President Of Russia Putin studied law at
                  Leningrad State University, where his tutor was Anatoly
                  Sobchak, later one of the leading reform politicians of the
                  perestroika period. Putin served 15 years as a foreign
                  intelligence officer for the KGB (Committee for State
                  Security), including six years in Dresden, East Germany. In
                  1990 he retired from active KGB service with the rank of
                  lieutenant colonel and returned to Russia to become prorector
                  of Leningrad State University with responsibility for the
                  institution’s external relations. Soon afterward Putin became
                  an adviser to Sobchak, the first democratically elected mayor
                  of St. Petersburg. He quickly won Sobchak’s confidence and
                  became known for his ability to get things done; by 1994 he
                  had risen to the post of first deputy mayor.;BRITANNICA
                  QUIZ;History: Fact or Fiction?;Get hooked on history as this
                  quiz sorts out the past. Find out who really invented movable
                  type, who Winston Churchill called "Mum," and when the first
                  sonic boom was heard.;In 1996 Putin moved to Moscow, where he
                  joined the presidential staff as deputy to Pavel Borodin, the
                  Kremlin’s chief administrator. Putin grew close to fellow
                  Leningrader Anatoly Chubais and moved up in administrative
                  positions. In July 1998 Pres. Boris Yeltsin made Putin
                  director of the Federal Security Service (FSB; the KGB’s
                  domestic successor), and shortly thereafter he became
                  secretary of the influential Security Council. Yeltsin, who
                  was searching for an heir to assume his mantle, appointed
                  Putin prime minister in 1999.;Although he was virtually
                  unknown, Putin’s public-approval ratings soared when he
                  launched a well-organized military operation against
                  secessionist rebels in Chechnya. Wearied by years of Yeltsin’s
                  erratic behaviour, the Russian public appreciated Putin’s
                  coolness and decisiveness under pressure. Putin’s support for
                  a new electoral bloc, Unity, ensured its success in the
                  December parliamentary elections.;Get a Britannica Premium
                  subscription and gain access to exclusive content.;Subscribe
                  Now
                  <br />
                  <br />
                  President (2012-) prime Minister (2008-2012), president
                  (2000-2008), prime Minister (1999-2000),2nd President of
                  Russian FederationPrime Minister of Russia Leader of United
                  Russia, Director of the Federal Security Service,Deputy
                  Chairman of the Government of the Russian FederationChairman
                  of the Council of CIS Heads of StateChairman of the Council of
                  CIS Heads of StatePresident of the Russian Federationparty
                  leaderPrime Minister of Russia Leader of United Russia,
                  Director of the Federal Security Service,Political Career:
                  After earning a law degree, Putin's career in politics began
                  with a 16 year stint serving in the KGB. He trained at the
                  401st KGB school in Okhta, Leningrad. After working monitoring
                  foreigners and consular officials in Leningrad, he was sent to
                  Moscow for further training at the Yuri Andropov Red Banner
                  Institute in 1984. Following that, under the cover identity of
                  a translator, he served in Dresden, East Germany from 1985 to
                  1990. He relocated to Leningrad after the collapse of the
                  Communist East German government, reconnecting with Anatoly
                  Sobchak while at his post at the International Affairs section
                  of Leningrad State University. Putin claims that on the second
                  day of the 1991 coup attempt against then-President Mikhail
                  Gorbachev, he resigned from the KGB because he did not agree
                  with what had happened and no longer wished to be part of the
                  intelligence operation of the new post-coup
                  administration.Sobchak, his former professor, soon became the
                  Mayor of Leningrad, and Putin was appointed as head of the
                  Committee for External Relations of the Mayor's Office. From
                  there, he continued to build his political career through
                  various political and governmental positions. In July 1998,
                  then-President Boris Yeltsin appointed Putin as Director of
                  the Federal Security Service (FSB), which is the successor to
                  the KGB and the primary intelligence and security organization
                  of the Russian Federation.He was appointed acting Prime
                  Minister of the Government of the Russian Federation by
                  Yeltsin on August 9, 1999, and later that day Putin agreed to
                  run for the presidency after Yeltsin stated his desire to see
                  Putin as his successor. His first Presidential term lasted
                  from 2000 – 2008. Putin was also Prime Minister of Russia from
                  1999 – 2000 and again from 2008 – 2012. Over the years Putin
                  has earned a very controversial reputation. He is frequently
                  criticized by other world leaders and political experts for
                  his handling of human rights and foreign policy issues. Many
                  westerners have called the circumstances under which he has
                  continued to hold office in Russia "undemocratic". Still,
                  Putin has been fairly popular among the Russian people ever
                  since taking over as President in 1999 following the surprise
                  resignation of Boris Yeltsin.(Photo by Peter Muhly – WPA
                  Pool/Getty Images)
                </p>
                <div className="after-modal-row1">
                  <img src={Uparrow} alt="error" />
                  <p>
                    <strong>Relationship and Connections</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="after-modal-row1">
              <img src={Uparrow} alt="error" />
              <p>
                <strong>Family and Friends</strong>
              </p>
            </div>
            <div className="after-modal-row1 d-flex justify-content-between">
              <div className="d-flex ">
                <div>
                  <img src={Rightarrow} alt="error" />
                </div>
                <div className="d-flex align-items-center ps-5">
                  <p>
                    <strong>Vladimir Spiridonovich Putin</strong>
                  </p>
                </div>
              </div>

              <div>
                <p>Father</p>
              </div>
              <div className="right-footer-color">
                <p className="pt-2 ps-2 me-2">SIP</p>
              </div>
            </div>
            <div className="after-modal-row1 d-flex justify-content-between">
              <div className="d-flex ">
                <div>
                  <img src={Rightarrow} alt="error" />
                </div>
                <div className="d-flex align-items-center ps-5">
                  <p>
                    <strong>Vladimir Spiridonovich Putin</strong>
                  </p>
                </div>
              </div>

              <div>
                <p>Mother</p>
              </div>
              <div className="right-footer-color">
                <p className="pt-2 ps-2 me-2">SIP</p>
              </div>
            </div>
            <div className="after-modal-row1 d-flex justify-content-between">
              <div className="d-flex ">
                <div>
                  <img src={Rightarrow} alt="error" />
                </div>
                <div className="d-flex align-items-center ps-5">
                  <p>
                    <strong>Lyudmila Putina</strong>
                  </p>
                </div>
              </div>

              <div>
                <p>Spouse</p>
              </div>
              <div className=" d-flex">
                <div className="right-footer-colorBrinjal">
                  <p className="pt-2 ps-2 me-2">PEP</p>
                </div>
                <div className="right-footer-colorYellow">
                  <p className="pt-2 ps-2 me-2">Sanction</p>
                </div>
                <div className="right-footer-color">
                  <p className="pt-2 ps-2 me-2">SIP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
