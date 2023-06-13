import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledButton = styled.button`
  border-radius: 20px;
  border: 1px solid #CDDBF6;
  background-color: transparent;
  color: #000000;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  
  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PageHeader = styled.div`
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eee;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-collapse: collapse; /* 이 부분을 추가하여 셀 경계가 겹치게 만듭니다. */

  & th,
  & td {
    padding: 0.75rem;
    vertical-align: middle; /* 세로 중앙 정렬을 위해 top 대신 middle을 사용합니다. */
    border: 1px solid #dee2e6; /* 셀 경계선 추가 */
    text-align: center; /* 텍스트 가로 중앙 정렬 */
  }

  & th:nth-child(1) {
    width: 8%;
  }

  & th:nth-child(2) {
    width: 92%;
  }

  & thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
  }

  & tbody + tbody {
    border-top: 2px solid #dee2e6;
  }

  & tbody tr:hover {
    background-color: #f8f9fa;
  }
`;