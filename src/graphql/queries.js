/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSalary = /* GraphQL */ `
  query GetSalary($id: ID!) {
    getSalary(id: $id) {
      id
      name
      position
      wage
      currency
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSalarys = /* GraphQL */ `
  query ListSalarys(
    $filter: ModelSalaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        position
        wage
        currency
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const salaryByName = /* GraphQL */ `
  query SalaryByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelSalaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    salaryByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        position
        wage
        currency
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
