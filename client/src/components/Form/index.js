import React from 'react';
import './form.css'

const Form = () => {

  return (
    <div className="container">
        <h1>
          <label for="lessonTitle">Title:</label>
          <input type="text" className="form-control" id="lessonTitle" placeholder=""
            onfocus="this.placeholder = ''" dataname="Lesson Title"></input>
        </h1>
 
          <div className="d-flex justify-content-around">
            <label for="organization">Organization</label>
            <select name="orgs" form="organization">
              <option value="boyScouts">Boy Scouts of America</option>
              <option value="rwa">Refugee Womens Alliance</option>
              <option value="seattleFood">Seattle Food Bank</option>
            </select>
            <button type="button" className="btn btn-secondary">
              Add New
      </button>

            <label for="projects">Projects</label>
            <select name="projs" form="projects">
              <option value="archery">Archery</option>
              <option value="fishing">Fishing</option>
              <option value="camping">Camping</option>
            </select>
            <button type="button" className="btn btn-secondary">
              Add New
      </button>
          </div>



          <label for="objective">Objective</label>
          <textarea type="text" className="form-control" id="objective" placeholder=""
            onfocus="this.placeholder = ''" dataname="Objective"></textarea>

          <label for="oveview">Overview</label>
          <textarea type="text" className="form-control" id="overview" placeholder=""
            onfocus="this.placeholder = ''" dataname="Overview"></textarea>

          <label for="preparation">Preparation</label>
          <textarea type="text" className="form-control" id="preparation" placeholder=""
            onfocus="this.placeholder = ''" dataname="Preparation"></textarea>

          <label for="agenda">Agenda</label>
          <textarea type="text" className="form-control" id="agenda" placeholder=""
            onfocus="this.placeholder = ''" dataname="Agenda"></textarea>

          <label for="materials">Materials</label>
          <textarea type="text" className="form-control" id="materials" placeholder=""
            onfocus="this.placeholder = ''" dataname="Materials"></textarea>

          <label for="description">Description</label>
          <textarea type="text" className="form-control" id="description" placeholder=""
            onfocus="this.placeholder = ''" dataname="Description"></textarea>

          <div className="d-flex justify-content-around">
            <label for="links">Links</label>
            <input type="text" className="form-control" id="links" placeholder=""
              onfocus="this.placeholder = ''" dataname="Links"></input>
            <button type="button" className="btn btn-secondary">
              Add New
      </button>

            <label for="attachments">Attachments</label>
            <input type="text" className="form-control" id="attach" placeholder=""
              onfocus="this.placeholder = ''" dataname="Attachments"></input>
            <button type="button" className="btn btn-secondary">
              Add New
      </button>
          </div>

        </div>
        );
     }
      
     export default Form;
