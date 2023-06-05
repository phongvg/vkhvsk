import React, { useState, useEffect } from 'react';
//API
import * as fieldAPI from '../../api/field';
//COMPONENTS
import { Col, Row } from 'react-bootstrap';
import CloseIcon from '../../assets/icon/white_close_icon.svg';

//CSS
import './css/bountySideMenu.css';
import '../css/bgColors.css';
import '../css/sharedStyles.css';
import '../css/typography.css';
import { SUPPORT_LANGUAGES } from '../constants';
import { Link } from '@reach/router';

const JobSideMenu = ({ setJobsFilters, jobsFilters, scrollPosition }) => {
  const [quickSelectItems, setQuickSelectItems] = useState([]);
//   const [existingFields, setExistingFields] = useState([]);
//   const getAllFields = async () => {
//     try {
//       const { docs } = await fieldAPI.getAllFields();
//       if (docs) {
//         setExistingFields(docs);
//       }
//     } catch (error) {}
//   };
  function unCheck() {
    setQuickSelectItems([]);
    setJobsFilters({
      search: '',
      status: null,
      languages: [],
      fields: [],
      skills: [],
      isHiring: null,
    });
    var x = document.getElementsByClassName('checkbox');
    for (let i = 0; i <= x.length - 1; i++) {
      x[i].checked = false;
    }
    var y = document.getElementsByClassName('radio');
    for (let i = 0; i <= y.length - 1; i++) {
      y[i].checked = false;
    }
  }

//   useEffect(() => {
//     getAllFields();
//   }, []);

  useEffect(() => {
    setJobsFilters({
      ...jobsFilters,
      skills: quickSelectItems,
    });
  }, [quickSelectItems]);

  const handleJobsFilters = (e, filter) => {
    let { value, checked } = e.target;
    console.log('value' + value);
    if (filter === 'search') {
      setJobsFilters({
        ...jobsFilters,
        search: e.target.value.toLowerCase(),
      });
      return;
    }

    if (filter === 'skills') {
      setJobsFilters({
        ...jobsFilters,
        skills: value === 'All' ? [] : [e.target],
      });
      return;
    }
    if (filter === 'status') {
      setJobsFilters({
        ...jobsFilters,
        [filter]: value,
      });
      return;
    }
    if (jobsFilters === 'timeEstimationType' && value === 'Hours') {
      setJobsFilters({
        ...jobsFilters,
        [filter]: value,
      });
      return;
    }
    if (jobsFilters === 'timeEstimationType' && value === 'Days') {
      setJobsFilters({
        ...jobsFilters,
        [filter]: value,
      });
      return;
    }
    if (jobsFilters === 'timeEstimationType' && value === 'Weeks') {
      setJobsFilters({
        ...jobsFilters,
        [filter]: value,
      });
      return;
    }
    if (jobsFilters === 'timeEstimationType' && value === 'Months') {
      setJobsFilters({
        ...jobsFilters,
        [filter]: value,
      });
      return;
    }
    if (!jobsFilters[filter].includes(value) && checked) {
      setJobsFilters({
        ...jobsFilters,
        [filter]: [...jobsFilters[filter], value],
      });
    }
    if (jobsFilters[filter].includes(value) && !checked) {
      setJobsFilters({
        ...jobsFilters,
        [filter]: [...jobsFilters[filter].filter((e) => e !== value)],
      });
    }
  };

  const addQuickSelectItem = (item, action) => {
    if (action === 'add') {
      return (
        !quickSelectItems.includes(item) &&
        setQuickSelectItems([...quickSelectItems, item])
      );
    }
    setQuickSelectItems(quickSelectItems.filter((e) => e !== item));
  };

  const removeSearchInput = (item) => {
    const newList = quickSelectItems.filter((el) => el.value !== item.value);
    setQuickSelectItems(newList);
  };

  const handleOptions = (item) => {
    const newItem = { value: item };
    const alreadyExist = quickSelectItems.some(
      (value) => value.value === newItem.value
    );

    if (!alreadyExist) {
      setQuickSelectItems([...quickSelectItems, newItem]);
    } else {
      removeSearchInput(newItem);
    }
  };

  return (
    <div
      className="bounty-sideMenu-container px-3"
      style={{
        position: scrollPosition > 433 ? 'fixed' : 'absolute',
        top: scrollPosition > 433 && 0,
        left: scrollPosition > 433 && 0,
        width: '25%',
      }}
    >
      <Row>
        <Col className="py-2 my-3">
          <input
            placeholder="Search"
            type="text"
            className="bounty-sideMenu-search"
            onChange={(e) => handleJobsFilters(e, 'search')}
          />
        </Col>
        <div
          className="grant-side-menu-searched-pills"
          data-testid="quick-select"
        >
          {quickSelectItems.map((item, index) => (
            <span
              key={item.value}
              className="grant-side-menu-pill"
              data-testid="child"
            >
              {item.value}
              <span
                onClick={() => addQuickSelectItem(item)}
                className="grant-side-menu-close-icon"
              >
                <img src={CloseIcon} alt="close-icon" height={8} width={8} />
              </span>
            </span>
          ))}
        </div>
      </Row>
      <Row>
        <Col xs={12} className="pt-2 px-3">
          <h5 className="regular">Fields</h5>
        </Col>
        <Col>
          {/* <div className="grant-side-menu-searched-pills">
              {bountiData.map((item, i) => (
                <span
                  onClick={() => handleOptions(item)}
                  className={`grant-side-menu-pill-padding cursor-pointer ${
                    quickSelectItems.some((value) => value.value === item)
                      ? `grant-side-menu-pill `
                      : 'grant-side-menu-pill grant-side-menu-pill-not-active'
                  }`}
                  key={i}
                >
                  {item}
                </span>
              ))}
            </div> */}
          <select
            id="fields"
            data-testid="select-field"
            className="bounty-sideMenu-dropDown"
            name="fields"
            onChange={(e) => handleJobsFilters(e, 'fields')}
          >
            <option>All</option>
            {SUPPORT_LANGUAGES.map((field, index) => (
              <option
                data-testid="option-field"
                key={field + index}
                value={field}
              >
                {field}
              </option>
            ))}
          </select>
        </Col>
      </Row>
      <Row>
        {/* DropDown List */}
        <Col xs={12} className="mt-4 px-3">
          <h5 className="regular">Skills</h5>
        </Col>
        <Col>
          <select
            id="skills"
            data-testid="select-skill"
            className="bounty-sideMenu-dropDown"
            name="skills"
            onChange={(e) => handleJobsFilters(e, 'skills')}
          >
            <option>All</option>
            {SUPPORT_LANGUAGES.map((skill, index) => (
              <option
                data-testid="option-skill"
                key={skill + index}
                value={skill}
              >
                {skill}
              </option>
            ))}
          </select>
        </Col>
      </Row>
      {/* CheckBoxes */}
      <Row>
        <Col>
          <Col className="mt-4">
            <h5 className="regular">Status</h5>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <input
                data-testid="radio"
                onChange={(e) => handleJobsFilters(e, 'status')}
                value="open"
                type="radio"
                name="status"
                className="checkbox"
                id="status-open"
              />{' '}
              Accept Application
            </span>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <input
                data-testid="radio"
                onChange={(e) => handleJobsFilters(e, 'status')}
                value="done"
                type="radio"
                name="status"
                className="checkbox"
                id="status-done"
              />{' '}
              Complete/Close
            </span>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <input
                data-testid="radio"
                onChange={(e) => handleJobsFilters(e, 'status')}
                value="noApplications"
                type="radio"
                name="status"
                className="checkbox"
                id="status-noApplications"
              />{' '}
              No longer accept application
            </span>
          </Col>
        </Col>
      </Row>
      <Row className="my-2">
        <Row className="my-4">
          <Col>
            <Link to="/policy">Use Policies</Link>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <button data-testid="rf-button" onClick={unCheck}>
                Reset
              </button>
            </span>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default JobSideMenu;
