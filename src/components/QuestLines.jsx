import React from 'react';

function QuestLines(props) {
  return (
    <div className="accordion" id="accordionExample">
      <div className='panel'>
        <div className="accordion-item">
          <h2 className="accordion-header" id={props.headingId}>
            <button id="quest-name" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={props.dataBsTarget} aria-expanded="true" aria-controls={props.aria}>
              {props.questLine}
            </button>
          </h2>
          <div id={props.aria} className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">

              {props.allQuests.map(questName => <label class="list-group-item d-flex gap-2">
                <input class="form-check-input flex-shrink-0" type="checkbox" value="" checked={props.checked} />
                <span>
                  {questName}
                </span>
              </label>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default QuestLines;