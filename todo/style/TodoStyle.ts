import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
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
  
  & th,
  & td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
  
  & thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
  }
  
  & tbody + tbody {
    border-top: 2px solid #dee2e6;
  }
  
  &:hover {
    color: #212529;
    text-decoration: none;
  }
`;