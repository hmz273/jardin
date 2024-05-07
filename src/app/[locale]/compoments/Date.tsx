import React from "react";
import { DatePicker, useDatePickGetter, useDatePickReset } from "../lib";

const Date = () => {
  // const { pickedDates } = useDatePickGetter();

  // const resetFunc = useDatePickReset();

  return (
    <div>
      <DatePicker disablePreviousDays />

      {/* <div>{pickedDates.firstPickedDate?.toString()}</div>
      <div>{pickedDates.secondPickedDate?.toString()}</div>
      <button type="button" onClick={resetFunc}>
        Reset
      </button> */}
    </div>
  );
};

export default Date;
