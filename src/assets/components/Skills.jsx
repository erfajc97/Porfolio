import React from 'react';

const Skills = () => {
    return (
      <div className='principal_container_skills' >
        <div className="container_title_skils">

        <h3 className="title_skills">Skills</h3>
        </div>

        <p >
          "Technology is just a tool. In terms of achieving things, the human
          being is worth more" - Bill Gates
        </p>

        <div className="container_skills_description">
          <div className="contain_info_skills">
            <i class="bx bx-group bx-border-circle bx-md"></i>
            <div className="info_skills">
              <b>Teamwork</b>
              <p>None of us is as good as all of us put together.</p>
            </div>
          </div>

          <div className="contain_info_skills">
            <i class="bx bx-time-five bx-border-circle bx-md"></i>
            <div className="info_skills">
              <b>Time management</b>
              <p>Knowing how to choose time is saving time.</p>
            </div>
          </div>

          <div className="contain_info_skills">
            <i class="bx bx-wrench bx-border-circle bx-md"></i>

            <div className="info_skills">
              <b>Problem resolution</b>
              <p>
                We cannot solve problems by thinking in the same way as when we
                created them.
              </p>
            </div>
          </div>

          <div className="contain_info_skills">
            <i class="bx bx-category-alt  bx-border-circle bx-md"></i>

            <div className="info_skills">
              <b>Adaptation</b>
              <p>An adaptive mind has a better learning capacity.</p>
            </div>
          </div>

          <div className="contain_info_skills">
            <i class="bx bx-message-square-detail bx-border-circle bx-md"></i>
            <div className="info_skills">
              <b>Responsibility</b>
              <p>Greatness is about responsibility, not making excuses.</p>
            </div>
          </div>

          <div className="contain_info_skills">
            <i class="bx bx-group bx-border-circle bx-md"></i>
            <div className="info_skills">
              <b>Comunication</b>
              <p>Communication is a window of opportunity.</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Skills;