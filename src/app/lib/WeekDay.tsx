import React from 'react';
import styled from 'styled-components';

import theme from './styles/theme';
import { getWeekDay, isBrowser } from './utils';

const language = isBrowser() ? navigator.language : 'en-US';

const weekday = getWeekDay(language);

function WeekDay() {
  return (
    <S.WeekDay>
      <S.Row>
        {weekday.map((day) => (
          <S.Cell key={day}>{day}</S.Cell>
        ))}
      </S.Row>
    </S.WeekDay>
  );
}

const S = {
  Cell: styled.th`
    color: #fff;
    font-weight: normal !important;
    font-size: ${theme.fontSize.xs} !important;
  `,

  Row: styled.tr`
    height: 24px !important;
    color: #fff;
  `,

  WeekDay: styled.thead`
    padding: 0 !important;
    color: #fff;
  `,
};

export default WeekDay;
