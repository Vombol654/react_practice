import React from "react";
import InputType from "./InputType";
// import { initialFields } from "../util/initialFields";
const InvestmentCalculator = ({ onChangeInput, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputType
          className="input-group"
          name="INITIAL_INVESTMENT"
          type="number"
          required
          onChange={onChangeInput}
          value={userInput.INITIAL_INVESTMENT}
        />
        <InputType
          className="input-group"
          name="ANNUAL_INVESTMENT"
          type="number"
          required
          onChange={onChangeInput}
          value={userInput.ANNUAL_INVESTMENT}
        />
      </div>
      <div className="input-group">
        <InputType
          className="input-group"
          name="EXPECTED_RETURN"
          type="number"
          required
          onChange={onChangeInput}
          value={userInput.EXPECTED_RETURN}
        />
        <InputType
          className="input-group"
          name="DURATION"
          type="number"
          required
          onChange={onChangeInput}
          value={userInput.DURATION}
        />
      </div>
    </section>
  );
};

export default InvestmentCalculator;
