import type { NextPage } from "next";
import Image from "next/image";
import { AdminLayout } from "@layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faMars,
  faSearch,
  faUsers,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  Dropdown,
  ProgressBar,
} from "react-bootstrap";
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import {
  faCcAmex,
  faCcApplePay,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React, { useEffect } from "react";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler
);

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const Home: NextPage = () => {

  return (
    <AdminLayout>
      <div className="row">
        <div className="col-md-12">
          <Card className="mb-4">
            <Card.Header>Traffic &amp; Sales</Card.Header>
            <Card.Body>
              <div className="row">
                <div className="col-sm-6">
                  <div className="row">
                    <div className="col-6">
                      <div className="border-start border-4 border-info px-3 mb-3">
                        <small className="text-black-50">New Clients</small>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="border-start border-4 border-danger px-3 mb-3">
                        <small className="text-black-50">
                          Recurring Clients
                        </small>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </div>
                  </div>

                  <hr className="mt-0" />

                  <div className="row mb-4 align-items-center">
                    <div className="col-3">
                      <span className="text-black-50 small">Monday</span>
                    </div>
                    <div className="col">
                      <ProgressBar
                        className="progress-thin mb-1"
                        variant="primary"
                        now={34}
                      />
                      <ProgressBar
                        className="progress-thin"
                        variant="danger"
                        now={78}
                      />
                    </div>
                  </div>

                  <div className="row mb-4 align-items-center">
                    <div className="col-3">
                      <span className="text-black-50 small">Tuesday</span>
                    </div>
                    <div className="col">
                      <ProgressBar
                        className="progress-thin mb-1"
                        variant="primary"
                        now={56}
                      />
                      <ProgressBar
                        className="progress-thin"
                        variant="danger"
                        now={94}
                      />
                    </div>
                  </div>

                  <div className="row mb-4 align-items-center">
                    <div className="col-3">
                      <span className="text-black-50 small">Wednesday</span>
                    </div>
                    <div className="col">
                      <ProgressBar
                        className="progress-thin mb-1"
                        variant="primary"
                        now={12}
                      />
                      <ProgressBar
                        className="progress-thin"
                        variant="danger"
                        now={67}
                      />
                    </div>
                  </div>

                  <div className="row mb-4 align-items-center">
                    <div className="col-3">
                      <span className="text-black-50 small">Thursday</span>
                    </div>
                    <div className="col">
                      <ProgressBar
                        className="progress-thin mb-1"
                        variant="primary"
                        now={43}
                      />
                      <ProgressBar
                        className="progress-thin"
                        variant="danger"
                        now={91}
                      />
                    </div>
                  </div>

                  <div className="row mb-4 align-items-center">
                    <div className="col-3">
                      <span className="text-black-50 small">Friday</span>
                    </div>
                    <div className="col">
                      <ProgressBar
                        className="progress-thin mb-1"
                        variant="primary"
                        now={22}
                      />
                      <ProgressBar
                        className="progress-thin"
                        variant="danger"
                        now={73}
                      />
                    </div>
                  </div>

                  <div className="row mb-4 align-items-center">
                    <div className="col-3">
                      <span className="text-black-50 small">Saturday</span>
                    </div>
                    <div className="col">
                      <ProgressBar
                        className="progress-thin mb-1"
                        variant="primary"
                        now={53}
                      />
                      <ProgressBar
                        className="progress-thin"
                        variant="danger"
                        now={82}
                      />
                    </div>
                  </div>

                  <div className="row mb-4 align-items-center">
                    <div className="col-3">
                      <span className="text-black-50 small">Sunday</span>
                    </div>
                    <div className="col">
                      <ProgressBar
                        className="progress-thin mb-1"
                        variant="primary"
                        now={9}
                      />
                      <ProgressBar
                        className="progress-thin"
                        variant="danger"
                        now={69}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="row">
                    <div className="col-6">
                      <div className="border-start border-4 border-warning px-3 mb-3">
                        <small className="text-black-50">Pageviews</small>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="border-start border-4 border-success px-3 mb-3">
                        <small className="text-black-50">Organic</small>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </div>
                  </div>

                  <hr className="mt-0" />

                  <div className="mb-5">
                    <div className="mb-3">
                      <div className="d-flex mb-1">
                        <div>
                          <FontAwesomeIcon
                            className="me-2"
                            icon={faMars}
                            fixedWidth
                          />
                          Male
                        </div>
                        <div className="ms-auto fw-semibold">43%</div>
                      </div>
                      <ProgressBar
                        className="progress-thin"
                        variant="warning"
                        now={43}
                      />
                    </div>

                    <div className="mb-3">
                      <div className="d-flex mb-1">
                        <div>
                          <FontAwesomeIcon
                            className="me-2"
                            icon={faVenus}
                            fixedWidth
                          />
                          Female
                        </div>
                        <div className="ms-auto fw-semibold">37%</div>
                      </div>
                      <ProgressBar
                        className="progress-thin"
                        variant="warning"
                        now={37}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        <FontAwesomeIcon
                          className="me-2"
                          icon={faSearch}
                          fixedWidth
                        />
                        Organic Search
                      </div>
                      <div className="ms-auto fw-semibold me-2">191.235</div>
                      <div className="text-black-50 small">(56%)</div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="success"
                      now={56}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        <FontAwesomeIcon
                          className="me-2"
                          icon={faFacebookF}
                          fixedWidth
                        />
                        Facebook
                      </div>
                      <div className="ms-auto fw-semibold me-2">51.223</div>
                      <div className="text-black-50 small">(15%)</div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="success"
                      now={15}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        <FontAwesomeIcon
                          className="me-2"
                          icon={faTwitter}
                          fixedWidth
                        />
                        Twitter
                      </div>
                      <div className="ms-auto fw-semibold me-2">37.564</div>
                      <div className="text-black-50 small">(11%)</div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="success"
                      now={11}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        <FontAwesomeIcon
                          className="me-2"
                          icon={faLinkedinIn}
                          fixedWidth
                        />
                        LinkedIn
                      </div>
                      <div className="ms-auto fw-semibold me-2">27.319</div>
                      <div className="text-black-50 small">(8%)</div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="success"
                      now={8}
                    />
                  </div>
                </div>
              </div>

              <br />

              <div className="table-responsive">
                <table className="table border mb-0">
                  <thead className="table-light fw-semibold">
                    <tr className="align-middle">
                      <th className="text-center">
                        <FontAwesomeIcon icon={faUsers} fixedWidth />
                      </th>
                      <th>User</th>
                      <th>Usage</th>
                      <th className="text-center">Payment Method</th>
                      <th>Activity</th>
                      <th aria-label="Action" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="align-middle">
                      <td className="text-center">
                        <div className="avatar avatar-md d-inline-flex position-relative">
                          <Image
                            width={128}
                            height={128}
                            className="rounded-circle"
                            src="/assets/img/avatars/1.jpg"
                            alt="user@email.com"
                          />
                          <span className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white" />
                        </div>
                      </td>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-black-50">
                          <span>New</span> | Registered: Jan 1, 2020
                        </div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-start">
                            <div className="fw-semibold">50%</div>
                          </div>
                          <div className="float-end">
                            <small className="text-black-50">
                              Jun 11, 2020 - Jul 10, 2020
                            </small>
                          </div>
                        </div>
                        <ProgressBar
                          className="progress-thin"
                          variant="success"
                          now={50}
                        />
                      </td>
                      <td className="text-center">
                        <FontAwesomeIcon icon={faCcAmex} size="lg" fixedWidth />
                      </td>
                      <td>
                        <div className="small text-black-50">Last login</div>
                        <div className="fw-semibold">10 sec ago</div>
                      </td>
                      <td>
                        <Dropdown align="end">
                          <Dropdown.Toggle
                            as="button"
                            bsPrefix="btn"
                            className="btn-link rounded-0 text-black-50 shadow-none p-0"
                            id="action-user1"
                          >
                            <FontAwesomeIcon
                              fixedWidth
                              icon={faEllipsisVertical}
                            />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Info
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Edit
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-danger"
                              href="#/action-3"
                            >
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr className="align-middle">
                      <td className="text-center">
                        <div className="avatar avatar-md d-inline-flex position-relative">
                          <Image
                            width={128}
                            height={128}
                            className="rounded-circle"
                            src="/assets/img/avatars/2.jpg"
                            alt="user@email.com"
                          />
                          <span className="avatar-status position-absolute d-block bottom-0 end-0 bg-danger rounded-circle border border-white" />
                        </div>
                      </td>
                      <td>
                        <div>Avram Tarasios</div>
                        <div className="small text-black-50">
                          <span>Recurring</span> | Registered: Jan 1, 2020
                        </div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-start">
                            <div className="fw-semibold">10%</div>
                          </div>
                          <div className="float-end">
                            <small className="text-black-50">
                              Jun 11, 2020 - Jul 10, 2020
                            </small>
                          </div>
                        </div>
                        <ProgressBar
                          className="progress-thin"
                          variant="info"
                          now={10}
                        />
                      </td>
                      <td className="text-center">
                        <FontAwesomeIcon icon={faCcVisa} size="lg" fixedWidth />
                      </td>
                      <td>
                        <div className="small text-black-50">Last login</div>
                        <div className="fw-semibold">5 minutes ago</div>
                      </td>
                      <td>
                        <Dropdown align="end">
                          <Dropdown.Toggle
                            as="button"
                            bsPrefix="btn"
                            className="btn-link rounded-0 text-black-50 shadow-none p-0"
                            id="action-user2"
                          >
                            <FontAwesomeIcon
                              fixedWidth
                              icon={faEllipsisVertical}
                            />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Info
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Edit
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-danger"
                              href="#/action-3"
                            >
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr className="align-middle">
                      <td className="text-center">
                        <div className="avatar avatar-md d-inline-flex position-relative">
                          <Image
                            width={128}
                            height={128}
                            className="rounded-circle"
                            src="/assets/img/avatars/3.jpg"
                            alt="user@email.com"
                          />
                          <span className="avatar-status position-absolute d-block bottom-0 end-0 bg-warning rounded-circle border border-white" />
                        </div>
                      </td>
                      <td>
                        <div>Quintin Ed</div>
                        <div className="small text-black-50">
                          <span>New</span> | Registered: Jan 1, 2020
                        </div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-start">
                            <div className="fw-semibold">74%</div>
                          </div>
                          <div className="float-end">
                            <small className="text-black-50">
                              Jun 11, 2020 - Jul 10, 2020
                            </small>
                          </div>
                        </div>
                        <ProgressBar
                          className="progress-thin"
                          variant="warning"
                          now={74}
                        />
                      </td>
                      <td className="text-center">
                        <FontAwesomeIcon
                          icon={faCcStripe}
                          size="lg"
                          fixedWidth
                        />
                      </td>
                      <td>
                        <div className="small text-black-50">Last login</div>
                        <div className="fw-semibold">1 hour ago</div>
                      </td>
                      <td>
                        <Dropdown align="end">
                          <Dropdown.Toggle
                            as="button"
                            bsPrefix="btn"
                            className="btn-link rounded-0 text-black-50 shadow-none p-0"
                            id="action-user3"
                          >
                            <FontAwesomeIcon
                              fixedWidth
                              icon={faEllipsisVertical}
                            />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Info
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Edit
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-danger"
                              href="#/action-3"
                            >
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr className="align-middle">
                      <td className="text-center">
                        <div className="avatar avatar-md d-inline-flex position-relative">
                          <Image
                            width={128}
                            height={128}
                            className="rounded-circle"
                            src="/assets/img/avatars/4.jpg"
                            alt="user@email.com"
                          />
                          <span className="avatar-status position-absolute d-block bottom-0 end-0 bg-secondary rounded-circle border border-white" />
                        </div>
                      </td>
                      <td>
                        <div>Enéas Kwadwo</div>
                        <div className="small text-black-50">
                          <span>New</span> | Registered: Jan 1, 2020
                        </div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-start">
                            <div className="fw-semibold">98%</div>
                          </div>
                          <div className="float-end">
                            <small className="text-black-50">
                              Jun 11, 2020 - Jul 10, 2020
                            </small>
                          </div>
                        </div>
                        <ProgressBar
                          className="progress-thin"
                          variant="danger"
                          now={98}
                        />
                      </td>
                      <td className="text-center">
                        <FontAwesomeIcon
                          icon={faCcPaypal}
                          size="lg"
                          fixedWidth
                        />
                      </td>
                      <td>
                        <div className="small text-black-50">Last login</div>
                        <div className="fw-semibold">Last month</div>
                      </td>
                      <td>
                        <Dropdown align="end">
                          <Dropdown.Toggle
                            as="button"
                            bsPrefix="btn"
                            className="btn-link rounded-0 text-black-50 shadow-none p-0"
                            id="action-user4"
                          >
                            <FontAwesomeIcon
                              fixedWidth
                              icon={faEllipsisVertical}
                            />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Info
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Edit
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-danger"
                              href="#/action-3"
                            >
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr className="align-middle">
                      <td className="text-center">
                        <div className="avatar avatar-md d-inline-flex position-relative">
                          <Image
                            width={128}
                            height={128}
                            className="rounded-circle"
                            src="/assets/img/avatars/5.jpg"
                            alt="user@email.com"
                          />
                          <span className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white" />
                        </div>
                      </td>
                      <td>
                        <div>Agapetus Tadeáš</div>
                        <div className="small text-black-50">
                          <span>New</span> | Registered: Jan 1, 2020
                        </div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-start">
                            <div className="fw-semibold">22%</div>
                          </div>
                          <div className="float-end">
                            <small className="text-black-50">
                              Jun 11, 2020 - Jul 10, 2020
                            </small>
                          </div>
                        </div>
                        <ProgressBar
                          className="progress-thin"
                          variant="info"
                          now={22}
                        />
                      </td>
                      <td className="text-center">
                        <FontAwesomeIcon
                          icon={faCcApplePay}
                          size="lg"
                          fixedWidth
                        />
                      </td>
                      <td>
                        <div className="small text-black-50">Last login</div>
                        <div className="fw-semibold">Last week</div>
                      </td>
                      <td>
                        <Dropdown align="end">
                          <Dropdown.Toggle
                            as="button"
                            bsPrefix="btn"
                            className="btn-link rounded-0 text-black-50 shadow-none p-0"
                            id="action-user5"
                          >
                            <FontAwesomeIcon
                              fixedWidth
                              icon={faEllipsisVertical}
                            />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Info
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Edit
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-danger"
                              href="#/action-3"
                            >
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr className="align-middle">
                      <td className="text-center">
                        <div className="avatar avatar-md d-inline-flex position-relative">
                          <Image
                            width={128}
                            height={128}
                            className="rounded-circle"
                            src="/assets/img/avatars/6.jpg"
                            alt="user@email.com"
                          />
                          <span className="avatar-status position-absolute d-block bottom-0 end-0 bg-danger rounded-circle border border-white" />
                        </div>
                      </td>
                      <td>
                        <div>Friderik Dávid</div>
                        <div className="small text-black-50">
                          <span>New</span> | Registered: Jan 1, 2020
                        </div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-start">
                            <div className="fw-semibold">43%</div>
                          </div>
                          <div className="float-end">
                            <small className="text-black-50">
                              Jun 11, 2020 - Jul 10, 2020
                            </small>
                          </div>
                        </div>
                        <ProgressBar
                          className="progress-thin"
                          variant="success"
                          now={43}
                        />
                      </td>
                      <td className="text-center">
                        <FontAwesomeIcon icon={faCcAmex} size="lg" fixedWidth />
                      </td>
                      <td>
                        <div className="small text-black-50">Last login</div>
                        <div className="fw-semibold">Yesterday</div>
                      </td>
                      <td>
                        <Dropdown align="end">
                          <Dropdown.Toggle
                            as="button"
                            bsPrefix="btn"
                            className="btn-link rounded-0 text-black-50 shadow-none p-0"
                            id="action-user6"
                          >
                            <FontAwesomeIcon
                              fixedWidth
                              icon={faEllipsisVertical}
                            />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Info
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Edit
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-danger"
                              href="#/action-3"
                            >
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Home;
