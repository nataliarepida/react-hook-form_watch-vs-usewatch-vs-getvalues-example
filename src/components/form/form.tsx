import { FORM_FIELDS, FORM_FIELDS_LABELS } from "./constants";

function Form(): JSX.Element {
  return (
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <label htmlFor={FORM_FIELDS.first_name} className="active">
            {FORM_FIELDS_LABELS.first_name}
          </label>
          <input id={FORM_FIELDS.first_name} type="text" className="validate" />
        </div>
        <div className="input-field col s6"></div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <label htmlFor={FORM_FIELDS.last_name} className="active">
            {FORM_FIELDS_LABELS.last_name}
          </label>
          <input id={FORM_FIELDS.last_name} type="text" className="validate" />
        </div>
        <div className="input-field col s6"></div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <label htmlFor={FORM_FIELDS.email} className="active">
            {FORM_FIELDS_LABELS.email}
          </label>
          <input id={FORM_FIELDS.email} type="email" className="validate" />
        </div>
        <div className="input-field col s6"></div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <label htmlFor={FORM_FIELDS.telephone} className="active">
            {FORM_FIELDS_LABELS.telephone}
          </label>
          <input id={FORM_FIELDS.telephone} type="tel" className="validate" />
        </div>
        <div className="input-field col s6"></div>
      </div>

      <button type="submit" className="waves-effect waves-light btn">
        Submit
      </button>
    </form>
  );
}

export default Form;
