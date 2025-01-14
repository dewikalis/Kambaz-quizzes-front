export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-select-one-assignment">
              <option value="ASSIGNMENT1">Assignment1</option>
              <option value="ASSIGNMENT2">Assignment2</option>
              <option selected value="ASSIGNMENT3">
                Assignment3
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-select-one-grade">
              <option value="PERCENTAGE">Percentage</option>
              <option value="NUMBER">Number</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="ONLINE">Online</option>
              <option value="IN-PERSON">In-person</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label>Online Entry Options</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-text-entry"
            />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </td>
          <td></td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-website-url"
            />
            <label htmlFor="wd-website-url">Website URL</label>
          </td>
          <td></td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </td>
          <td></td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </td>
          <td></td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-file-uploads"
            />
            <label htmlFor="wd-file-uploads">File Uploads</label>
          </td>
          <td></td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
          <td>
            <input type="text" title="Everyone" id="wd-assign-to" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date"> Due: </label>
          </td>
          <td>
            <input type="date" value="2024-05-13" id="wd-due-date" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from"> Available from</label>
          </td>
          <td>
            <input type="date" value="2024-05-06" id="wd-available-from" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until"> Until</label>
          </td>
          <td>
            <input type="date" value="2024-05-20" id="wd-available-until" />
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" id="wd-cancel">
              Cancel
            </button>
            <button type="button" id="wd-save">
              Save
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
