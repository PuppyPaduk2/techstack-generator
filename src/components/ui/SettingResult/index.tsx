import React from 'react';
import * as Style from './style';
import { reverse } from '../../../utils/fp';

export enum ResultType {
  html = 'HTML',
  markdown = 'MARKDOWN',
}

interface SettingResultProps {
  results: ResultType[];
  changeResults: (results: ResultType[]) => void;
}

function SettingResult({ results, changeResults }: SettingResultProps) {
  const clickCheckBox = (selectedResult: ResultType) => {
    changeResults(reverse(selectedResult, results));
  };

  return (
    <Style.Container>
      <Style.Title>RESULT</Style.Title>
      <Style.CheckBoxWrapper onClick={() => clickCheckBox(ResultType.html)}>
        <Style.CheckBox aria-label="html-checkbox">
          {results.find((result) => result === ResultType.html) && <Style.Check aria-label="html-check" />}
        </Style.CheckBox>
        <Style.CheckTitle>{ResultType.html}</Style.CheckTitle>
      </Style.CheckBoxWrapper>
      <Style.CheckBoxWrapper onClick={() => clickCheckBox(ResultType.markdown)}>
        <Style.CheckBox aria-label="markdown-checkbox">
          {results.find((result) => result === ResultType.markdown) && <Style.Check aria-label="markdown-check" />}
        </Style.CheckBox>
        <Style.CheckTitle>{ResultType.markdown}</Style.CheckTitle>
      </Style.CheckBoxWrapper>
    </Style.Container>
  );
}

export default SettingResult;
