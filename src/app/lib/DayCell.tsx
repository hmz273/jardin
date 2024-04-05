import { startOfDay } from 'date-fns';
import React, { memo, useContext } from 'react';
import styled from 'styled-components';

import { DisablePreviousDaysContext } from './DatePicker';
import { useDayCell } from './hooks/useDayCell';
import { YearMonthContext } from './MonthTable';
import { mixin } from './styles/mixin';
import theme from './styles/theme';

interface Props {
  day: number | false;
}

interface CheckIsPreviousDayInput {
  year: number;
  month: number;
  day: number | false;
}

const checkIsPreviousDay = ({ year, month, day }: CheckIsPreviousDayInput) => {
  if (!day) {
    return true;
  }

  const currentCellDate = new Date(year, month - 1, day);
  const today = startOfDay(new Date());

  return today > currentCellDate;
};

function DayCell({ day }: Props) {
  const [year, month] = useContext(YearMonthContext);
  const {
    isSelected,
    isBetweenPickedDates,
    isFirstPickedDate,
    isSecondPickedDate,
    onClickDayCell,
  } = useDayCell({ year, month, day });
  const isPreviousDaysDisabled = useContext(DisablePreviousDaysContext);
  const isPreviousDay = checkIsPreviousDay({ year, month, day });

  const onKeyUpDayCell = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key !== 'Enter') {
      return;
    }

    onClickDayCell();
  };

  return (
    <S.CellLayer
      isBetweenPickedDates={!!day && isBetweenPickedDates}
      isFirstPickedDate={isFirstPickedDate}
      isSecondPickedDate={isSecondPickedDate}
    >
      {day && (
        <S.Cell
          tabIndex={isPreviousDay ? undefined : 0}
          onClick={onClickDayCell}
          onKeyUp={onKeyUpDayCell}
          isSelected={isSelected}
          disabled={isPreviousDaysDisabled && isPreviousDay}
        >
          {day}
        </S.Cell>
      )}
    </S.CellLayer>
  );
}

const S = {
  CellLayer: styled.td<{
    isBetweenPickedDates: boolean;
    isFirstPickedDate: boolean;
    isSecondPickedDate: boolean;
  }>`
    width: 48px !important;
    height: 48px !important;
    ${({ isBetweenPickedDates }) =>
      isBetweenPickedDates &&
      `
      background-color: #A7895C;
    `};

    
    ${({ isFirstPickedDate }) =>
      isFirstPickedDate &&
      `
    `}

    ${({ isSecondPickedDate }) =>
      isSecondPickedDate &&
      `
    `}
  `,

  Cell: styled.div<{ isSelected: boolean; disabled: boolean }>`
    ${mixin.flexbox({ ai: 'center', jc: 'center' })};
    height: 100%;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 100ms;
    font-size: ${theme.fontSize.xs} !important;

    &:hover {
      border-color: ${theme.color.gray1};
    }

    ${({ disabled }) =>
      disabled &&
      `
       pointer-events: none;
       color: ${theme.color.gray4};
    `}
    
    ${({ isSelected }) =>
      isSelected &&
      `
        background-color: #A7895C;
        color: ${theme.color.white};
      `}
  `,
};

export default memo(DayCell);
