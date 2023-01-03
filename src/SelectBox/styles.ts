import styled from '@emotion/styled';
import { GRAY_SCALE } from '../common/ColorBaseToken';

const StlyedSelectWrapper = styled.div`
  width: 335px;
  height: 52px;
  background: #fcfcfc;
  border: 1px solid ${GRAY_SCALE.color_gray_9};
  border-radius: 8px;
  cursor: pointer;
`;

const StyledListWrapper = styled.div`
  position: absolute;
  overflow: scroll;
  margin: 0 0 200px 0;
  width: 335px;
  max-height: 180px;
  background: ${GRAY_SCALE.color_gray_2};
  box-shadow: 0px 8px 20px rgba(31, 31, 31, 0.08);
  border-radius: 8px;
  cursor: pointer;
`;

const StlyedListTitle = styled.li`
  margin: 0 0 8px 0;
  padding: 13px 16px;
  font-size: 16px;
`;

const StlyedListItem = styled(StlyedListTitle)`
  margin: 0 0 8px 0;
  padding: 13px 16px;
  font-size: 16px;

  &:first-child {
    margin: 8px 0;
  }

  &:hover {
    background: ${GRAY_SCALE.color_gray_3};
  }
`;

export { StlyedSelectWrapper, StyledListWrapper, StlyedListItem, StlyedListTitle };
